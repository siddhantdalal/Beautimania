import Image, { type ImageProps } from "next/image";

/** Set only for the GitHub Pages build, where the site lives under /<repo>. */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/**
 * next/image for files in /public. next/image doesn't add the configured basePath to
 * string paths, so this does. Statically imported images already include it.
 */
export function SiteImage({ src, alt, ...props }: ImageProps) {
  const resolved = typeof src === "string" && src.startsWith("/") ? `${basePath}${src}` : src;
  return <Image src={resolved} alt={alt} {...props} />;
}
