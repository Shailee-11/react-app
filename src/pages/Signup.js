
import React from 'react'
import SignUpSignInComponent from '../Components/SignUpSignIn';
import Header from  '../Components/Header';

function Signup() {
  return (
    <div>
        <Header />
        <div className='wrapper'>
            <SignUpSignInComponent/>
        </div>
    </div>
  )
}

export default Signup




