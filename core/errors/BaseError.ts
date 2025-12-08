/**
 * Base error class for all application errors
 */
export abstract class BaseError extends Error {
  public readonly statusCode: number;
  public readonly errorCode?: string;
  public readonly isOperational: boolean = true;
  public readonly context?: Record<string, unknown>;
  public readonly messages?: string[]

  constructor(
    message: string,
    statusCode: number,
    errorCode?: string,
    context?: Record<string, unknown>,
    messages?: string[],
  ) {
    super(message);
    this.statusCode = statusCode;
    this.errorCode = errorCode;
    this.context = context;
    this.messages = messages;

    Error.captureStackTrace(this, this.constructor);
  }
}