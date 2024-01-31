import {
	Controller,
	FieldValues,
	UseControllerProps,
	useFormContext,
} from "react-hook-form";
import { Input, InputProps } from "../input";

export const ControlledInput = <FormType extends FieldValues>({
	name,
	...props
}: UseControllerProps<FormType> & InputProps) => {
	const { control } = useFormContext();

	return (
		<Controller
			control={control}
			name={name}
			render={({ field, fieldState }) => (
				<Input
					value={field.value}
					onBlur={field.onBlur}
					onChange={field.onChange}
					error={!!fieldState.error}
					errorMessage={fieldState.error?.message}
					{...props}
				/>
			)}
		/>
	);
};

