import { useEffect, useState } from "react"
import { ArticleCard } from "../Components/ArticleCard";
import { getArticles } from "../utils/api";

export const Articles = ({topics}) => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        getArticles()
        .then((data) => {
            setArticles(data.articles)
        })
    }, [])

return (
  <section>
    <ul>
      {articles.map((article) => {
        return (
            <ArticleCard key={article.article_id} article={article} />
        );
      })}
    </ul>
  </section>
);

}