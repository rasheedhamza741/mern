import React from 'react'
import button from './login/login.module.css'
import MyButton from '@/components/Button';
import TextInput from '@/components/Input';

const Home= () => {
  return (
    <div>
        <h1 className="text-4xl font-bold text-center">Hello React</h1>
        <button style={{backgroundColor:'Black',borderRadius:5 ,color:'white',padding:10}}>Home Button</button>
        <button className='submit-btn'> login Button</button>
        <button className={button.btn}> button</button>
        <img style={{padding:20}} src="/car.jpg" />

        <MyButton>my custom button</MyButton>
      <MyButton>Login</MyButton>
      <MyButton>my button</MyButton>
      <MyButton>Submit</MyButton>

      <TextInput type="password" label="Enter a password" id="password" />
      <TextInput type="text" label="Full name" id="name"/>
      <TextInput type="email" label="Email Address" id="email"/>
    </div>
  )
}

export default Home;