import React, { useState } from 'react'

function Login() {


    const [username ,setUserName]=useState('krishna kumar');
  return (
    <div>
        <h3>login</h3>

        <h4>User Data : {username}</h4>

        <div>
            <form>
                <input
                type='text'
                 value={username}

                 onChange={(e)=>setUserName(e.target.value)}
                
                />
            </form>
        </div>
    </div>
  )
}

export default Login