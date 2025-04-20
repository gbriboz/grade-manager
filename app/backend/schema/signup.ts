import { z } from 'zod';

export const signupSchema = z.object({
    name: z.string({ message: 'Name is mandatory' }).min(4, 'Your name needs at least 4 characters'), // string de no mínimo 2 caractéres
    email: z.string({ message: 'Email is mandatory' }).email({ message: 'Please, type a valid email' }), // valida se é um email correto (com @ e tals)
    password: z.string({ message:'Password is mandatory' }).min(8, 'Your password must be at least 4 characters long')
})