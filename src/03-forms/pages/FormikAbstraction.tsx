import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import { MyTextInput, MySelectList, MyCheckbox } from '../components'
import '../styles/styles.css'

interface FormValues {
    firstName: string
    lastName: string
    email: string
    jobType: string
    terms: boolean
}

const initialValues: FormValues = {
    firstName: '',
    lastName: '',
    email: '',
    jobType: '',
    terms: false,
}

const optionList = [
    { value: '', description: 'Pick something' },
    { value: 'developer', description: 'Developer' },
    { value: 'designer', description: 'Designer' },
    { value: 'it-senior', description: 'IT Senior' },
    { value: 'it-jr', description: 'IT JR.' },
]

export const FormikAbstraction = () => {
    return (
        <div>
            <h1>Formik Abstraction</h1>

            <Formik
                initialValues={initialValues}
                onSubmit={(values) => console.log(values)}
                validationSchema={Yup.object({
                    firstName: Yup.string()
                        .max(15, 'Debe tener 15 caracteres o menos')
                        .required('Este campo es requerido'),
                    lastName: Yup.string()
                        .max(10, 'Debe tener 10 caracteres o menos')
                        .required('Este campo es requerido'),
                    email: Yup.string()
                        .email('Email no valido.')
                        .required('Este campo es requerido'),
                    jobType: Yup.string()
                        .notOneOf(['it-jr'], 'Opción no disponible.')
                        .required('Requiredo'),
                    terms: Yup.boolean().isTrue('Debe aceptar los terminos y condiciones.'),
                })}
            >
                {({ handleReset }) => (
                    <Form>
                        <MyTextInput
                            label="firstName"
                            name="firstName"
                            placeholder="Ingrese su nombre"
                        />
                        <MyTextInput label="lastName" name="lastName" />
                        <MyTextInput label="email" name="email" type="email" />

                        <MySelectList label="jobType" name="jobType" options={optionList} />

                        <MyCheckbox label="Terms & conditions" name="terms" />

                        <button type="submit">Submit</button>
                        <button type="button" onClick={handleReset}>
                            Reset
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
