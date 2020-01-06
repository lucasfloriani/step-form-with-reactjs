import React from 'react';
import './Signup.css';
import '../global-css/grid.css';

export default function Stepone(props){

    return(
        <form>
            <fieldset>
                <h1>Seja um profissional - 1/4</h1>
                <hr className="hr_fino" />
                <fieldset>
                    <div className="campo">
                        <label>Nome do profissional/empresa</label>
                        <input type="text" value={props.name} name="name" onChange={props.handleInputChange}/>
                    </div>
                    
                </fieldset>
                <fieldset>
                    <div className="campo">
                        <label>Celular</label>
                        <input type="number" value={props.celPhone} name="celphone" onChange={props.handleInputChange}/>
                    </div>
                    
                </fieldset>
                <fieldset>
                    <div className="campo">
                        <label>Email</label>
                        <input type="email" value={props.email} name="email" onChange={props.handleInputChange} />
                    </div>
                </fieldset>
                <button type="button" className="btn_next" onClick={props.changeStepTwo}>Próximo</button>
            </fieldset>
        </form>
    )
}