import { useNavigate } from "react-router-dom"

const Home = () => {

    const navigate = useNavigate()

    return(
    <>
        <div className="justify-content-center mt-5">
            <div className="justify-content-center flex">
            <h1 className="text-center">Welcome</h1>
            <hr />
            <div className="mb-5 text-center">
                <p>Click Here to have a look at our Users</p>
                <button type="button" onClick={()=>navigate("/client/users")}>View Users</button>
            </div>
            <hr />
            <div className="mt-5 text-center">
                <p>Click Here to add a new user</p>
                <button type="button"  onClick={()=>navigate("/client/add")}>Add User</button>
            </div>
            </div>
        </div>
    </>
    )
}

export default Home
