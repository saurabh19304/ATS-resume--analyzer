/**
 * Convert bytes to a human-readable string expressed in kilobytes (KB).
 * Examples:
 *  formatSize(1024) => "1.0 KB"
 *  formatSize(1536) => "1.5 KB"
 */
export function formatSize(bytes: number, decimals = 1): string {
  if (typeof bytes !== "number" || Number.isNaN(bytes) || bytes <= 0) return "0 KB";
  const kb = bytes / 1024;
  return `${Number(kb.toFixed(decimals))} KB`;
}
