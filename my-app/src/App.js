import './style/reset.scss';
import './style/fonts.scss';
import './style/style.scss';
import Header from './components/Header/Header.jsx';
import Main from './components/Main/Main.jsx';
import Footer from './components/Footer/Footer.jsx';



function App() {
  return (
    <div className='wrapper'>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
