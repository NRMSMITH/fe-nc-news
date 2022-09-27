import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { ArticleCard } from '../Components/ArticleCard'
import { getArticlesByTopic } from '../utils/api'

 export const Topics = () => {
    const { topic_name } = useParams();
    const [isLoading, setIsLoading] = useState(false)
    const [articles, setArticles] = useState([])

useEffect(() => {
  setIsLoading(true)
  getArticlesByTopic(topic_name).then((data) => {
    setArticles(data.articles);
    setIsLoading(false)
  });
}, [topic_name]);

if (isLoading) return <h4>Getting your articles ...</h4>

    return (
      <section>
        <ul>
          {articles.map((article) => {
            return <ArticleCard key={article.article_id} article={article} />;
          })}
        </ul>
      </section>
    );
 }