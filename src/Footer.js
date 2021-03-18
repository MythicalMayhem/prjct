import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter style={{backgroundColor:"#151a1e",color:"white",fontSize:"20px",borderTop:"4px solid #393e46",height:"100%"}}  className="font-small pt-4 mt-4">
      <div style={{paddingTop:"1cm"}}>
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="5">
            
            <p>
            © 2021, Epic Games, Inc. Tous droits réservés. Epic, Epic Games, le logo Epic Games, Fortnite, le logo Fortnite, Unreal, Unreal Engine,
             le logo Unreal Engine, Unreal Tournament et le logo Unreal Tournament sont des marques ou des marques déposées d'Epic Games, Inc. aux États-Unis d'Amérique et ailleurs.
             Les autres marques ou noms de produit appartiennent à leurs propriétaires respectifs.
             En dehors des États-Unis, les transactions sont gérées par Epic Games International, S.à r.l.   
            </p>
          </MDBCol>
          <MDBCol md="6" style={{display:"flex",alignContent:"center"}}>
            <ul style={{borderLeft:"3px solid #393e46",paddingTop:"1.5cm",paddingBottom:"1.5cm",paddingLeft:"2cm",marginLeft:"4cm"}}>
            <h5 className="title" >Follow us on</h5>
              <li className="list-unstyled">
                <a href="https://www.facebook.com/">Facebook</a>
              </li>
              <li className="list-unstyled">
                <a href="https://www.twitter.com/">Twitter</a>
              </li>
              <li className="list-unstyled">
                <a href="https://www.Youtube.com">Youtube</a>
              </li>
              <li className="list-unstyled">
                <a href="https://www.Instagram.com">Instagram</a>
              </li>
            </ul>
            <ul style={{borderLeft:"3px solid #393e46",marginLeft:"2cm",paddingLeft:"2cm" ,paddingTop:"1.5cm",paddingBottom:"1.5cm"}}>
              <li className="list-unstyled" style={{paddingBottom:"0.5cm",lineHeight:'0.3cm'}}>
              <h5>
              Email us :<br /> 
              abcd123xyz@gmail.com</h5>
              </li>
              <li className="list-unstyled" >
                <h5>
                  Donate : <a href="https://www.patreon.com/fr-FR/">Patreon</a>
                </h5>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3" style={{marginTop:"1cm"}}>
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright  :  <a href="https://github.com/OussemaCELL">  Oussema  :)  </a>
        </MDBContainer>
      </div>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;