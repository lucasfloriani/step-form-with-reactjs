import React, { useState } from 'react'

const Stepone = ({ changeStepTwo, initialValues }) => {
  const [stepOneData, setStepOneData] = useState(initialValues)

  const handleInputChange = (event) => {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name
    setStepOneData((oldValues) => ({ ...oldValues, [name]: value }))
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      changeStepTwo(stepOneData)
    }}>
      <fieldset>
        <h1>Seja um profissional - 1/4</h1>
        <hr className="hr_fino" />
        <fieldset>
          <div className="campo">
            <label>Nome do profissional/empresa</label>
            <input type="text" value={stepOneData.name} name="name" onChange={handleInputChange} />
          </div>
        </fieldset>
        <fieldset>
          <div className="campo">
            <label>Celular</label>
            <input type="number" value={stepOneData.celphone} name="celphone" onChange={handleInputChange} />
          </div>
        </fieldset>
        <fieldset>
          <div className="campo">
            <label>Email</label>
            <input type="email" value={stepOneData.email} name="email" onChange={handleInputChange} />
          </div>
        </fieldset>
        <button className="btn_next">Próximo</button>
      </fieldset>
    </form>
  )
}

export default Stepone
