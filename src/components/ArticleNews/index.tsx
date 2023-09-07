import { ContainerArticle, ContentNews } from "./styles";

interface IArticleNews {
  url: string;
  title: string;
  description: string;
}

export const ArticleNews = ({ url, title, description }: IArticleNews) => {
  return (
    <ContainerArticle>
      <img src={url} />
      <ContentNews>
        <h1>{title}</h1>
        <p>{description}</p>
      </ContentNews>
    </ContainerArticle>
  );
};
