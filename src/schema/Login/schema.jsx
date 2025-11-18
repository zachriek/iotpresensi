import z from 'zod';

const loginSchema = z.object({
	email: z.email('Email tidak valid').min(1, 'Email wajib diisi'),
	password: z.string().min(1, 'Kata sandi wajib diisi'),
});

export default loginSchema;
