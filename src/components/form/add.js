import React, { useState } from 'react'
import axios from 'axios'

const add = () => {

    const data = {
        UID: 1,
        username: 'standbymik',
        password: '123456',
        created_time: null
    }

    const [username, setusername] = useState(data.username)
    const [password, setpassword] = useState(data.password)

    const submitForm = async () => {
        const result = await axios.get('http://localhost:3000/mssql', { params: { username } })
        console.log(result.data)
    }

    return (
        <React.Fragment>
            <div>username : <input value={username} onChange={e => setusername(e.target.value)} /></div>
            <div>password : <input value={password} onChange={e => setpassword(e.target.value)} /></div>
            <button onClick={submitForm}>บันทึก</button>
        </React.Fragment>
    )
}

export default add