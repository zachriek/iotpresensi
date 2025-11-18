import { useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { Eye, EyeOff } from 'lucide-react';

const InputField = ({ name, type = 'text', id, placeholder, min, max, step, disabled = false, hint, label }) => {
	const {
		control,
		formState: { errors },
	} = useFormContext();

	const error = errors[name];
	const hasError = !!error;
	const hasHint = hint || error?.message;

	const [showPassword, setShowPassword] = useState(false);

	return (
		<div className="relative">
			<div className="flex items-center gap-2 mb-2">
				{label && (
					<label htmlFor={id || name} className="block text-sm font-medium text-gray-700">
						{label}
						{error && <span className="text-error-500 ml-1">*</span>}
					</label>
				)}
			</div>

			<Controller
				name={name}
				control={control}
				render={({ field }) => {
					return (
						<div className="relative">
							<input
								{...field}
								value={field.value ?? ''}
								type={type === 'password' && showPassword ? 'text' : type}
								id={id || name}
								placeholder={placeholder}
								min={min}
								max={max}
								step={step}
								disabled={disabled}
								className="input"
								autoComplete="off"
							/>

							{type === 'password' && (
								<button type="button" onClick={() => setShowPassword((prev) => !prev)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600" tabIndex={-1}>
									{showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
								</button>
							)}
						</div>
					);
				}}
			/>

			{hasHint && <p className={`mt-1.5 text-xs ${hasError ? 'text-error-500' : 'text-gray-500 dark:text-gray-400'}`}>{error?.message || hint}</p>}
		</div>
	);
};

export default InputField;
