/**
 * Base error class for all application errors
 */
export abstract class BaseError extends Error {
  public readonly statusCode: number;
  public readonly errorCode?: string;
  public readonly isOperational: boolean = true;
  public readonly context?: Record<string, unknown>;

  constructor(
    message: string | string[],
    statusCode: number,
    errorCode?: string,
    context?: Record<string, unknown>,
  ) {
    super(Array.isArray(message) ? message.join(' ') : message);
    this.statusCode = statusCode;
    this.errorCode = errorCode;
    this.context = context;

    Error.captureStackTrace(this, this.constructor);
  }
}