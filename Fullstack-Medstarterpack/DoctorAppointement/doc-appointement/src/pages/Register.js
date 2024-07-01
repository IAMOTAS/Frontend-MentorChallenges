import React from 'react';
import { Form, Input } from "antd";
import Link from 'antd/es/typography/Link';

const Register = () => {


  const onFinish =(values) =>{

    console.log('recieved values:',values)
  }


  return (
  
    <div className='authentication'>

    <div className='authentication-form card p-3'>

        <h1 className='card-title mb-4'>Consult</h1>

        <Form layout='horizontal' onFinish={onFinish}>
          
          <Form.Item label='Name' name = 'name'>
            <Input placeholder='Name'/>
          </Form.Item>

          <Form.Item label='Email' name = 'email'>
            <Input placeholder='Email'/>
          </Form.Item>

          <Form.Item label='Password' name = 'password'>
            <Input placeholder='password' type='password'/>
          </Form.Item>

          <button className='primary-button my-2' htmltype='submit'><strong>REGISTER</strong></button>

          <Link to='/login' className='anchor'>CLICK HERE TO LOGIN</Link>

        </Form>

    </div>

    </div>

  );
}

export default Register;