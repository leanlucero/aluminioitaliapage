import { useEffect, useState } from "react";
import axios from 'axios'; 

const FotoGrid = ({cat, urlTrabajo, nombre}) =>{
    return(
        <div className={"col-lg-4 col-md-6 portfolio-item filter-"+ cat}>
            <div className="portfolio-wrap">
              <img src={urlTrabajo} className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>{nombre}</h4>
                <div className="portfolio-links">
                  <a href={urlTrabajo} data-gallery="portfolioGallery" className="portfokio-lightbox" title={nombre}><i className="bi bi-plus"></i></a>
                </div>
              </div>
            </div>
          </div>
    )
}

export default function Porfolio(){
  const [categorias , setCategorias] = useState([]);
  const [trabajos , setTrabajos] = useState([]);
  const [catrabajo, setCatrabajos] = useState(0);

  useEffect(()=>{
    traerCategorias();
    traerTrabajos()
  },[])

  const traerCategorias = () =>{
     axios.get(`http://localhost:8080/categoria`)
     .then(res => {
       const persons = res.data;
       setCategorias( persons );
     })
  };

  const handleClick = (cat)=> {
    setCatrabajos(cat);
  }

  const traerTrabajos = () =>{
    axios.get(`http://localhost:8080/trabajo`)
    .then(res => {
      const jobs = res.data;
      setTrabajos( jobs );
    })
 }

    return(
        <div className="container" data-aos="fade-up">

        <header className="section-header">
          <h2>Proyectos</h2>
          <p>Algunos de nuestros trabajos realizados</p>
        </header>
        
        <div className="row" data-aos="fade-up" data-aos-delay="100">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li onClick={() => handleClick(0)} data-filter="*" className="filter">All</li>
              {categorias.map((categoria)=>
              
              <li onClick={() => handleClick(categoria.id)} >{categoria.nombre}</li>
              )}
            </ul>
          </div>
        </div>
        
        <div className="row gy-4 portfolio-container" data-aos="fade-up" data-aos-delay="200">
          {trabajos.map(trabajo=>
            (
              
                trabajo.categoria.id === catrabajo || catrabajo === 0? 
                <FotoGrid nombre={trabajo.nombre} urlTrabajo={trabajo.imagenUrl} /> : null

            ))
        }
        </div>
      </div>
    )
}