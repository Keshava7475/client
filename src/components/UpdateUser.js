import axios from "axios"
import React, { useState, useEffect } from "react"
import {Container, Row, Col, Form, Button, Card} from 'react-bootstrap'
import { toast } from "react-toastify"
import { useParams } from 'react-router-dom'


const UpdateUser = () => {
    const {userId} = useParams()
    const apiUrl = `https://jsonplaceholder.typicode.com/users/${userId}`
    const [user, setUser] = useState({})

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [updating, setUpdating] = useState(true)

    const fetchUser = async () => {
        try{
        const response = await axios.get(`${apiUrl}`)
        console.log(response)
        
        setUser(response.data)
        setName(response.data.name)
        setEmail(response.data.email)
        setPhone(response.data.phone)
       
        } 
        catch(err){
            console.log(err);
            
        }
    }

    useEffect(() => {
        fetchUser()
        
    }, [userId])

    const onSubmitForm = async (event) => {
        event.preventDefault()

        const payLoad = {
            name,
            email,
            phone
        }
        try {
        const res = await axios.put(apiUrl, payLoad)
        console.log(res)

        if (res.status === 200){
            setUser(res.data)
            setName("")
            setEmail("")
            setPhone("")
            setUpdating(false)
            toast.success("User has been Updated Succesfully")

            
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
            {updating ? (
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
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="text" placeholder="Enter Your Phone Number" value={phone} onChange={(event) => setPhone(event.target.value)} required/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    </Form>
                </Col>
            </Row>
            ) : (
                <>
            <h3 className="text-center">Users</h3>
            <Row className="justify-content-center">
            <Col lg={4}>
                <Card className='mb-5'>
                    <Card.Body>
                        <h4 className='text-center'>{user.name}</h4>
                        <p className='text-center'>{user.email}</p>
                        <p className='text-center'>{user.phone}</p>
                        
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        </>
            )}
        </Container>
        </>
    )
}

export default UpdateUser