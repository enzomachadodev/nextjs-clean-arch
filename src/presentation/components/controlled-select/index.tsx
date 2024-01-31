import {
	Controller,
	FieldValues,
	UseControllerProps,
	useFormContext,
} from "react-hook-form";
import { Select, SelectProps } from "../select";

export const ControlledSelect = <FormType extends FieldValues>({
	name,
	...props
}: UseControllerProps<FormType> &
	Omit<SelectProps, "onSelect" | "error" | "errorMessage" | "value">) => {
	const { control } = useFormContext();

	return (
		<Controller
			control={control}
			name={name}
			render={({ field, fieldState }) => {
				return (
					<Select
						value={field.value}
						onSelect={(value) => {
							field.onChange(value);
						}}
						error={!!fieldState.error}
						errorMessage={fieldState.error?.message}
						{...props}
					/>
				);
			}}
		/>
	);
};

