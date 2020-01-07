import React, { useState } from 'react'

const Stepthree = ({ changeStepTwo, changeStepFour, initialValues }) => {
  const [stepThreeData, setStepThreeData] = useState(initialValues)

  const handleInputChange = (event) => {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name
    setStepThreeData((oldValues) => ({ ...oldValues, [name]: value }))
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      changeStepFour(stepThreeData)
    }}>
      <fieldset>
        <h1>Seja um profissional - 3/4</h1>
        <hr className="hr_fino" />
        <fieldset>
          <div className="campo">
            <label>CEP</label>
            <input type="number" value={stepThreeData.cep} name="cep" onChange={handleInputChange}/>
          </div>
        </fieldset>
        <fieldset>
          <div className="campo">
            <label>Endereço</label>
            <input type="text" value={stepThreeData.adress} name="adress" onChange={handleInputChange}/>
          </div>
        </fieldset>
        <fieldset>
          <div className="campo">
            <label>Senha</label>
            <input type="password" value={stepThreeData.pass} name="pass" onChange={handleInputChange}/>
          </div>
        </fieldset>
        <fieldset>
          <div className="campo">
            <label>Confirmar senha</label>
            <input type="password" value={stepThreeData.confirmPass} name="confirmPass" onChange={handleInputChange}/>
          </div>
        </fieldset>
        <button type="button" className="btn_back" onClick={changeStepTwo}>Voltar</button>
        <button className="btn_next">Próximo</button>
      </fieldset>
    </form>
  )
}

export default Stepthree
