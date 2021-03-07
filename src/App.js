import logo from './logo.svg';
import './App.scss';
import Header from './views/Header'
import About from './views/About'
import Features from './views/Features'
import Video from './views/Video'
import Stories from './views/Stories'
import Team from './views/Team'
import Contact from './views/Contact'
import Footer from './views/Footer'
import Menu from './views/Menu'

function App() {
  return (
    <>
    <Menu />  
    <Header />
    <About />
    <Features />
    <Video />
    <Stories />
    <Team />
    <Contact />
    <Footer />
  </>
  );
}

export default App;
