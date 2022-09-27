import './App.css';
import Header from './Components/Header'
import Footer from './Components/Footer'
import { Routes, Route } from 'react-router-dom'
import { Articles } from './Pages/Articles'
import { Topics } from './Pages/Topics'

function App() {

  return (
    <section>
      <Header />
      
      <Routes>
        <Route path="/" element={<Articles />} />
        <Route path={`/topics/:topic_name`} element={<Topics />} />
      </Routes>
      <Footer />
    </section>
  );
}

export default App;
