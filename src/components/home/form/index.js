import React from 'react';
import './index.scss';
import 'material-design-icons';


const Form = () =>{
    return(
        <div className="box">
             <div className="formBox">
            <div className="form">
                <h3>¿Te interesa Uplif?</h3>
                <p>Dejanos tu correo y te contactaremos muy pronto.</p>
            </div>
           <div className="form-section">
               <div className="row">
                    <div className="col-sm-8">
                    <div class="form-group">
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="roger@mail.com"/>
                    </div>
                    </div>
                    <div className="col-sm-4">
                    <button type="button" className="btn btn-primary">Envia <span class="material-icons">send</span></button>
                    </div>
                </div>
           </div>
                
           
           
        </div>
        </div>
       
    )
}

export default Form;