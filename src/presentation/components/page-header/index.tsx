import Link from "next/link";
import { useRouter } from "next/router";
import * as S from "./styles";

interface PageHeaderProps {
	subtitle: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ subtitle }) => {
	const { pathname } = useRouter();
	const paths = pathname
		.split("/")
		.map((item) => (item ? item.split("-").join(" ") : "Home"));
	return (
		<S.PageHeaderContainer>
			<S.PageHeaderWrapper>
				<S.PageHeaderPaths>
					{paths.map((item, index) => (
						<>
							<Link
								key={index}
								href={`/${item}`}
								className="path-link"
							>
								{item}
							</Link>
							{index < paths.length - 1 && <p>{">"}</p>}
						</>
					))}
				</S.PageHeaderPaths>
				<S.PageHeaderHeading>{paths[paths.length - 1]}</S.PageHeaderHeading>
				<S.PageHeaderSubtitle>{subtitle}</S.PageHeaderSubtitle>
			</S.PageHeaderWrapper>
		</S.PageHeaderContainer>
	);
};

