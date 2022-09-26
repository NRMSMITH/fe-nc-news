import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { ArticleCard } from '../Components/ArticleCard'
import { getArticlesByTopic } from '../utils/api'

 export const Topics = () => {
    const { topic_name } = useParams();


    const [articles, setArticles] = useState([])

useEffect(() => {
  getArticlesByTopic(topic_name).then((data) => {
    setArticles(data.articles);
  });
}, [topic_name]);

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