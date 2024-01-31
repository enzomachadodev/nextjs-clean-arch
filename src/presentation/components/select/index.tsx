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
	onSelect: (value: string) => void;
	placeholder?: string;
	enableSearch?: boolean;
	searchPlaceholder?: string;
}

export const Select: React.FC<SelectProps> = ({
	value = "",
	label,
	options,
	onSelect,
	placeholder,
	enableSearch = false,
	searchPlaceholder,
	error = false,
	errorMessage,
	disabled = false,
}) => {
	const containerRef = useRef<HTMLDivElement>(null);

	const [hasMounted, setHasMounted] = useState(false);
	const [selectedOption, setSelectedOption] = useState<Option | null>(null);
	const [isOpen, setIsOpen] = useState(false);
	const [searchValue, setSearchValue] = useState("");

	useEffect(() => {
		setHasMounted(true);
	}, []);

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
		}
	}, [value, options]);

	const filteredOptions = options.filter((option) =>
		option.label.toLowerCase().includes(searchValue.toLowerCase())
	);

	const handleOptionClick = (option: Option) => {
		onSelect(option.value);
		setSelectedOption(option);
		setIsOpen(false);
	};

	const handleSelectClick = () => {
		setIsOpen(!isOpen);
	};

	if (!hasMounted) return null;

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
					isOpen={isOpen}
					error={error}
					disabled={disabled}
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
				<S.OptionsContainer isOpen={isOpen}>
					{enableSearch && (
						<S.SearchContainer>
							<Image
								alt="search"
								src="/search.svg"
								height={22}
								width={22}
								className="search-icon"
							/>
							<input
								className="search-input"
								type="text"
								placeholder={searchPlaceholder || "Digite para buscar..."}
								value={searchValue}
								onChange={(e) => setSearchValue(e.target.value)}
							/>
						</S.SearchContainer>
					)}

					{filteredOptions.length === 0 ? (
						<p className="no-options-message">Nenhuma opção encontrada.</p>
					) : (
						filteredOptions.map(({ label, value }, index) => (
							<S.OptionItem
								key={index}
								isSelected={value === selectedOption?.value}
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

