import './App.css';
import Header from './Components/Header'
import Footer from './Components/Footer'
import { Routes, Route } from 'react-router-dom'
import { Topics } from './Pages/Articles'
import { SingleArticle } from './Pages/SingleArticle';
import { Users } from './Pages/Users';

function App() {

  return (
    <section>
      <Header />
      
      <Routes>
        <Route path="/" element={<Topics />} />
        <Route path={`/topics/:topic_name`} element={<Topics />} />
        <Route path={`/articles/:article_id`} element={<SingleArticle />} />
        <Route path={`/users`} element={<Users />} />
      </Routes>
      <Footer />
    </section>
  );
}

export default App;
