import { useEffect, useState } from "react";
import Image from "next/image";
import * as S from "./logo-styles";

export const Logo: React.FC = () => {
	const [expanded, setExpanded] = useState(true);

	useEffect(() => {
		const collapseTimeout = setTimeout(() => {
			setExpanded(false);
		}, 5000);

		return () => clearTimeout(collapseTimeout);
	}, []);

	return (
		<S.LogoContainer
			href="/"
			expanded={expanded ? "open" : undefined}
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

