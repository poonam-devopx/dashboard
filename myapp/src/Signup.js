import React,{useRef} from 'react'
import { Button, Card, Form, } from 'react-bootstrap'
import {useAuth} from "./components/Context/AuthContext" 
function Signup() {
    const emailRef=useRef();
    const passwordRef=useRef();
    const passwordConfirmRef=useRef();
    const {signup}=useAuth();
    return (
        <>
        <Card>
        <Card.Body>
        <h2 className="text-center mb-4"> Sign up</h2>
        <Form>
            <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" ref={emailRef} required/>
            </Form.Group>
            <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" ref={passwordRef} required/>

            </Form.Group>
            <Form.Group id="passwordConf">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" ref={passwordConfirmRef} required/>

            </Form.Group>
            <Button className="w-100" type="submit">Submit</Button>

        </Form>
        </Card.Body>

        </Card>
        <div className="w-100 text-center mt-2">
            Already have an account. Log In?
            
        </div>
        </>
    )
}

export default Signup
