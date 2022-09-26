import './App.css';
import Header from './Components/Header'
import Footer from './Components/Footer'
import {Routes, Route} from 'react-router-dom'
import { Articles } from './Pages/Articles'

function App() {

  return (
    <section>
      <Header />
      
      <Routes>
        <Route path="/" element={<Articles />} />
      </Routes>
      <Footer />
    </section>
  );
}

export default App;
