import React from 'react'
import button from './login/login.module.css'
const Home= () => {
  return (
    <div>
        <h1 className="text-4xl font-bold text-center">Hello React</h1>
        <button style={{backgroundColor:'Black',borderRadius:5 ,color:'white',padding:10}}>Home Button</button>
        <button className='submit-btn'> login Button</button>
        <button className={button.btn}> button</button>
        <img style={{padding:20}} src="/car.jpg" />
    </div>
  )
}

export default Home;