export const required = (value: string | number): string | undefined => (
  value || typeof value === "number" ? undefined : "Required"
);
