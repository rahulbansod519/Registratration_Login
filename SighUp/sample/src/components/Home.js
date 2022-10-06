import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Sign_img from './Sign_Img';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm } from "react-hook-form";
const Home = () => {
  const { register, handleSubmit } = useForm();
  const [inpval, setInpval] = useState({
    name: "",
    email: "",
    password: ""
  })
  console.log(inpval);
  const getdata = (e) => {
    // console.log(e.target.value)
    const { value, name } = e.target;

    setInpval(() => {
      return {
        ...inpval,
        [name]: value,

      }
    })

  }
  const validate_data = (e) => {
    e.preventdefault();
    console.log(inpval)
  }
  return (
    <>
      <div className='container mt-3'>
        <section className='d-flex justify-content-between'>
          <div className='left-data'>
            <h3>Sign Up</h3>
            <Form>
              <Form.Group className="mb-4 col" controlId="formBasicName">
                <Form.Control type="text" name='name' onChange={getdata} placeholder="Enter Your Name" />
              </Form.Group>
              <Form.Group className="mb-3 col" controlId="formBasicEmail">
                <Form.Control type="email" name='email' onchange={getdata} placeholder="Enter Email" />
              </Form.Group>

              <Form.Group className="mb-3 col" controlId="formBasicPassword">
                <Form.Control type="password" name='password' onchange={getdata} placeholder="Password" />
              </Form.Group>
              <p>Already have an account <span>Sign In</span></p>
              <Button variant="primary"  onClick={validate_data} type="submit">
                Submit
              </Button>
            </Form>
          </div>
          <Sign_img />
        </section>
      </div>
    </>
  )
}
export default Home