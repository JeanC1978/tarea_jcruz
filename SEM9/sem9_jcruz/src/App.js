import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Asidenav from './components/Asidenav';
import Aside2 from './components/Aside2';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  return ( 
<>
    <div className="Container-grid">
      <Header />
      <Asidenav />
      <Content />
      <Aside2 />
      <Footer />
    </div>
</>
      );
}

export default App;



// <>
//   <Header />
//     <div className="Container-grid">
//       <Asidenav />
//       <Content />
//       <Aside2 />
//     </div>
//   <Footer />
// </>

