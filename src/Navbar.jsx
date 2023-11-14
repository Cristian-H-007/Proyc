
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import './Styles/Navbar.css'
import logo from "./assets/logopan.png"
// import logopan from './assets/logopan.svg';

export const Navbar = () => {

    const {state} = useLocation();
    const navigate = useNavigate();

    console.log(state);

    const onLogout = () => {
        navigate('/login',{
            replace: true,
        });
    };

    return (

        <>
            <header>
            
                <div className="logoPan">
                <Link> <img src={logo} alt="" /></Link>
                </div>
                

                {state?.logged ? (

                    <div className="user">
                        <span className="username">{state?.name}</span>
                        <button className="btn-logout" onClick={onLogout}>Cerrar sesión</button>
                    </div>
                ) : (
                    <nav>
                        <Link to='/login'>Iniciar sesión</Link>
                        <Link to='/register'>Registrarse</Link>
                    </nav>

                )}
                
            </header>
        
            <Outlet/>

        </>
    );
};