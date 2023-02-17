// import './App.css';
import Footer from './Footer';
import Porfolio from './Porfolio';

const Servicio = (props) => {
  return (
    <div className="col-lg-4" data-aos="fade-up" data-aos-delay={props.delay}>
      <div className="box">
        <img src={props.img} className="img-fluid" alt="" />
        <h3>{props.titulo}</h3>
        {props.children}
      </div>
    </div>
  )
}

function Index() {

  // AOS.init();
  return (
    <div className="App">


      <section id="hero" className="hero d-flex align-items-center">

        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex flex-column justify-content-center" id="fondo">
              <h1 data-aos="fade-up">Aluminio Italia</h1>
              <h2 data-aos="fade-up" data-aos-delay="400">Cerramientos y aberturas de aluminio</h2>
            </div>
            <div className="col-lg-6 hero-img" data-aos="zoom-out" data-aos-delay="200">
              <img src="img/abert1.jpg" className="img-fluid" alt="" />
            </div>
          </div>
        </div>

      </section>

      <main id="main">

        <section id="values" className="values">

          <div className="container" data-aos="fade-up">

            <header className="section-header">
              <h2>Trabajos</h2>
              <p>Que servicios prestamos?</p>
            </header>

            <div className="row">

              <Servicio titulo="Balcones" delay="200" img="img/balcones.jpg">
                <p>Balcones</p>
              </Servicio>
              <Servicio titulo="Aberturas" delay="400" img="img/aber2.png">
                <p>Herrero, Modena 90, Modena 45, A30</p>
              </Servicio>
              <Servicio titulo="Marparas" delay="600" img="img/mampara.jpeg">
                <p>Fijas y corredizas</p>
              </Servicio>
              <Servicio titulo="Escaleras" delay="600" img="img/mampara.jpeg">
                <p>Pasamanos de vidrio</p>
              </Servicio>
              <Servicio titulo="Techos" delay="800" img="img/techo.jpeg">
                <p>Corredizo o fijo</p>
              </Servicio>
            </div>
          </div>
        </section>

        <section id="features" className="features">
          <div className="container" data-aos="fade-up">
            <div className="row feature-icons" data-aos="fade-up">
              <h3>Por que elegir aluminio ??</h3>

              <div className="row">

                <div className="col-xl-4 text-center" data-aos="fade-right" data-aos-delay="100">
                  <img src="img/features-3.png" className="img-fluid p-4" alt="" />
                </div>

                <div className="col-xl-8 d-flex content">
                  <div className="row align-self-center gy-4">

                    <div className="col-md-6 icon-box" data-aos="fade-up">
                      <i className="ri-line-chart-line"></i>
                      <div>
                        <h4>Mantenimiento cero </h4>
                        <p>Las aberturas de aluminio, y no así las de chapa, madera o P.V.C., no se corroen ni deterioran. Resisten por toda su vida útil sin necesidad de mantenimiento.</p>
                      </div>
                    </div>

                    <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="100">
                      <i className="ri-stack-line"></i>
                      <div>
                        <h4>El aluminio es un material versátil</h4>
                        <p>De acuerdo al proyecto o la obra, las aberturas de aluminio ofrecen múltiples respuestas para cada necesidad.</p>
                      </div>
                    </div>

                    <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="200">
                      <i className="ri-brush-4-line"></i>
                      <div>
                        <h4>Hermeticidad y Estanqueidad</h4>
                        <p>Excelente nivel de aislación contra el aire, agua, polvo, contaminación y ruidos evitando filtraciones que afectan el confort de los ocupantes de la vivienda.</p>
                      </div>
                    </div>

                    <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="300">
                      <i className="ri-magic-line"></i>
                      <div>
                        <h4>El aluminio protege el medio ambiente</h4>
                        <p>Es 100% reciclable. Se puede reciclar infinitas veces, sin que pierda sus cualidades, con un bajo consumo energético y no es tóxico; en caso de incendio no ocasiona la emisión de sustancias nocivas para el medio ambiente.</p>
                      </div>
                    </div>

                    <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="400">
                      <i className="ri-command-line"></i>
                      <div>
                        <h4>Ignífugas</h4>
                        <p>En caso de incendio el aluminio no combustiona, no emite gases nocivos para la salud, ni se deforma.</p>
                      </div>
                    </div>

                    <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="500">
                      <i className="ri-radar-line"></i>
                      <div>
                        <h4>Variedad de diseños</h4>
                        <p>Decenas de terminaciones superficiales; pinturas en una gran variedad de colores, el simil madera, terminaciones microtexturadas, anodizados que permiten colores metalizados con amplias gamas de oro, bronce y negro. Inclusive en el caso de algunas carpinterías, se pueden combinar dos terminaciones para fachada exterior y diseño interior manteniendo la armonía.</p>
                      </div>
                    </div>

                  </div>
                </div>

              </div>

            </div>

          </div>

        </section>

        <section id="portfolio" className="portfolio">

          <Porfolio />

        </section>

        <section id="contact" className="contact">

          <div className="container" data-aos="fade-up">

            <header className="section-header">
              <h2>Ubicación</h2>
              <p>Donde encontrarnos</p>
            </header>

            <div className="row ">

              <div className="col-lg-12">

                <div className="row ">
                  <div className="col-md">
                    <div className="info-box">
                    <p className='center'><i className="bi bi-geo-alt"></i>
                      527 e/ 9 y 10 / Tolosa, La Plata</p><br></br>
                      <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1651.9803528514037!2d-57.977958842311644!3d-34.89877304983627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e637dad47c87%3A0xcaf6d3e6d0b324f7!2sAluminio%20Italia!5e0!3m2!1ses!2sar!4v1676585107419!5m2!1ses!2sar"></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </section>
            <section id="contact" className="contact">

            <div className="container" data-aos="fade-up">
            <header className="section-header">
              <h2>Contacto</h2>
              <p>Aqui puedes hablar con nosotros</p>
            </header>

            <div className="row ">
                  <div className="col-md">
                    <div className="info-box">
                      <i className="bi bi-telephone"></i>
                      <h3>Teléfono</h3>
                      <p>221 351-1106</p>
                    </div>
                  </div>
                  <div className="col-md">
                    <div className="info-box">
                      <i className="bi bi-envelope"></i>
                      <h3>Email</h3>
                      <p>aluminioitalia@hotmail.com</p>
                    </div>
                  </div>
                  <div className="col-md">
                    <div className="info-box">
                      <i className="bi bi-clock"></i>
                      <h3>Horarios</h3>
                      <p>Lunes - Viernes<br />9:00AM - 05:00PM</p>
                    </div>
                  </div>
                </div>
              </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Index;



