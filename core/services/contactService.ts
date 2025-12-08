import { Resend } from 'resend';
import { ContactInput } from '../validations/contactValidation';
import { DomainErrors } from '../errors/DomainError';

const resend = new Resend(process.env.RESEND_API_KEY!);

export class ContactService {
  async sendEmail(dataForm: ContactInput) {
    const response = await resend.emails.send({
      from: 'Contact <onboarding@resend.dev>',
      to: 'gregorylefrancois.travail@yahoo.com',
      subject: 'Nouveau message via ton site',
      html: `
                    <h2>Nouveau message du formulaire</h2>
                    <p><strong>Nom :</strong> ${dataForm.username}</p>
                    <p><strong>Email :</strong> ${dataForm.email}</p>
                    <p><strong>Objet :</strong> ${dataForm.subject}</p>
                    <p><strong>Message :</strong><br>${dataForm.message}</p>
                `,
    });

    if (response.error) {
      throw DomainErrors.ResendError(response.error.message);
    }

    return response;
  }
}
