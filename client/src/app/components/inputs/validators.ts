export const max6 = (value: number): string | undefined => (
  value <= 6 ? undefined : "Can't be greater than 6"
);

export const max7 = (value: number): string | undefined => (
  value <= 7 ? undefined : "Can't be greater than 7"
);

export const min0 = (value: number): string | undefined => (
  value >= 0 ? undefined : "Can't be lower than 0"
);

export const required = (value: string | number): string | undefined => (
  value || typeof value === "number" ? undefined : "Required"
);
