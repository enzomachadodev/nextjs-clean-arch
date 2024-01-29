import { useEffect, useState } from "react";
import Image from "next/image";
import * as S from "./logo-styles";

export const Logo: React.FC = () => {
	const [expanded, setExpanded] = useState<"open" | "close">("open");

	useEffect(() => {
		const collapseTimeout = setTimeout(() => {
			setExpanded("close");
		}, 5000);

		return () => clearTimeout(collapseTimeout);
	}, []);

	return (
		<S.LogoContainer
			href="/"
			expanded={expanded}
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

