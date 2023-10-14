import { useNavigate } from 'react-router-dom';
import { useForm} from '../hook/useForm'
import "../Styles/LoginPage.css"

export const LoginPage = () => {

    const navigate = useNavigate()

    const { name, password, onInputChange, onResetForm } =
        useForm({
            name: '',
            
            password: '',
        });

    const onLogin = (e) => {
        e.preventDefault()

        navigate ('/dashboard',{
            replace: true,
            state: {
                logged: true,
                name,
            },
        });

        onResetForm();
    };

    return (
        <main className='lM'>
            <form className='lF' onSubmit={onLogin}>
                <h1>Iniciar sesión</h1>

                <div className="input-nom">
                    <input type="text" name='name' id='name' value={name} placeholder='User' onChange={onInputChange} required autoComplete='off' />
                </div>

                {/* <div className="input-group">
                    <input type="email" name='email' id='email' value={email} onChange={onInputChange} required autoComplete='off' />
                    <label htmlFor="name">Email:</label>
                </div> */}

                <div className="input-pas">
                    <input type="password" name='password' id='password' value={password} placeholder='Password' onChange={onInputChange} required autoComplete='off' />
                </div>

                <button className='log'>Entrar</button>

            </form>
        </main>
    )
    
};