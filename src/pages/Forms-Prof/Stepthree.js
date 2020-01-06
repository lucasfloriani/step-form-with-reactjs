import React from 'react';
import './Signup.css';
import '../global-css/grid.css';

export default function Stepthree(props){
    return(
        <form>
            <fieldset>
                <h1>Seja um profissional - 3/4</h1>
                <hr className="hr_fino" />
                <fieldset>
                    <div className="campo">
                        <label>CEP</label>
                        <input type="number" value={props.cep} name="cep" onChange={props.handleInputChange}/>
                    </div>
                    
                </fieldset>
                <fieldset>
                    <div className="campo">
                        <label>Endereço</label>
                        <input type="text" value={props.adress} name="adress" onChange={props.handleInputChange}/>
                    </div>
                </fieldset>
                <fieldset>
                    <div className="campo">
                        <label>Senha</label>
                        <input type="password" value={props.pass} name="pass" onChange={props.handleInputChange}/>
                    </div>
                </fieldset>
                <fieldset>
                    <div className="campo">
                        <label>Confirmar senha</label>
                        <input type="password" value={props.confirmPass} name="confirmPass" onChange={props.handleInputChange}/>
                    </div>
                </fieldset>
                <button  className="btn_back" onClick={props.changeStepTwo}>Voltar</button>
                <button  className="btn_next" onClick={props.changeStepFour}>Próximo</button>
            </fieldset>
        </form>
    );
}