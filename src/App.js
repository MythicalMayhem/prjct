import './App.css';
import Intro from './Intro'
import IntroPafs from './IntroPafs'
import BSnavbar from './BSnavbar'
import Karousel from './Karousel'
import FooterPage from './Footer'
import Form1 from './Form1'
function App() {

  return (
    <div className="App" style={{background: "linear-gradient(110deg, #222831 60%, #393e46 60%)",color:"#00adb5",display:"flex",justifyContent:"center",flexDirection:"column"}}>
        <BSnavbar />
        <Intro />
        <IntroPafs />
        <Karousel />
        <Form1 />
        <FooterPage />
    </div>
  );
}

export default App;
