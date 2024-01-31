import Image from "next/image";
import * as S from "./home-styles";

export const HomeTemplate: React.FC = () => {
	return (
		<S.HomeContainer>
			<Image
				src="/images/pokemon-hero.jpg"
				fill
				alt="Hero"
			/>
			<h1>Cuidamos bem do seu pokémon, para ele cuidar bem de você</h1>
		</S.HomeContainer>
	);
};

