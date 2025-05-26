import './../util/util.css'
import './../styles/auth.css'
import logo from '/logo.png'
import { Link } from 'react-router'
import { useState } from 'react'

export default function Auth(){

    const [switchLogin, setSwitchLogin] = useState(false);

    function switchTooginForm(){
        setSwitchLogin(switchLogin=> true)
    }
    function switchToSingupForm(){
        setSwitchLogin(switchLogin=> false)
    }

    return (
        <div className='auth pad16 flex flex-4 flex-dir gap16'>
            <h2 className='head2'>SingUp | Login now!</h2>
            <div className='authSignup pad16'>
                {!switchLogin &&
                    <form className='signup flex flex-dir gap16'>
                        <div className='coverform flex flex-dir gap8'>
                            <label className='label'>Username*</label>
                            <input className='inp' placeholder='sanjay451' type='text'/>
                        </div>
                        <div className='flex flex-dir gap8'>
                            <label className='label'>Email*</label>
                            <input className='inp' placeholder='sanjay4@gmail.com' type='text'/>
                        </div>
                        <div className='flex flex-dir gap8'>
                            <label className='label'>Mobile*</label>
                            <input className='inp' placeholder='94781-XXXXX' type='number'/>
                        </div>
                        <div className='flex flex-dir gap8'>
                            <label className='label'>Password*</label>
                            <input className='inp' placeholder='sanjay451' type='password'/>
                        </div>
                        <div className='flex flex-dir gap8'>
                            <label className='label'>Confirm password*</label>
                            <input className='inp' placeholder='sanjay451' type='password'/>
                        </div>
                        <Link to='/main' >Main</Link>
                        <button onClick={switchTooginForm} className='fakelink'>Already have account? Login now.</button>
                        <button className='featureBtn'>Submit</button>
                    </form>
                }

                {switchLogin &&
                    <form className='signup flex flex-dir gap16'>
                        <div className='coverform flex flex-dir gap8'>
                            <label className='label'>Username*</label>
                            <input className='inp' placeholder='sanjay451' type='text'/>
                        </div>
                        <div className='flex flex-dir gap8'>
                            <label className='label'>Password*</label>
                            <input className='inp' placeholder='sanjay451' type='password'/>
                        </div>
                        
                        <button onClick={switchToSingupForm} className='fakelink'>Make a new account</button>
                        <button className='featureBtn'>Submit</button>
                    </form>
                }

            </div>
        </div>
    )
}