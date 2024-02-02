import {
	Controller,
	FieldValues,
	UseControllerProps,
	useFormContext,
} from "react-hook-form";
import { Input, InputProps } from "../input";

export const ControlledInput = <FormType extends FieldValues>({
	name,
	defaultValue,
	...props
}: UseControllerProps<FormType> & InputProps) => {
	const { control, setValue } = useFormContext();

	return (
		<Controller
			control={control}
			name={name}
			defaultValue={defaultValue}
			render={({ field, fieldState }) => (
				<Input
					value={field.value}
					onBlur={field.onBlur}
					onChange={(e) => {
						setValue(name, e.target.value as any);
						field.onChange(e);
					}}
					error={!!fieldState.error}
					errorMessage={fieldState.error?.message}
					{...props}
				/>
			)}
		/>
	);
};

