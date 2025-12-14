import { NextResponse } from 'next/server';
import { ERROR_CODES, HTTP_STATUS } from './constants';
import { DomainError } from '../errors/DomainError';

export class ApiResponse {
  static success<T>(message: string, data?: T, status: number = HTTP_STATUS.OK) {
    return NextResponse.json(
      {
        success: true,
        message,
        data,
      },
      { status },
    );
  }

  static error(err: unknown) {
    // DomainError
    if (err instanceof DomainError) {
      console.log('DomainError:', err.message);
      return NextResponse.json(
        {
          success: false,
          error: err.messages || err.message,
          code: err.errorCode,
        },
        { status: err.statusCode },
      );
    }

    // Erreur JS classique
    if (err instanceof Error) {
      return NextResponse.json(
        {
          success: false,
          error: err.message,
          code: ERROR_CODES.INTERNAL_SERVER_ERROR,
        },
        { status: HTTP_STATUS.INTERNAL_SERVER_ERROR },
      );
    }

    // Fallback
    return NextResponse.json(
      {
        success: false,
        error: 'Erreur interne inconnue',
        code: ERROR_CODES.INTERNAL_SERVER_ERROR,
      },
      { status: HTTP_STATUS.INTERNAL_SERVER_ERROR },
    );
  }
}
