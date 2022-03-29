import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import { MyTextInput } from '../components'
import '../styles/styles.css'

interface InitState {
    name: string
    email: string
    password: string
    repetPassword: string
}
const initialValues: InitState = {
    name: '',
    email: '',
    password: '',
    repetPassword: '',
}

const validationSchema = Yup.object({
    name: Yup.string()
        .min(2, 'Debe tener un minimo de dos caracteres.')
        .max(15, 'Puede tener un máxiomo de 15 caracteres.')
        .required('Campo obligatorio!'),
    email: Yup.string().email('Formato de email no valido.').required('Campo obligatorio!'),
    password: Yup.string().min(6, 'Minimo de 6 caracteres.').required('Campo obligatorio!'),
    repetPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Las contraseñas no coinciden.')
        .required('Campo obligatorio!'),
})

export const RegisterFormikPage = () => {
    return (
        <div>
            <h1>Register Formik Page</h1>

            <Formik
                initialValues={initialValues}
                onSubmit={(values) => console.table(values)}
                validationSchema={validationSchema}
            >
                {({ handleReset }) => (
                    <Form>
                        <MyTextInput
                            label="Nombre"
                            name="name"
                            type="text"
                            placeholder="Ingrese su nombre"
                        />
                        <MyTextInput
                            label="Email"
                            name="email"
                            type="email"
                            placeholder="Ingrese un email valido"
                        />
                        <MyTextInput
                            label="Contraseña"
                            name="password"
                            type="password"
                            placeholder="Ingrese su contraseña"
                        />
                        <MyTextInput
                            label="Confirmación de contraseña"
                            name="repetPassword"
                            type="password"
                            placeholder="Confirme su contraña"
                        />

                        <button type="submit">Create</button>
                        <button type="button" onClick={handleReset}>
                            Reset
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

/**
 
<label htmlFor="name">Nombre </label>
                        <Field type="text" name="name" />
                        <ErrorMessage name="name" component="span" />

                        <label htmlFor="email">Email </label>
                        <Field type="text" name="email" />
                        <ErrorMessage name="email" component="span" />

                        <label htmlFor="password">Contraseña </label>
                        <Field type="password" name="password" />
                        <ErrorMessage name="password" component="span" />

                        <label>Confirmar contraseña </label>
                        <Field type="password" name="repetPassword" />
                        <ErrorMessage name="repetPassword" component="span" />
 */
