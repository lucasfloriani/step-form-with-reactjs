import React, { useState } from 'react'

const Steptwo = ({ changeStepOne, changeStepThree, initialValues }) => {
  const [stepTwoData, setStepTwoData] = useState(initialValues)

  const handleInputChange = (event) => {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name
    setStepTwoData((oldValues) => ({ ...oldValues, [name]: value }))
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      changeStepThree(stepTwoData)
    }}>
      <fieldset>
        <h1>Seja um profissional - 2/4</h1>
        <hr className="hr_fino" />
        <fieldset>
          <div className="campo">
            <label>Data de nascimento</label>
            <input type="text" value={stepTwoData.dateBorn} name="dateBorn" onChange={handleInputChange}/>
          </div>
        </fieldset>
        <fieldset>
          <div className="campo">
            <label>CPF</label>
            <input type="number" value={stepTwoData.cpf} name="cpf" onChange={handleInputChange}/>
          </div>
        </fieldset>
        <button type="button" className="btn_back" onClick={changeStepOne}>Voltar</button>
        <button className="btn_next">Próximo</button>
      </fieldset>
    </form>
  )
}

export default Steptwo
