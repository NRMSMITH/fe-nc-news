import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
import axios from 'axios';
const Navbar = () => {
  const [topics, setTopics] = useState([]);
  useEffect(() => {
    axios
      .get(`https://niamh-news.herokuapp.com/api/topics`)
      .then(({ data }) => {
        setTopics(data.topics);
      });
  }, []);
  return (
    <section id="navbar">
      <ul id="navbar_list">
        <li>
          <Link to="/">Home</Link>
        </li>
        {topics.map((topic) => {
          return (
            <Link key={topic.slug} to={`/articles/topics/${topic.slug}`}>
              <li>{topic.slug}</li>
            </Link>
          );
        })}
      </ul>
    </section>
  );
};

export default Navbar;
