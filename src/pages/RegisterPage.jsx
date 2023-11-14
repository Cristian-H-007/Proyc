import { useNavigate } from 'react-router-dom';
import { useForm} from '../hook/useForm'
import '../Styles/RegisterPage.css'

export const RegisterPage = () => {

    const navigate = useNavigate();

    const { username, email, password, onInputChange, onResetForm } =
        useForm({
            username: '',
            email: '',
            password: '',
        });

    const onRegister = async (e) => {
        e.preventDefault()

        console.log(username,email,password);

        const form = JSON.stringify({
            username,email,password
        })

        const res = await fetch('http://localhost:3000/register', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json', // Specify the content type of the request body
                // You can add other headers if needed, such as authentication tokens
              },

            body: form
        });

        console.log(res);

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
                    <input type="text" name='username' id='username' value={username} placeholder='User' onChange={onInputChange} required autoComplete='off' />
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