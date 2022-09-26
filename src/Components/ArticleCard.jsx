import { Link } from "react-router-dom";


export const ArticleCard = ({ article }) => {
    return (
      <li className="article_card" key={article}>
        <Link to={`/topic/${article}`}>
          <p>{article.title}</p>
        </Link>
      </li>
    );
}