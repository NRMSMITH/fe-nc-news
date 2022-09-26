import axios from "axios";
import { useEffect, useState } from "react"
import { ArticleCard } from "../Components/ArticleCard";

export const Articles = ({topics}) => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        axios.get(`https://niamh-news.herokuapp.com/api/articles`)
        .then(({data}) => {
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