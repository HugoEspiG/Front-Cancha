import { NavLink } from "react-router-dom"

export default function NavBar() {

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <NavLink to={'/'} className="navbar-brand">Home</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <NavLink to={"/login"} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Mis Rentas</NavLink>
                            <NavLink to={"/"} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Canchas</NavLink>
                        </div>
                    </div>
                    <div className="nav-item">
                        <NavLink to={"/login"} className="bi bi-person-circle text-dark"></NavLink>
                    </div>
                </div>
            </nav>
        </div>
    )
}