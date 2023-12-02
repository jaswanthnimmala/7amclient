"use client"
import React, { useState } from 'react'
import Input from '@/components/inputControls/Input'
import configurations from './configuration.json'
import { fnFieldValidation, fnFormValidation } from '../../validations/appValidations'
const Login = () => {
    const [inputControls, setInputControls] = useState(configurations)
    const fnLogin = () => {
        const [isFormInValid, dataObj, updatedInputControls] = fnFormValidation(inputControls)
        if (isFormInValid) {
            setInputControls(updatedInputControls)
            return;
        }
        console.log(dataObj);
        alert("send request")
    }

    const fnChange = (eve) => {
        const updatedInputControls = fnFieldValidation(eve, inputControls)
        setInputControls(updatedInputControls)
    }

    return (
        <div className='container-fluid'>
            <h3 className='text-center my-3'>Login</h3>
            {
                inputControls.map((obj, ind) => {
                    return <Input key={`input_${ind}`} fnChange={fnChange} {...obj} />
                })
            }

            <div className='row'>
                <div className='offset-sm-5 col-sm-7'>
                    <button onClick={fnLogin} className='btn btn-primary'>Login</button>
                </div>

            </div>

        </div>
    )
}

export default Login
