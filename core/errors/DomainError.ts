
import { ZodError } from 'zod';
import { ERROR_CODES, HTTP_STATUS } from '../util/constants';
import { BaseError } from './BaseError';

/**
 * Domain-specific business logic errors
 */
export class DomainError extends BaseError {
  constructor(message: string | string[], errorCode: string, statusCode: number, context?: Record<string, unknown>) {
    super(message, statusCode, errorCode, context);
  }
}

/**
 * Predefined domain error factory functions
 */
export const DomainErrors = {

  ValidationError: (message: string[]) =>
    new DomainError(
      message.join(", "),
      ERROR_CODES.VALIDATION_ERROR,
      HTTP_STATUS.BAD_REQUEST,
    ),

  ResendError: (message: string) =>
    new DomainError(
      message,
      ERROR_CODES.EXTERNAL_SERVICE_ERROR,
      HTTP_STATUS.SERVICE_UNAVAILABLE,
    ),

  UnexpectedError: () =>
    new DomainError(
      "Une erreur inattendue est survenue.",
      ERROR_CODES.INTERNAL_SERVER_ERROR,
      HTTP_STATUS.INTERNAL_SERVER_ERROR
    ),

} as const;
