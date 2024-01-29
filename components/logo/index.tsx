import Image from "next/image";
import * as S from "./logo-styles";
import { useEffect, useState } from "react";

export const Logo: React.FC = () => {
	const [isOpen, setIsOpen] = useState(true);

	useEffect(() => {
		const collapseTimeout = setTimeout(() => {
			setIsOpen(false);
		}, 5000);

		return () => clearTimeout(collapseTimeout);
	}, []);

	return (
		<S.LogoContainer
			href="/"
			isOpen={isOpen}
		>
			<Image
				src="/images/white-pokeball.svg"
				alt="logo-pokeball"
				width={35}
				height={35}
			/>
			<span className="title">Centro Pokémon</span>
		</S.LogoContainer>
	);
};

