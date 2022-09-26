import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
import {getTopics} from '../utils/api'

const Navbar = () => {
  const [topics, setTopics] = useState([]);
  useEffect(() => {
      getTopics()
      .then((data) => {
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
            <Link key={topic.slug} to={`/topics/${topic.slug}`}>
              <li>{topic.slug}</li>
            </Link>
          );
        })}
      </ul>
    </section>
  );
};

export default Navbar;
