import { Link, useParams } from 'react-router-dom'
import { useAuth } from '../security/AuthContext'

export default function HeaderComponent(){
    const authContext = useAuth()
    const isAuthenticated = authContext.isAuthenticated;
    const username = authContext.username
    function Logout(){
        authContext.logout()
    }
    return(
        <header className="border-bottom border-light border-5 mb-5 p-2">
        <div className="container">
            <div className="row">
                <nav className="navbar navbar-expand-lg">
                    <a className="navbar-brand ms-2 fs-2 fw-bold text-black" href="">EventManager</a>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav">
                            <li className="nav-item fs-5">
                                <Link className="nav-link" to="">Home</Link></li>
                            <li className="nav-item fs-5">
                                <Link className="nav-link" to="">Events</Link></li>
                        </ul>
                    </div>
                    <ul className="navbar-nav">
                        <li className="nav-item fs-5">
                            {!isAuthenticated && <Link className="nav-link" to="/login">Login</Link>}</li>
                        <li className="nav-item fs-5">
                            {isAuthenticated && <Link className="nav-link" to="">Welcome {username}</Link>}</li>
                        <li className="nav-item fs-5">
                            {isAuthenticated && <Link className="nav-link" to="/logout">Logout</Link>}</li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
    )
}