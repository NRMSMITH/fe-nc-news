import { useEffect, useState } from "react"
import { ArticleCard } from "../Components/ArticleCard";
import { getArticles } from "../utils/api";

export const Articles = ({topics}) => {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
      setIsLoading(true)
        getArticles()
        .then((data) => {
            setArticles(data.articles)
            setIsLoading(false)
        })
    }, [])

    if(isLoading) return <h4>Getting your articles ...</h4>

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