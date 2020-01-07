import React, { useState }  from 'react'
import formStep from '../../enums/formStep'
import Stepone from '../../components/Stepone'
import Steptwo from '../../components/Steptwo'
import Stepthree from '../../components/Stepthree'
import Stepfour from '../../components/Stepfour'

export default function Signup() {
  const [step, setStep] = useState(formStep.StepOne)
  const [formData, setFormData] = useState({})

  const changeStep = step => values => {
    setFormData(oldValues => ({ ...oldValues, ...values }))
    setStep(step)
  }

  const changeToStepTwo = changeStep(formStep.StepTwo)
  const changeToStepThree = changeStep(formStep.StepThree)
  const changeToStepFour = changeStep(formStep.StepFour)
  const backToStepOne = () => setStep(formStep.StepOne)
  const backToStepTwo = () => setStep(formStep.StepTwo)
  const backToStepThree = () => setStep(formStep.StepThree)


  const submitSteps = (lastValues) => {
    setFormData(oldValues => {
      const data = { ...oldValues, ...lastValues }
      console.log('data:', data)
      return data
    })
  }

  return (
    <section className="main_area">
      <div className="container">
        <div className="texto_cadastro grid-8">
          <h1>Veja os pedidos de graça, e só pague para liberar os contatos!</h1>
        </div>
        <div className="form grid-8">
          {step === formStep.StepOne && (
            <Stepone
              initialValues={{
                name: formData.name,
                celphone: formData.celphone,
                email: formData.email,
              }}
              changeStepTwo={changeToStepTwo}
            />
          )}
          {step === formStep.StepTwo && (
            <Steptwo
              initialValues={{
                cpf: formData.cpf,
                dateBorn: formData.dateBorn,
              }}
              changeStepOne={backToStepOne}
              changeStepThree={changeToStepThree}
            />
          )}
          {step === formStep.StepThree && (
            <Stepthree
              initialValues={{
                cep: formData.cep,
                adress: formData.adress,
                pass: formData.pass,
                confirmPass: formData.confirmPass,
              }}
              changeStepTwo={backToStepTwo}
              changeStepFour={changeToStepFour}
            />
          )}
        </div>
        {step === formStep.StepFour && (
          <Stepfour
            initialValues={{
              constructionsDad: formData.constructionsDad || {},
              reforms: formData.reforms || {},
              installations: formData.installations || {},
              smallWorks: formData.smallWorks || {},
              maintenanceRepairs: formData.maintenanceRepairs || {},
              technicalServices: formData.technicalServices || {},
            }}
            changeStepThree={backToStepThree}
            onSubmit={submitSteps}
          />
        )}
      </div>
    </section>
  )
}
