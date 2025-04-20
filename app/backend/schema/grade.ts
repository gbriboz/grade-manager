import { z } from "zod";

export const gradeScheme = {
    score: z.number({
        required_error: 'Score is required',
        invalid_type_error: 'Score must be a number'
    }),
    weight: z.number({
        required_error: 'Weight is required',
        invalid_type_error: 'Weight must be a number'
    })
}