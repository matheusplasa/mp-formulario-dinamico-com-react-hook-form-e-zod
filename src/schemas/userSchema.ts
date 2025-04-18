import { z } from 'zod';

export const userSchema = z.object({
  name: z.string().min(1).max(255),
  email: z.string().email().max(255),
  password: z.string().min(8).max(255),
  password_confirmation: z.string().min(8).max(255),
  phone: z.string().min(1).max(20),
  terms: z.boolean(),
  cpf: z.string().min(1).max(14),
  cep: z.string({ message: 'CEP é um campo obrigatório'}).min(1).max(10),
  address: z.string().min(1).max(255),
  city: z.string().min(1).max(255),
}).required();

export type UserSchema = z.infer<typeof userSchema>;
