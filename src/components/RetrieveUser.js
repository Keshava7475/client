import axios from 'axios'
import { useEffect, useState } from 'react'
import {Col, Row, Card, Container} from 'react-bootstrap'
import { useParams } from 'react-router-dom'


const RetrieveUser = () => {
    const {userId} = useParams()
    const apiUrl = `https://jsonplaceholder.typicode.com/users/${userId}`
    const [user, setUser] = useState({})

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    
    const fetchUser = async () => {
        try{
        const response = await axios.get(`${apiUrl}`)
        console.log(response)
        setUser(response.data)
        setName(user.name)
        setEmail(user.email)
        setPhone(user.phone)
       
        } 
        catch(err){
            console.log(err);
            
        }
    }

    useEffect(() => {
        fetchUser()
        
    }, [userId])

    return (
        <Container>
            {(user) ? (
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
        ) : <div className='text-center text-danger'>User doesn't Exist</div>}
        </Container>
        
    )
}

export default RetrieveUser