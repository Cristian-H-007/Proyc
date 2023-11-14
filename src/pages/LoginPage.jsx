import { useNavigate } from 'react-router-dom';
import { useForm} from '../hook/useForm'
import "../Styles/LoginPage.css"

export const LoginPage = () => {

    
    
    const navigate = useNavigate()
    const { username, password, onInputChange, onResetForm } =
        useForm({
            username: '',
            
            password: '',
        });

    const onLogin = async (e) => {
        e.preventDefault()
        const form = JSON.stringify({
            username,password
        })

        const res = await fetch('http://localhost:3000/authenticate', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json', // Specify the content type of the request body
                // You can add other headers if needed, such as authentication tokens
              },

            body: form
        });

        console.log(res);
        if (res.ok ) {
            navigate ('/dashboard',{
                replace: true,
                state: {
                    logged: true,
                    name,
                },
            });
        }

        onResetForm();
    };

    return (
        <main className='lM'>
            <form className='lF' onSubmit={onLogin}>
                <h1>Iniciar sesión</h1>
                <div className="input-nom">
                    <input type="text" name='username' id='username' value={username} placeholder='User' onChange={onInputChange} required autoComplete='off' />
                </div>
                <div className="input-pas">
                    <input type="password" name='password' id='password' value={password} placeholder='Password' onChange={onInputChange} required autoComplete='off' />
                </div>
                <button className='log'>Entrar</button>
            </form>
        </main>
    )
    
};