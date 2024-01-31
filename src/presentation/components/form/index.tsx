import { KeyboardEvent, forwardRef, useEffect } from "react";
import {
	FormProvider,
	SubmitHandler,
	UseFormReturn,
	useForm,
} from "react-hook-form";
import { AnyObjectSchema, ref } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface FormProps {
	children: React.ReactNode;
	onSubmit: SubmitHandler<any>;
	schema?: AnyObjectSchema;
	shouldReset?: boolean;
	preventEnterSubmit?: boolean;
	customFormMethods?: UseFormReturn<any>;
}

export const Form: React.FC<FormProps> = ({
	children,
	onSubmit,
	schema,
	shouldReset = false,
	preventEnterSubmit,
	customFormMethods,
}) => {
	const formMethods = useForm({
		shouldUnregister: true,
		mode: "onSubmit",
		reValidateMode: "onChange",
		resolver: schema && yupResolver(schema),
	});

	const currentFormMethods = customFormMethods || formMethods;

	useEffect(() => {
		if (shouldReset) {
			formMethods.reset();
		}
	}, [formMethods, formMethods.formState.isSubmitSuccessful, shouldReset]);

	return (
		<FormProvider {...currentFormMethods}>
			<form
				onKeyDown={
					preventEnterSubmit
						? (e: KeyboardEvent<HTMLFormElement>) => {
								if (e.key === "Enter") {
									e.preventDefault();
								}
						  }
						: undefined
				}
				onSubmit={currentFormMethods.handleSubmit(onSubmit)}
			>
				{children}
			</form>
		</FormProvider>
	);
};

