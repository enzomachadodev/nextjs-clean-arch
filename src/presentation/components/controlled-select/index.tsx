import {
	Controller,
	FieldValues,
	UseControllerProps,
	useFormContext,
} from "react-hook-form";
import { Select, SelectProps } from "../select";

export const ControlledSelect = <FormType extends FieldValues>({
	name,
	onSelect,
	...props
}: UseControllerProps<FormType> &
	Omit<SelectProps, "error" | "errorMessage" | "value">) => {
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
							if (onSelect) {
								onSelect(value);
							}
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

