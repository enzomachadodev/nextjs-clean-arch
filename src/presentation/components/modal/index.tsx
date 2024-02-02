import Image from "next/image";
import { Button } from "../button";
import * as S from "./styles";

interface ModalProps {
	isOpen: boolean;
	title: string;
	iconSrc: string;
	description: string;
	onClick: () => void;
	buttonLabel: string;
}

export const Modal: React.FC<ModalProps> = ({
	isOpen,
	description,
	iconSrc,
	onClick,
	title,
	buttonLabel,
}) => {
	return (
		<S.ModalOverlay
			open={isOpen ? "open" : undefined}
			onClick={(event: React.MouseEvent<HTMLDivElement>) => {
				event.stopPropagation();
				onClick();
			}}
		>
			<S.ModalContent open={isOpen ? "open" : undefined}>
				<S.ModalTitle>{title}</S.ModalTitle>
				<Image
					src={iconSrc}
					height={50}
					width={50}
					alt="Modal icon"
				/>
				<S.ModalDescription>{description}</S.ModalDescription>
				<Button onClick={onClick}>{buttonLabel}</Button>
			</S.ModalContent>
		</S.ModalOverlay>
	);
};

