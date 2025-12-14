import { NextRequest, NextResponse } from 'next/server';
import { ContactService } from '../services/contactService';
import { ContactFormData } from '../types/contactTypes';
import { contactSchema } from '../validations/contactValidation';
import { DomainErrors } from '../errors/DomainError';
import { ApiResponse } from '../util/apiResponse';
import { handle } from '../util/controllerHandler';

const contactService = new ContactService();

export class ContactController {
  async sendEmail(request: NextRequest) {
      return handle(async () => {
      const raw = await request.json();
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
    });
  }
}
