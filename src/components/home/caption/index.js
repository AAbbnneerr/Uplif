import React from 'react';
import './index.scss'
import designer from '../../../assets/homeoffice.png';
import world from '../../../assets/world.png'



const Caption = ()=>{

    const officeMan = '../../../assets/world_connection_(2).png'
    return(
        <div className="section">
            <div className="container first">
               
                <div className="row">
                    <div className="col-sm "> 
                        <h3>¿Qué podrás hacer?</h3>
                        <p>Generar una imagen unica y original de tu marca, empresa o proyecto sin necesidad de recurrir a profesionales. Desde la paleta de colores que más de identifique hata recursos gráficos que inspiren a tu marca. </p>
                        
                    </div>  
                    <div className="col-sm img-col">
                    <img src={designer} width="600px"></img>
                    </div>
                </div>
                
            </div>
            <div className="container second">
               
                <div className="row">  
                    <div className="col-sm img-col">
                        <img className="caption-img" src= {world} alt='world' width="600px"/>
                    </div>
                    <div className="col-sm">
                         <h3>¿Para quén?</h3>
                        <p>Uplif es para cualquier persona que quiera empezar a generar la imagen de su marca, empresa o proyecto sin muchos conocimientos en el campo y sin tener que recurrir a alguien profesional.</p>
                    </div>  
                  
                </div>
                
            </div>

        </div>
    )
}
export default Caption;