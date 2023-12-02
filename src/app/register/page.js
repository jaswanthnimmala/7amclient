"use client"
import React, { useState } from 'react'
import configurations from './configuration.json'
import Input from '@/components/inputControls/Input'
import Select from '@/components/inputControls/Select'
import Textarea from '@/components/inputControls/Textarea'
import { fnFieldValidation, fnFormValidation } from '../../validations/appValidations'
const Register = () => {
    const [inputControls, setInputControls] = useState(configurations)
    const fnChange = (eve) => {
        const updatedInputControls = fnFieldValidation(eve, inputControls)
        setInputControls(updatedInputControls)
    }
    const fnRegister = () => {
        const [isFormInValid, dataObj, updatedInputControls] = fnFormValidation(inputControls)
        if (isFormInValid) {
            setInputControls(updatedInputControls)
            return;
        }
        console.log(dataObj);
        alert("send request")
    }
    return (
        <div className='container-fluid'>
            <h3 className='text-center my-3'>Register</h3>
            {
                inputControls.map((obj, ind) => {
                    switch (obj.tag) {
                        case 'select':
                            return <Select key={`input_${ind}`} fnChange={fnChange} {...obj} />
                        case 'textarea':
                            return <Textarea key={`input_${ind}`} fnChange={fnChange} {...obj} />
                        default:
                            return <Input key={`input_${ind}`} fnChange={fnChange} {...obj} />

                    }

                })
            }

            <div className='row'>
                <div className='offset-sm-5 col-sm-7'>
                    <button onClick={fnRegister} className='btn btn-primary'>Register</button>
                </div>

            </div>
        </div>
    )
}

export default Register
