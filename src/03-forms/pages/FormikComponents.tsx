import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
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

export const FormikComponents = () => {
    return (
        <div>
            <h1>Formik Components</h1>

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
                        <label htmlFor="firstName">First Name</label>
                        <Field type="text" name="firstName" />
                        <ErrorMessage name="firstName" component="span" />

                        <label htmlFor="lastName">Last Name</label>
                        <Field type="text" name="lastName" />
                        <ErrorMessage name="lastName" component="span" />

                        <label htmlFor="email">Email Address</label>
                        <Field type="text" name="email" />
                        <ErrorMessage name="email" component="span" />

                        <label htmlFor="jobType">Job Type select</label>
                        <Field as="select" name="jobType">
                            <option value="">Pick something</option>
                            <option value="developer">Developer</option>
                            <option value="designer">Designer</option>
                            <option value="it-senior">IT Senior</option>
                            <option value="it-jr">IT JR.</option>
                        </Field>
                        <ErrorMessage name="jobType" component="span" />

                        <label>
                            <Field type="checkbox" name="terms" />
                            Terms and conditions
                        </label>
                        <ErrorMessage name="terms" component="span" />

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
