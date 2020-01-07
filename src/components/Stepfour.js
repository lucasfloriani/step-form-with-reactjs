import React, { useState } from 'react'
import { updateObjectIn } from '../helpers/object'
import {
  constructions,
  reforms,
  installations,
  smallWorks,
  technicalServices,
  maintenanceRepairs,
} from '../data/Arrays'

const Stepfour = ({ changeStepThree, onSubmit, initialValues }) => {
  const [stepFourData, setStepFourData] = useState(initialValues)

  const handleInputChange = (event) => {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name.split('.')
    setStepFourData((oldValues) => updateObjectIn(oldValues, name, value))
  }

  return (
    <>
      <div className="texto_cadastro grid-16">
        <h1>Serviços</h1>
        <h2>Selecione os serviços que você presta</h2>
      </div>
      <div className="form center-form4 grid-16">
        <form onSubmit={(e) => {
          e.preventDefault()
          onSubmit(stepFourData)
        }}>
          <fieldset>
            <h1>Seja um profissional - 4/4</h1>
            <hr className="hr_fino" />
            <fieldset>
              <p className="group_check">Construções</p>
              {constructions.map((item) => (
                <label key={item.key} className="option">
                  <input
                    type="checkbox"
                    checked={stepFourData[item.name]}
                    name={`constructions.${item.name}`}
                    onChange={handleInputChange}
                  />
                  <span>{item.label}</span>
                </label>
              ))}
            </fieldset>
            <hr className="hr_fino" />
            <fieldset>
              <p className="group_check">Reformas</p>
              {reforms.map((item) => (
                <label key={item.key} className="option">
                  <input
                    type="checkbox"
                    checked={stepFourData[item.name]}
                    name={`reforms.${item.name}`}
                    onChange={handleInputChange}
                  />
                  <span>{item.label}</span>
                </label>
              ))}
            </fieldset>
            <hr className="hr_fino" />
            <fieldset>
              <p className="group_check">Instalações</p>
              {installations.map(item => (
                <label key={item.key} className="option">
                  <input
                    type="checkbox"
                    checked={stepFourData[item.name]}
                    name={`installations.${item.name}`}
                    onChange={handleInputChange}
                  />
                  <span>{item.label}</span>
                </label>
              ))}
            </fieldset>
            <hr className="hr_fino" />
            <fieldset>
              <p className="group_check">Pequenas obras</p>
              {smallWorks.map((item) => (
                <label key={item.key} className="option">
                  <input
                    type="checkbox"
                    checked={stepFourData[item.name]}
                    name={`smallWorks.${item.name}`}
                    onChange={handleInputChange}
                  />
                  <span>{item.label}</span>
                </label>
              ))}
            </fieldset>
            <hr className="hr_fino" />
            <fieldset>
              <p className="group_check">Manutenção e reparos</p>
              {maintenanceRepairs.map((item) => (
                <label key={item.key} className="option">
                  <input
                    type="checkbox"
                    checked={stepFourData[item.name]}
                    name={`maintenanceRepairs.${item.name}`}
                    onChange={handleInputChange}
                  />
                  <span>{item.label}</span>
                </label>
              ))}
            </fieldset>
            <hr className="hr_fino" />
            <fieldset>
              <p className="group_check">Serviços técnicos</p>
              {technicalServices.map((item) => (
                <label key={item.key} className="option">
                  <input
                    type="checkbox"
                    checked={stepFourData[item.name]}
                    name={`technicalServices.${item.name}`}
                    onChange={handleInputChange}
                  />
                  <span>{item.label}</span>
                </label>
              ))}
            </fieldset>
            <button type="button" className="btn_back" onClick={changeStepThree}>Voltar</button>
            <button className="btn_next">Finalizar</button>
          </fieldset>
        </form>
      </div>
    </>
  )
}

export default Stepfour
