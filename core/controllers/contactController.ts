import { NextRequest, NextResponse } from 'next/server';
import { ContactService } from '../services/contactService';
import { ContactFormData } from '../types/contactTypes';
import { contactSchema } from '../validations/contactValidation';
import { DomainErrors } from '../errors/DomainError';
import { ApiResponse } from '../util/apiResponse';

const contactService = new ContactService();

export class ContactController {
  async sendEmail(request: NextRequest) {
    try {
      const raw = (await request.json()) as ContactFormData;
      const parsed = contactSchema.safeParse(raw);

      if (!parsed.success) {
        console.log(
          'Validation errors:',
          parsed.error.issues.map((issue) => issue.message),
        );
        throw DomainErrors.ValidationError(parsed.error.issues.map((issue) => issue.message));
      }

      const dataForm = parsed.data;

      await contactService.sendEmail(dataForm);

      return ApiResponse.success('Email envoyé avec succès');
    } catch (err) {
      return ApiResponse.error(err);
    }
  }
}
