import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Secciones from './components/Secciones';


function App() {
  return (
    <div>
      <Header/>
      <Banner  
        banner = "..\imgs\Banner.jpg" 
        avatar = "..\imgs\banner2.png"
        about = "Dev Fullstack Jr"
      >
        
      </Banner>
      <Secciones/>
    </div>
 
  );
}

export default App;
