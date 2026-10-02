"use client";

import { useSyncExternalStore } from "react";
import { cartReducer, countItems, parseStoredCart, type CartAction, type CartLine } from "@/lib/cart";

/**
 * The cart lives in localStorage and is read through useSyncExternalStore.
 * That keeps it out of React state (no provider, no hydration effect) and keeps
 * open tabs in sync via the `storage` event.
 */

const STORAGE_KEY = "beautimania:cart:v1";
const EMPTY: CartLine[] = [];

const listeners = new Set<() => void>();
let snapshot: CartLine[] | null = null;

function readStorage(): string | null {
  try {
    return window.localStorage.getItem(STORAGE_KEY);
  } catch {
    return null; // storage blocked (e.g. some private modes): cart works for this page view only
  }
}

function writeStorage(lines: CartLine[]) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
  } catch {
    // ignore, see readStorage
  }
}

function getSnapshot(): CartLine[] {
  snapshot ??= parseStoredCart(readStorage());
  return snapshot;
}

function getServerSnapshot(): CartLine[] {
  return EMPTY;
}

function emit() {
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  const onStorage = (event: StorageEvent) => {
    if (event.key !== STORAGE_KEY) return;
    snapshot = null;
    emit();
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", onStorage);
  };
}

function dispatch(action: CartAction) {
  snapshot = cartReducer(getSnapshot(), action);
  writeStorage(snapshot);
  emit();
}

export const cartActions = {
  add: (slug: string, quantity = 1) => dispatch({ type: "add", slug, quantity }),
  setQuantity: (slug: string, quantity: number) => dispatch({ type: "setQuantity", slug, quantity }),
  remove: (slug: string) => dispatch({ type: "remove", slug }),
  clear: () => dispatch({ type: "clear" }),
};

export function useCartLines(): CartLine[] {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export function useCartCount(): number {
  return countItems(useCartLines());
}

const noopSubscribe = () => () => {};

/** False during server render and hydration, true afterwards. Avoids flashing an empty cart. */
export function useHasHydrated(): boolean {
  return useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false,
  );
}
