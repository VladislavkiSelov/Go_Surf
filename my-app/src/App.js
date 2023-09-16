import './style/reset.scss';
import './style/fonts.scss';
import './style/style.scss';
import Header from './components/Header/Header.jsx';
import Main from './components/Main/Main.jsx';
import Footer from './components/Footer/Footer.jsx';



function App() {
  window.addEventListener('scroll', animalScroll)
  function animalScroll() {
    const animItems = Array.from(document.querySelectorAll('.anim_item'));
    if (animItems.length > 0) {
      animItems.forEach(element => {
        const animItemHeight = element.offsetHeight;
        const animItemOffset = offset(element).top;
        const animStart = 4;

        let animItemPoint = window.innerHeight - animItemHeight / animStart;
        if (animItemHeight > window.innerHeight) {
          animItemPoint = window.innerHeight - window.innerHeight / animStart;
        }

        if ((window.scrollY > animItemOffset - animItemPoint) && window.scrollY < (animItemOffset + animItemHeight)) {
          element.classList.add('active_scroll_left')
        } else {
          element.classList.remove('active_scroll_left')
        }
      })
    }

    function offset(el) {
      const rect = el.getBoundingClientRect(),
        scrollLeft = window.scrollY || document.documentElement.scrollLeft,
        scrollTop = window.scrollY || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
  }

  return (
    <div className='wrapper' >
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
