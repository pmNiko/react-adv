import { FormEvent } from 'react'
import { useForm } from '../hooks/useForm'
import '../styles/styles.css'

interface InitState {
    name: string
    email: string
    password: string
    repetPassword: string
}
const initState = {
    name: '',
    email: '',
    password: '',
    repetPassword: '',
}

export const RegisterPage = () => {
    const { onChange, reset, isValidEmail, name, email, password, repetPassword } =
        useForm<InitState>(initState)

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
    }

    return (
        <div>
            <h1>Register Page</h1>

            <form noValidate onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={name}
                    onChange={onChange}
                    className={`${!name && 'has-error'}`}
                />
                {!name && <span>Este campo es obligatorio.</span>}

                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={onChange}
                    className={`${!isValidEmail(email) && 'has-error'}`}
                />
                {!isValidEmail(email) && <span>Email no valido.</span>}

                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={onChange}
                    className={`${!password && password.length < 6 && 'has-error'}`}
                />
                {!password && password.length < 6 && <span>Password invalido.</span>}

                <input
                    type="password"
                    placeholder="Repeat Password"
                    name="repetPassword"
                    value={repetPassword}
                    onChange={onChange}
                    className={`${password !== repetPassword && 'has-error'}`}
                />
                {password !== repetPassword && <span>Las contraseñas no coinciden.</span>}

                <button type="submit">Create</button>
                <button type="button" onClick={reset}>
                    Reset
                </button>
            </form>
        </div>
    )
}
