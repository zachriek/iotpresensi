import useAuthStore from '../stores/useAuthStore';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import loginSchema from '../schema/Login/schema';
import { toast } from 'react-toastify';
import InputField from '../components/InputField';

export default function Login() {
	const { login, clearError } = useAuthStore();

	const methods = useForm({
		resolver: zodResolver(loginSchema),
		mode: 'onChange',
	});

	const onSubmit = async (data) => {
		try {
			const result = await login(data);

			if (result?.success) {
				toast.success('Berhasil masuk');
				clearError();
			}
		} catch (error) {
			console.error('Error:', error);
		}
	};

	return (
		<div className="login-page">
			<div className="login-box">
				<h2>Login</h2>
				<FormProvider {...methods}>
					<form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-4">
						<InputField name="email" type="email" label="Email" placeholder="Masukkan email" />
						<InputField name="password" type="password" label="Kata Sandi" placeholder="Masukkan kata sandi" />
						<button className="btn">Login</button>
					</form>
				</FormProvider>
				{/* <input className="input" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input className="input" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button className="btn" onClick={handleLogin}>Login</button> */}
			</div>
		</div>
	);
}
