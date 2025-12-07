import { z } from 'zod';

export const contactSchema = z.object({
    username: z
        .string()
        .min(2, 'Le nom doit contenir au moins 2 caractères')
        .max(100, 'Le nom ne peut pas dépasser 100 caractères'),
    email: z.email('Format email invalide'),
    subject: z
        .string()
        .min(3, 'Le sujet doit contenir au moins 3 caractères')
        .max(200, 'Le sujet ne peut pas dépasser 200 caractères'),
    message: z
        .string()
        .min(10, 'Le message doit contenir au moins 10 caractères')
        .max(2000, 'Le message ne peut pas dépasser 2000 caractères'),
});

export type ContactInput = z.infer<typeof contactSchema>;

