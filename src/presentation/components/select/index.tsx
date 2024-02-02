import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { InputContainer } from "../input-container";
import * as S from "./styles";

export interface Option {
	value: string;
	label: string;
}

export interface SelectProps {
	disabled?: boolean;
	label?: string;
	error?: boolean;
	errorMessage?: string;
	options: Option[];
	value?: string;
	onSelect?: (value: string) => void;
	placeholder?: string;
	enableSearch?: boolean;
	searchPlaceholder?: string;
	loading?: boolean;
}

export const Select: React.FC<SelectProps> = ({
	value = "",
	label,
	options = [],
	onSelect = () => {},
	placeholder,
	error = false,
	errorMessage,
	disabled = false,
	loading = false,
}) => {
	const containerRef = useRef<HTMLDivElement>(null);

	const [selectedOption, setSelectedOption] = useState<Option | null>(null);
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		const handleOutsideClick = (event: MouseEvent) => {
			if (
				containerRef.current &&
				!containerRef.current.contains(event.target as Node)
			) {
				setIsOpen(false);
			}
		};

		document.addEventListener("mousedown", handleOutsideClick);

		return () => {
			document.removeEventListener("mousedown", handleOutsideClick);
		};
	}, []);

	useEffect(() => {
		if (value) {
			const option = options.find((item) => item.value === value);
			if (option) {
				setSelectedOption(option);
			}
		} else {
			setSelectedOption(null);
		}
	}, [value, options]);

	const handleOptionClick = (option: Option) => {
		if (option.value !== selectedOption?.value) {
			onSelect(option.value);
			setSelectedOption(option);
		}
		return setIsOpen(false);
	};

	const handleSelectClick = () => {
		setIsOpen(!isOpen);
	};

	return (
		<InputContainer>
			{label && <label className="input-label">{label}</label>}
			<S.SelectContainer ref={containerRef}>
				<input
					type="hidden"
					value={selectedOption?.value || ""}
				/>
				<S.SelectTrigger
					onClick={handleSelectClick}
					open={isOpen ? "open" : undefined}
					error={error ? "error" : undefined}
					disabled={disabled ? "disabled" : undefined}
				>
					<div>
						{selectedOption ? (
							<p className="select-value">{selectedOption.label}</p>
						) : (
							<p className="select-placeholder">{placeholder}</p>
						)}
					</div>
					<Image
						src="/chevron-down.svg"
						alt="chevron-down"
						height={20}
						width={20}
						className="chevron"
					/>
				</S.SelectTrigger>
				<S.OptionsContainer open={isOpen ? "open" : undefined}>
					{loading ? (
						<S.LoaderContainer>
							<p>Carregando...</p>
						</S.LoaderContainer>
					) : options.length === 0 ? (
						<p className="no-options-message">Nenhuma opção encontrada.</p>
					) : (
						options.map(({ label, value }, index) => (
							<S.OptionItem
								key={index}
								selected={
									value === selectedOption?.value ? "selected" : undefined
								}
								onClick={() => handleOptionClick({ label, value })}
							>
								{label}
							</S.OptionItem>
						))
					)}
				</S.OptionsContainer>
			</S.SelectContainer>
			{error && errorMessage && <p className="input-error">{errorMessage}</p>}
		</InputContainer>
	);
};

