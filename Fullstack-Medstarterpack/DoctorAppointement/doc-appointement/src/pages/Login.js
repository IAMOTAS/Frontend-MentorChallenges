import React from 'react';
import { Form, Input } from "antd";
import Link from 'antd/es/typography/Link';

const Login = () => {


  const onFinish =(values) =>{

    console.log('recieved values:',values)
  }


  return (
  
    <div className='authentication'>

    <div className='authentication-form card p-3'>

        <h1 className='card-title mb-4'>Healthy Living</h1>

        <Form layout='horizontal' onFinish={onFinish}>
          
          
          <Form.Item label='Email' name = 'email'>
            <Input placeholder='Email'/>
          </Form.Item>

          <Form.Item label='Password' name = 'password'>
            <Input placeholder='password' type='password'/>
          </Form.Item>

          <button className='primary-button my-2' htmltype='submit'><strong>LOGIN</strong></button>

          <Link to='/register' className='anchor'>CLICK HERE TO REGISTER</Link>

        </Form>

    </div>

    </div>

  );
}

export default Login;

