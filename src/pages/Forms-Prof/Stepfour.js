import React from 'react';
import './Signup.css';
import '../global-css/grid.css';

import { constructions, reforms, installations, 
         smallWorks, technicalServices, maintenanceRepairs 
        } from './items-checkboxes/Arrays';

export default function Stepfour(props){

    return (
        <>
            <div className="texto_cadastro grid-16">
                <h1>Serviços</h1>
                <h2>Selecione os serviços que você presta</h2>
            </div>
            <div className="form center-form4 grid-16">
                <form method="post">
                    <fieldset>
                        <h1>Seja um profissional - 4/4</h1>
                        <hr className="hr_fino" />
                        <fieldset>
                            <p className="group_check">Construções</p>
                            {constructions.map(item => (
                                <label key={item.key} className="option">
                                    <input type="checkbox"  checked={props.constructionsDad[item.name]} name={item.name} onChange={props.handleCheckboxChange} />
                                    <span>{item.label}</span>
                                </label>
                            ))}
                        </fieldset>
                        <hr className="hr_fino" />
                        <fieldset>
                            <p className="group_check">Reformas</p>
                            {reforms.map(item => (
                                <label key={item.key} className="option">
                                    <input type="checkbox"  />
                                    <span>{item.label}</span>
                                </label>
                            ))}
                        </fieldset>
                        <hr className="hr_fino" />
                        <fieldset>
                            <p className="group_check">Instalações</p>
                            {installations.map(item => (
                                <label key={item.key} className="option">
                                    <input type="checkbox"  />
                                    <span>{item.label}</span>
                                </label>
                            ))}
                        </fieldset>
                        <hr className="hr_fino" />
                        <fieldset>
                            <p className="group_check">Pequenas obras</p>
                            {smallWorks.map(item => (
                                <label key={item.key} className="option">
                                    <input type="checkbox"  />
                                    <span>{item.label}</span>
                                </label>
                            ))}
                        </fieldset>
                        <hr className="hr_fino" />
                        <fieldset>
                            <p className="group_check">Manutenção e reparos</p>
                            {maintenanceRepairs.map(item => (
                                <label key={item.key} className="option">
                                    <input type="checkbox"  />
                                    <span>{item.label}</span>
                                </label>
                            ))}
                        </fieldset>
                        <hr className="hr_fino" />
                        <fieldset>
                            <p className="group_check">Serviços técnicos</p>
                            {technicalServices.map(item => (
                                <label key={item.key} className="option">
                                    <input type="checkbox"  />
                                    <span>{item.label}</span>
                                </label>
                            ))}
                        </fieldset>
                        <button  className="btn_back" onClick={props.changeStepThree}>Voltar</button>
                        <button  className="btn_next">Finalizar</button>
                    </fieldset>
                </form>
            </div>
        </>
    );
}