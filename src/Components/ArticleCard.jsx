import { Link } from "react-router-dom";


export const ArticleCard = ({ article }) => {
    return (
      <li className="article_card" key={article.article_id}>
        <Link to={`/articles/${article.article_id}`}>
          <p>{article.title}</p>
        </Link>
      </li>
    );
}