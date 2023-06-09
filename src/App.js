import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <header>
        <div className="container">
          <div className = "author">
            <a href="#">K.Griffith</a>
          </div>
          <div>
            <ul>
              <li><a href="#">AUFTRITTE</a></li>
              <li><a href="#">BÜCHER</a></li>
              <li><a href="#">NEUIGKEITEN</a></li>
              <li><a href="#">ÜBER MICH</a></li>
              <li><a href="#">KONTAKT</a></li>
            </ul>
          </div>
        </div>
      </header>

      <div className="mainTop">

          <div className="mainText">
            <div>
            <h1>Kayla Griffith</h1>
            <p>Preisgekrönte Autorin</p>
            </div>
          </div>
          
          
          </div>

        <section className = "mainSection">
        <div className="authorImg">
            <img src="https://static.wixstatic.com/media/ad420a_ca05081d4ece492fb6589c81baee1091~mv2.jpg/v1/crop/x_1416,y_0,w_3091,h_3414/fill/w_238,h_263,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/GettyImages-11967148821.jpg" alt="" />
        </div>

        <div className="book">
          <div className ="bookLeft">
            <div className="bookLeftTop">
              <p className="largeText">The Swan Isle</p>
              <p className="largeText">(2035)</p>

              <p className="bookText">Ich bin ein Textabschnitt. Klicke hier und bearbeite mich. 
                Klicke einfach auf „Text bearbeiten“ oder doppelklicke, 
                um Inhalt hinzuzufügen und die Schriftart zu ändern. 
                Es ist der ideale Ort,
                 um Besuchern etwas mehr über dich zu erzählen.</p>
                 <h3>Kostenpflichtig bestellen</h3>
            </div>
            <div className="bookLeftBottom">
              <button className="bookBtn">Amazon</button>
              <button className="bookBtn">Google</button>
              <button className="bookBtn">ibooks</button>
            </div>
          </div>
          <div className="bookRight"></div>
        </div>
        </section>

        <section className="articel">
          <div>
            <p className="articelSign">“</p>
            <p className="articelMain">
            Ich bin ein Textabschnitt. Klicke hier 
            und bearbeite mich. Klicke einfach auf 
            „Text bearbeiten“ oder doppelklicke, um 
            Inhalt hinzuzufügen und die Schriftart 
            zu ändern. Es ist der ideale Ort, 
            um Besuchern etwas mehr über dich zu erzählen.
            </p>
            <p className="articelBottom">
            „‘Swan Isle’ ist Griffiths 
            bisher bestes
             Werk“ Der Times Book Review
            </p>
            <span className="line"></span>
          </div>

          <div>
            <p className="articelSign">“</p>
            <p className="articelMain">
            Ich bin ein Textabschnitt. Klicke hier 
            und bearbeite mich. Klicke einfach auf 
            „Text bearbeiten“ oder doppelklicke, um 
            Inhalt hinzuzufügen und die Schriftart 
            zu ändern. Es ist der ideale Ort, 
            um Besuchern etwas mehr über dich zu erzählen.
            </p>
            <p className="articelBottom">
            „‘Swan Isle’ ist Griffiths 
            bisher bestes
             Werk“ Der Times Book Review
            </p>
            <span className="line"></span>
          </div>

          <div>
            <p className="articelSign">“</p>
            <p className="articelMain">
            Ich bin ein Textabschnitt. Klicke hier 
            und bearbeite mich. Klicke einfach auf 
            „Text bearbeiten“ oder doppelklicke, um 
            Inhalt hinzuzufügen und die Schriftart 
            zu ändern. Es ist der ideale Ort, 
            um Besuchern etwas mehr über dich zu erzählen.
            </p>
            <p className="articelBottom">
            „‘Swan Isle’ ist Griffiths 
            bisher bestes
             Werk“ Der Times Book Review
            </p>
            <span className="line"></span>
          </div>
        </section>

        <section className="info">
          <div className="infoTop">
            <h2>Kommende Auftritte ansehen</h2>
            <p>Ich bin ein Textabschnitt. Klicke hier und 
             <br /> bearbeite mich ganz einfach.</p>
          </div>

          <div className="boxContainer">
          <div className="box">
            <p>18. Januar 2035, Der Breakfast Club, virtuelle Buchlesung 
             <br /> von Swan Isle, 19 - 20 Uhr MEZ</p>

             <button className="bookBtn">Anmelden</button>
          </div>
          <div className="box">
            <p>18. Januar 2035, Der Breakfast Club, virtuelle Buchlesung 
             <br /> von Swan Isle, 19 - 20 Uhr MEZ</p>

             <button className="bookBtn">Anmelden</button>
          </div>
          <div className="box boxLast">
            <p>18. Januar 2035, Der Breakfast Club, virtuelle Buchlesung 
             <br /> von Swan Isle, 19 - 20 Uhr MEZ</p>

             <button className="bookBtn">Anmelden</button>
          </div>
          </div>

          <div className="last">
            <h2>Über Kayla Griffith</h2>
            <p>Ich bin ein Textabschnitt. Klicke hier 
              und bearbeite mich. Klicke einfach auf 
              „Text bearbeiten“ oder doppelklicke, um 
              Inhalt hinzuzufügen und die Schriftart 
              zu ändern. Es ist der ideale Ort, 
              um Besuchern etwas mehr über dich zu erzählen.</p>

              <button className="bookBtn">Weiterlesen</button>

              <div className="image-container">
                <img src="https://static.wixstatic.com/media/ad420a_3b0ac18b8f8c44e6968cf137c044b3b4~mv2.jpg/v1/crop/x_1678,y_0,w_3414,h_3414/fill/w_177,h_177,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/GettyImages-11967148791.jpg" alt="" />
              </div>
          </div>
        </section>

        <footer>
          <div>
            <a href="#">Cookies</a>
            <a href="#">Impressum</a>
            <a href="#">datenshutz</a>
          </div>
          <p>2035 K.Griffith. Erstellt mit Wix.com</p>
        </footer>
    </div>
  );
}

export default App;
