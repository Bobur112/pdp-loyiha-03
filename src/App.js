import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <header>
        <div className="wix">
          <div className="containerr">
            <div className="header-left">
              <a className="logo" href="#"></a>
              <div className="pc-phone">
                <button className="btn btn-pc">
                  <span className="pc"></span>
                </button>
                <div className="tayoqcha"></div>
                <button className="btn btn-phone">
                  <span className="phone"></span>
                </button>
              </div>
            </div>

            <div className="header-right">
              <p className="header-p">
                Click edit and create your own amazing website
              </p>

              <a href="#">Подробнее</a>

              <button className="btn btn-nav">Редактировать</button>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="author">
            <a href="#">K.Griffith</a>
          </div>
          <div>
            <ul>
              <li>
                <a href="#">APPEARANCES</a>
              </li>
              <li>
                <a href="#">BOOKS</a>
              </li>
              <li>
                <a href="#">NEWS</a>
              </li>
              <li>
                <a href="#">ABOUT</a>
              </li>
              <li>
                <a href="#">CONTACT</a>
              </li>
            </ul>
          </div>
        </div>
      </header>

      <div className="mainTop">
        <div className="mainText">
          <div>
            <h1>Kayla Griffith</h1>
            <p>Award Winning Author</p>
          </div>
        </div>
      </div>

      <section className="mainSection">
        <div className="authorImg">
          <img
            src="https://static.wixstatic.com/media/ad420a_ca05081d4ece492fb6589c81baee1091~mv2.jpg/v1/crop/x_1416,y_0,w_3091,h_3414/fill/w_238,h_263,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/GettyImages-11967148821.jpg"
            alt=""
          />
        </div>

        <div className="book">
          <div className="bookLeft">
            <div className="bookLeftTop">
              <p className="largeText">The Swan Isle</p>
              <p className="largeText">(2035)</p>

              <p className="bookText">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Obcaecati quia sed quam nisi labore ducimus pariatur rerum.
                Perferendis adipisci in modi incidunt quod dolorum asperiores,
                ipsa eveniet cumque labore pariatur accusamus, soluta debitis
                velit non assumenda mollitia eligendi quae corrupti.
              </p>
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
            Ich bin ein Textabschnitt. Klicke hier und bearbeite mich. Klicke
            einfach auf „Text bearbeiten“ oder doppelklicke, um Inhalt
            hinzuzufügen und die Schriftart zu ändern. Es ist der ideale Ort, um
            Besuchern etwas mehr über dich zu erzählen.
          </p>
          <p className="articelBottom">
            „‘Swan Isle’ ist Griffiths bisher bestes Werk“ Der Times Book Review
          </p>
          <span className="line"></span>
        </div>

        <div>
          <p className="articelSign">“</p>
          <p className="articelMain">
            Ich bin ein Textabschnitt. Klicke hier und bearbeite mich. Klicke
            einfach auf „Text bearbeiten“ oder doppelklicke, um Inhalt
            hinzuzufügen und die Schriftart zu ändern. Es ist der ideale Ort, um
            Besuchern etwas mehr über dich zu erzählen.
          </p>
          <p className="articelBottom">
            „‘Swan Isle’ ist Griffiths bisher bestes Werk“ Der Times Book Review
          </p>
          <span className="line"></span>
        </div>

        <div>
          <p className="articelSign">“</p>
          <p className="articelMain">
            Ich bin ein Textabschnitt. Klicke hier und bearbeite mich. Klicke
            einfach auf „Text bearbeiten“ oder doppelklicke, um Inhalt
            hinzuzufügen und die Schriftart zu ändern. Es ist der ideale Ort, um
            Besuchern etwas mehr über dich zu erzählen.
          </p>
          <p className="articelBottom">
            „‘Swan Isle’ ist Griffiths bisher bestes Werk“ Der Times Book Review
          </p>
          <span className="line"></span>
        </div>
      </section>

      <section className="info">
        <div className="infoTop">
          <h2>Kommende Auftritte ansehen</h2>
          <p>
            Ich bin ein Textabschnitt. Klicke hier und
            <br /> bearbeite mich ganz einfach.
          </p>
        </div>

        <div className="boxContainer">
          <div className="box">
            <p>
              18. Januar 2035, Der Breakfast Club, virtuelle Buchlesung
              <br /> von Swan Isle, 19 - 20 Uhr MEZ
            </p>

            <button className="bookBtn">Anmelden</button>
          </div>
          <div className="box">
            <p>
              18. Januar 2035, Der Breakfast Club, virtuelle Buchlesung
              <br /> von Swan Isle, 19 - 20 Uhr MEZ
            </p>

            <button className="bookBtn">Anmelden</button>
          </div>
          <div className="box boxLast">
            <p>
              18. Januar 2035, Der Breakfast Club, virtuelle Buchlesung
              <br /> von Swan Isle, 19 - 20 Uhr MEZ
            </p>

            <button className="bookBtn">Anmelden</button>
          </div>
        </div>

        <div className="last">
          <h2>About Kayla Griffith</h2>
          <p>
            Ich bin ein Textabschnitt. Klicke hier und bearbeite mich. Klicke
            einfach auf „Text bearbeiten“ oder doppelklicke, um Inhalt
            hinzuzufügen und die Schriftart zu ändern. Es ist der ideale Ort, um
            Besuchern etwas mehr über dich zu erzählen.
          </p>

          <button className="bookBtn">Read more</button>

          <div className="image-container">
            <img
              src="https://static.wixstatic.com/media/ad420a_3b0ac18b8f8c44e6968cf137c044b3b4~mv2.jpg/v1/crop/x_1678,y_0,w_3414,h_3414/fill/w_177,h_177,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/GettyImages-11967148791.jpg"
              alt=""
            />
          </div>

          <svg
            preserveAspectRatio="xMidYMid meet"
            data-bbox="156.9 23 261.9 506.7"
            viewBox="156.9 23 261.9 506.7"
            height="566.9"
            width="566.9"
            xmlns="http://www.w3.org/2000/svg"
            data-type="color"
            role="presentation"
            aria-hidden="true"
            aria-labelledby="svgcid--1p5nyp-203zps"
          >
            <g>
              <path
                fill="#ef7d5f"
                d="M287.8 398.7l131 131V23H156.9v506.7l130.9-131z"
                data-color="1"
              ></path>
            </g>
          </svg>
        </div>
      </section>

      <footer>
        <p>© 2035 by K.Griffith. Powered and secured by </p>
      </footer>
    </div>
  );
}

export default App;
