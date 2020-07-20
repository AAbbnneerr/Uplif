import React from 'react';
import './index.scss';



const Banner = () =>{
    const services = [
        {text:"Encuentra los colores que más representen a tu marca", img:"../../../assets/PALETTE.png"},
        {text:"La tipografía que más te distinga", img:"../../../assets/FONT.png"},
        {text: "Elementos graficos que te inspiren", img:"../../../assets/GRAPHIC.png"}
    ];
    return (
    <div>
        <container>
            <div className="banner">
                <div className="container">
                    <div className="row">
                        <div className="col-sm"><h1>Genera la escencia de tu marca</h1></div>
                        <div className="col-sm img-col"> <img src='../../../assets/site.png' width="600px"/> </div>
                    </div>
                </div>
               
            </div>
            <div className="container">
                
                <div className="row">

                        {
                            services.map((item)=>{
                            return(
                                <div className="col-sm">
                                    <div className="banner-card">
                                        <img src={item.img}/>
                                        <span>{item.text}</span>
                                        
                                    </div>
                                </div>
                            )
                            })
                        }
                  
                       {/*  <div className="banner-card"></div>
                    </div>
                    <div class="col-sm">
                        <div className="banner-card"></div>
                    </div>
                    <div class="col-sm">
                        <div className ="banner-card"></div> */}
                
                </div>
            </div>

        </container>

        
    </div>)
}

export default Banner;
