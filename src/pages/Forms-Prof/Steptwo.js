import React from 'react';
import './Signup.css';
import '../global-css/grid.css';

export default function Steptwo(props){
    return(
        <form >
            <fieldset>
                <h1>Seja um profissional - 2/4</h1>
                <hr className="hr_fino" />
                <fieldset>
                    <div className="campo">
                        <label>Data de nascimento</label>
                        <input type="text" value={props.dateBorn} name="dateBorn" onChange={props.handleInputChange}/>
                    </div>
                    
                </fieldset>
                <fieldset>
                    <div className="campo">
                        <label>CPF</label>
                        <input type="number" value={props.cpf} name="cpf" onChange={props.handleInputChange}/>
                    </div>
                    
                </fieldset>
                <button  className="btn_back" onClick={props.changeStepOne}>Voltar</button>
                <button  className="btn_next" onClick={props.changeStepThree}>Próximo</button>
            </fieldset>
        </form>
    );
}