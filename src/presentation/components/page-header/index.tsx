import Link from "next/link";
import { useRouter } from "next/router";
import * as S from "./page-header-styles";

interface PageHeaderProps {
	title: string;
	subtitle: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle }) => {
	const { pathname } = useRouter();
	return (
		<S.PageHeaderContainer>
			<S.PageHeaderWrapper>
				<S.PageHeaderPaths>
					{pathname &&
						pathname.split("/").map((item, index) => (
							<>
								<Link
									key={index}
									href={`/${item}`}
									className="path-link"
								>
									{item ? item.split("-").join(" ") : "Home"}
								</Link>
								{index < pathname.split("/").length - 1 && <p>{">"}</p>}
							</>
						))}
				</S.PageHeaderPaths>
				<S.PageHeaderHeading>{title}</S.PageHeaderHeading>
				<S.PageHeaderSubtitle>{subtitle}</S.PageHeaderSubtitle>
			</S.PageHeaderWrapper>
		</S.PageHeaderContainer>
	);
};

