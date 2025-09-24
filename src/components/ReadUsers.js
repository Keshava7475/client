import { useEffect, useState } from 'react'
import {Col, Row, Card, Container} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const apiUrl = "https://jsonplaceholder.typicode.com/users"

const ReadUsers = () => {

    const navigate = useNavigate()

    const [users, setUsers] = useState([])

    const fetchUsers = async () => {
        const response = await fetch(apiUrl)
        const data = await response.json()
        console.log(data)
        setUsers(data)
    }

    const onClickDelete = (id) => {
        const updatedData = users.filter(user => user.id !== id)
        console.log(updatedData)
        setUsers(updatedData)
        toast.warn("User Deleted")
    }

    useEffect(() => {
        fetchUsers()
    }, [])

    const renderedUsers = users.map(user => {
        return (
            <>
                
                <Row className="justify-content-center">
                    <Col lg={4}>
                        <Card className='mb-5'>
                            <Card.Body>
                                <h4 className='text-center'>{user.name}</h4>
                                <p className='text-center'>{user.email}</p>
                                <p className='text-center'>{user.company.bs}</p>
                                <button type="button" className='m-3' onClick={()=>onClickDelete(user.id)} >Delete</button>
                                <button type="button" className='ml-3'onClick={()=>navigate(`/client/update/${user.id}`)} >Edit</button>
                            </Card.Body>
                            
                        </Card>
                    </Col>
                </Row>
            </>
        )
    })

    return (
        <Container>
            <h3 className="text-center">Users</h3>
            <Row className="d-flex flex-column flex-wrap justify-content-between">
                <Col className='mb-5'>
                    {renderedUsers}
                </Col>
                
            </Row>
        </Container>
    )
}

export default ReadUsers
