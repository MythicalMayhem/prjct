import './App.css';
import Intro from './Intro'
import IntroPafs from './IntroPafs'
import BSnavbar from './BSnavbar'
import Karousel from './Karousel'
import FooterPage from './Footer'
import Form1 from './Form1'
function App() {

  return (
    <div className="App" style={{background: "linear-gradient(110deg, #fdcd3b 60%, #ffed4b 60%)",color:"#023e8a",display:"flex",justifyContent:"center",flexDirection:"column"}}>
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
