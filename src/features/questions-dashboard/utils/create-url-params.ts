/**
 * Converts a filter object into URLSearchParams.
 * Ignores null, undefined, false, empty arrays, and empty strings.
 */

export function createUrlParams(filters: Record<string, unknown>) {
  const params = new URLSearchParams();

  Object.entries(filters).forEach(([key, value]) => {
    if (value === null || value === undefined || value === "") return;

    if (Array.isArray(value)) {
      if (value.length > 0) {
        params.set(key, value.join(","));
      }
    } else if (typeof value === "boolean") {
      if (value) {
        params.set(key, "true");
      }
    } else if (typeof value === "number") {
      params.set(key, String(value));
    } else if (typeof value === "string" && value.trim()) {
      params.set(key, value.trim());
    }
  });

  return params;
}
