function generateObjectPath<
  T,
  P1 extends keyof T
>(t: T, prop1: P1): string;

function generateObjectPath<
  T,
  P1 extends keyof T,
  P2 extends keyof T[P1]
>(t: T, prop1: P1, prop2: P2): string;

function generateObjectPath<
  T,
  P1 extends keyof T,
  P2 extends keyof T[P1],
  P3 extends keyof T[P1][P2]
>(t: T, prop1: P1, prop2: P2, prop3: P3): string;

function generateObjectPath<
  T,
  P1 extends keyof T,
  P2 extends keyof T[P1],
  P3 extends keyof T[P1][P2],
  P4 extends keyof T[P1][P2][P3]
>(t: T, prop1: P1, prop2: P2, prop3: P3, prop4: P4): string;

function generateObjectPath<
  T,
  P1 extends keyof T,
  P2 extends keyof T[P1],
  P3 extends keyof T[P1][P2],
  P4 extends keyof T[P1][P2][P3],
  P5 extends keyof T[P1][P2][P3][P4]
>(t: T, prop1: P1, prop2: P2, prop3: P3, prop4: P4, prop5: P5): string;

function generateObjectPath(t: {}, ...props: string[]): string {
  return props.join('.');
}

export default generateObjectPath;
