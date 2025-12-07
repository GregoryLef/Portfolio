import { NextResponse } from "next/server";
import { ERROR_CODES, HTTP_STATUS } from "./constants";
import { DomainError } from "../errors/DomainError";
import { ZodError } from "zod";

export class ApiResponse {
    static success<T>(message: string, data?: T, status: number = HTTP_STATUS.OK) {
        return NextResponse.json(
            {
                success: true,
                message,
                data,
            },
            { status }
        );
    }

    static error(err: unknown) {

        // DomainError
        if (err instanceof DomainError) {
            return NextResponse.json(
                {
                    success: false,
                    error: err.message,
                    code: err.errorCode,
                },
                { status: err.statusCode }
            );
        }

        // ZodError
        if (err instanceof ZodError) {
            const messages = err.issues.map(i => i.message);

            return NextResponse.json(
                {
                    success: false,
                    error: messages.join(", "),
                    code: ERROR_CODES.VALIDATION_ERROR,
                },
                { status: HTTP_STATUS.UNPROCESSABLE_ENTITY }
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
                { status: HTTP_STATUS.INTERNAL_SERVER_ERROR }
            );
        }

        // Fallback
        return NextResponse.json(
            {
                success: false,
                error: "Erreur interne inconnue",
                code: ERROR_CODES.INTERNAL_SERVER_ERROR,
            },
            { status: HTTP_STATUS.INTERNAL_SERVER_ERROR }
        );
    }
}