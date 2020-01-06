import React, { useState }  from 'react';
import './Signup.css';
import '../global-css/grid.css';

import Stepone from './Stepone';
import Steptwo from './Steptwo';
import Stepthree from './Stepthree';
import Stepfour from './Stepfour';

import formStep from '../enums/formStep';

export default function Signup(){
    const [step, setStep] = useState(formStep.StepOne);
    const [name, setName] = useState('');
    const [celPhone, setCelPhone] = useState(0);
    const [email, setEmail] = useState('');
    const [dateBorn, setDateBorn] = useState('');
    const [cpf, setCpf] = useState(0);
    const [cep, setCep] = useState(0);
    const [adress, setAdress] = useState(0);
    const [pass, setPass] = useState(0);
    const [confirmPass, setConfirmPass] = useState(0);
    const [constructionsDad, setConstructionsDad] = useState({"constructionsPiscina": false, "constructionsCasa": false, "Sauna": false, "Comercial":false, "Galpoes": false, "Instalações Esportivas": false, "Muro": false, "Cômodos": false, "Demolição": false});
    const [reform, setReforms] = useState({});
    const [installations, setInstallations] = useState({});
    const [smallWorks, setSmallWorks] = useState({});
    const [maintenanceRepairs, setMaintenanceRepairs] = useState({});
    const [technicalServices, setTechnicalServices] = useState({});


    const handleCheckboxChange = (event) => {
        const regex = new RegExp();
        const name = event.target.name;
        const value = event.target.checked;
        if(name.match(regex)){
            setConstructionsDad({...constructionsDad, [name] : value });
            console.log(value);
            console.log(name);
            console.log(constructionsDad);
        }
        
    }

    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        

        if(name === 'name'){
            setName(value);
        }

        if(name === 'celphone'){
            setCelPhone(value);
        }

        if(name === 'email'){
            setEmail(value);
        }

        if(name === 'dateBorn'){
            setDateBorn(value);
        }

        if(name === 'cpf'){
            setCpf(value);
        }

        if(name === 'cep'){
            setCep(value);
        }

        if(name === 'adress'){
            setAdress(value);
        }

        if(name === 'pass'){
            setPass(value);
        }

        if(name === 'confirmPass'){
            setConfirmPass(value);
        }
        
    }

    function changeStepOne(e){
        e.preventDefault();
        setStep(formStep.StepOne);
    }

    function changeStepTwo(e){
        e.preventDefault();
        setStep(formStep.StepTwo);
    }

    function changeStepThree(e){
        e.preventDefault();
        setStep(formStep.StepThree);
        const div = document.querySelector('[data-js="until-step3"]');
        const grid8 = document.querySelector('[data-js="remove-grid-8"]');
        div.classList.remove("remove-div");
        grid8.classList.remove("remove-div");
    }

    function changeStepFour(e){
        e.preventDefault();
        setStep(formStep.StepFour);
        const div = document.querySelector('[data-js="until-step3"]');
        const grid8 = document.querySelector('[data-js="remove-grid-8"]');
        div.classList.add("remove-div");
        grid8.classList.add("remove-div");
    }


    return (
        <>
            <section className="main_area">
                <div className="container">
                    <div className="texto_cadastro grid-8" data-js="until-step3">
                        <h1>Veja os pedidos de graça, e só pague para liberar os contatos!</h1>
                    </div>
                    <div className="form grid-8" data-js="remove-grid-8">
                        {step === formStep.StepOne && <Stepone 
                                                            name={name} 
                                                            handleInputChange={handleInputChange} 
                                                            celPhone={celPhone} 
                                                            email={email} changeStepTwo={changeStepTwo}
                        />}

                        {step === formStep.StepTwo && <Steptwo 
                                                            dateBorn={dateBorn} 
                                                            cpf={cpf}
                                                            handleInputChange={handleInputChange} 
                                                            changeStepOne={changeStepOne}  
                                                            changeStepThree={changeStepThree}
                                                            
                        />}

                        {step === formStep.StepThree && <Stepthree
                                                            cep={cep}
                                                            adress={adress}
                                                            pass={pass}
                                                            confirmPass={confirmPass}
                                                            handleInputChange={handleInputChange}
                                                            changeStepTwo={changeStepTwo}
                                                            changeStepFour={changeStepFour}
                                                            
                        />}
                         
                    </div>
                    {step === formStep.StepFour && <Stepfour
                                                        changeStepThree={changeStepThree}
                                                        constructionsDad={constructionsDad} 
                                                        reform={reform} 
                                                        installations={installations} 
                                                        smallWorks={smallWorks} 
                                                        maintenanceRepairs={maintenanceRepairs} 
                                                        technicalServices={technicalServices} 
                                                        handleCheckboxChange={handleCheckboxChange}
                                                        setConstructionsDad={setConstructionsDad}
                                                    
                        />}
                    
                </div>
            </section>
        </>
        );
}