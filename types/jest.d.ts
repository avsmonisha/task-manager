// Type definitions for Jest testing environment
declare namespace jest {
  function mock(moduleName: string, factory?: () => any): void;
  function spyOn(object: any, method: string): jest.SpyInstance;
}

declare const describe: (name: string, fn: () => void) => void;
declare const it: (name: string, fn: () => void) => void;
declare const beforeEach: (fn: () => void) => void;
declare const afterEach: (fn: () => void) => void;
declare const expect: jest.Expect;

interface JestMatchers<R> {
  toBeInTheDocument(): R;
  toHaveTextContent(text: string): R;
  toHaveAttribute(attr: string, value?: string): R;
  toHaveClass(...classNames: string[]): R;
  toBeGreaterThan(expected: number): R;
  toBeGreaterThanOrEqual(expected: number): R;
}

declare namespace jest {
  interface Expect {
    <T = {}>(actual: T): JestMatchers<T> & Matchers<T>;
  }

  interface Matchers<R> {
    toBe(expected: any): R;
    toEqual(expected: any): R;
    toBeTruthy(): R;
    toBeFalsy(): R;
    toBeNull(): R;
    toBeUndefined(): R;
    toBeDefined(): R;
    toContain(expected: any): R;
    toMatch(expected: string | RegExp): R;
  }

  interface SpyInstance {
    mockReturnValue(value: any): this;
    mockImplementation(fn: (...args: any[]) => any): this;
    mockResolvedValue(value: any): this;
    mockRejectedValue(value: any): this;
  }
}