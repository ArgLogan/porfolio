import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';


function App() {
  return (
    <div>
      <Header/>
      <Banner  banner = "..\imgs\Banner.jpg" avatar = "..\imgs\banner2.png">
      </Banner>
    </div>
 
  );
}

export default App;
