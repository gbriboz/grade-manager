import { z } from 'zod';

export const signinSchema = z.object({
    email: z.string({ message: 'Email é obrigatório' }).email({ message: 'Por favor, digite um email válido' }), // valida se é um email correto (com @ e tals)
    password: z.string({ message:'Senha é obrigatória' }).min(4, 'Sua senha precisa ter 4 caractéres')
})
