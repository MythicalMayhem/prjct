import './App.css';
import Intro from './Intro'
import IntroPafs from './IntroPafs'
import BSnavbar from './BSnavbar'
import Karousel from './Karousel'

function App() {
  return (
    <div className="App" style={{backgroundImage: "linear-gradient(to bottom, #f1f4f6 72%, #465d6d 100%)",color:"#5a778c",display:"flex",justifyContent:"center",flexDirection:"column"}}>
        
        <BSnavbar />
        <Intro />
        <IntroPafs />
        <center>
          <Karousel />
        </center>
        
        <div style={{height:"50cm"}}></div>


    </div>
  );
}

export default App;
