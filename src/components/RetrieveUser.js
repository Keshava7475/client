import axios from 'axios'
import { useCallback, useEffect, useState } from 'react'
import {Col, Row, Card, Container} from 'react-bootstrap'
import { useParams } from 'react-router-dom'


const RetrieveUser = () => {
    const {userId} = useParams()
    const apiUrl = `https://jsonplaceholder.typicode.com/users/${userId}`
    const [user, setUser] = useState({})

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    
    const fetchUser = useCallback(async () => {
    try {
        const response = await axios.get(apiUrl);
        setUser(response.data);
        setName(response.data.name);
        setEmail(response.data.email);
        setPhone(response.data.phone);
    } catch (err) {
        console.log(err);
    }
}, [apiUrl]);

    useEffect(() => {
        fetchUser();
    }, [fetchUser]);


    return (
        <Container>
            {(user) ? (
            <>
            <h3 className="text-center">Users</h3>
            <Row className="justify-content-center">
            <Col lg={4}>
                <Card className='mb-5'>
                    <Card.Body>
                        <h4 className='text-center'>{name}</h4>
                        <p className='text-center'>{email}</p>
                        <p className='text-center'>{phone}</p>
                        
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
