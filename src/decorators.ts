// Декоратор для додавання timestamp
export function withTimestamp<This, Args extends [string, ...any[]], Return>(
  originalMethod: (this: This, ...args: Args) => Return,
  context: ClassMethodDecoratorContext<
    This,
    (this: This, ...args: Args) => Return
  >
): (this: This, ...args: Args) => Return {
  return function (this: This, ...args: Args): Return {
    const now = new Date();
    const timestamp = now.toISOString().replace("T", " ").substring(0, 19);
    const modifiedMessage = `[${timestamp}] ${args[0]}`;
    const newArgs = [modifiedMessage, ...args.slice(1)] as Args;
    return originalMethod.call(this, ...newArgs);
  };
}

// Декоратор для перетворення в верхній регістр
export function uppercase<This, Args extends [string, ...any[]], Return>(
  originalMethod: (this: This, ...args: Args) => Return,
  context: ClassMethodDecoratorContext<
    This,
    (this: This, ...args: Args) => Return
  >
): (this: This, ...args: Args) => Return {
  return function (this: This, ...args: Args): Return {
    const upperMessage = args[0].toUpperCase();
    const newArgs = [upperMessage, ...args.slice(1)] as Args;
    return originalMethod.call(this, ...newArgs);
  };
}
