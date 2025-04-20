import { z } from 'zod' 

export const subjectSchema = {
    name: z.string({
        message: 'Name is mandatory'
    }).min(4, 'The Subject name needs at least 4 characters'),
    code: z.string({
        message: 'Code is mandatory'
    }).min(4, 'The Subject code needs at least 4 characters')
}