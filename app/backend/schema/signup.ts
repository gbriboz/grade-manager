import { z } from 'zod';

export const signupSchema = z.object({
    name: z.string({ message: 'Nome é obrigatório' }).min(2, 'Seu nome precisa de no mínimo 2 caractéres'), // string de no mínimo 2 caractéres
    email: z.string({ message: 'Email é obrigatório' }).email({ message: 'Por favor, digite um email válido' }), // valida se é um email correto (com @ e tals)
    password: z.string({ message:'Senha é obrigatória' }).min(4, 'Sua senha precisa ter 4 caractéres')
})
