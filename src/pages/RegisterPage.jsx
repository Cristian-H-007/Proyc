import { useNavigate } from 'react-router-dom';
import { useForm} from '../hook/useForm'
import '../Styles/RegisterPage.css'

export const RegisterPage = () => {

    const navigate = useNavigate();

    const { name, email, password, onInputChange, onResetForm } =
        useForm({
            name: '',
            email: '',
            password: '',
        });

    const onRegister = (e) => {
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
        <main className='rM'>
            <form className='rF' onSubmit={onRegister}>
                <h1>Registrarse</h1>

                <div className="input-userr">
                    <input type="text" name='name' id='name' value={name} placeholder='User' onChange={onInputChange} required autoComplete='off' />
                </div>

                <div className="input-email">
                    <input type="email" name='email' id='email' value={email} placeholder='Email' onChange={onInputChange} required autoComplete='off' />
                </div>

                <div className="input-password">
                    <input type="password" name='password' id='password' value={password} placeholder='Password' onChange={onInputChange} required autoComplete='off' />
                </div>

                <button className='reg'>Registrarse</button>

            </form>
        </main>
    )
    
};