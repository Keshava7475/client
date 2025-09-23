import axios from "axios"
import React, { useState } from "react"
import {Container, Row, Col, Form, Button} from 'react-bootstrap'
import { toast } from "react-toastify"
const CreateUser = () => {
    const createUserUrl = "https://jsonplaceholder.typicode.com/users"

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [userName, setUsername] = useState("")
    const [phone, setPhone] = useState("")

    const onSubmitForm = async (event) => {
        event.preventDefault()

        const payLoad = {
            name,
            email,
            userName,
            phone
        }
        try {
        const res = await axios.post(createUserUrl, payLoad)
        console.log(res.status)

        if (res.status === 201){
            setName("")
            setEmail("")
            setUsername("")
            setPhone("")
            toast.success("User has been Created Succesfully")
            
        } else {
            toast.warn("Error has Occured")
        }
        }catch(error){
            console.log(error)
            toast.error(error.message)
        }
}
    return(
        <>
        <Container className="mb-5">
            <Row className="justify-content-center mt-5">
                <Col lg={6}>
                    <Form onSubmit={onSubmitForm}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" value={name} onChange={(event) => setName(event.target.value)} required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(event) => setEmail(event.target.value)} required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter Your Username" value={userName} onChange={(event) => setUsername(event.target.value)} required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="text" placeholder="Enter Your Department" value={phone} onChange={(event) => setPhone(event.target.value)} required/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default CreateUser