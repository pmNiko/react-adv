import { useFormik } from 'formik'
import * as Yup from 'yup'
import '../styles/styles.css'

interface FormValues {
    firstName: string
    lastName: string
    email: string
}

const initialValues: FormValues = {
    firstName: '',
    lastName: '',
    email: '',
}

export const FormikYupPage = () => {
    const { handleSubmit, handleReset, errors, touched, getFieldProps } = useFormik({
        initialValues,
        onSubmit: (values) => console.table(values),
        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(15, 'Debe tener 15 caracteres o menos')
                .required('Este campo es requerido'),
            lastName: Yup.string()
                .max(10, 'Debe tener 10 caracteres o menos')
                .required('Este campo es requerido'),
            email: Yup.string().email('Email no valido.').required('Este campo es requerido'),
        }),
    })

    return (
        <div>
            <h1>Formik Yup</h1>
            <form onSubmit={handleSubmit} noValidate>
                <label htmlFor="firstName">First Name</label>
                <input type="text" {...getFieldProps('firstName')} />
                {touched.firstName && errors.firstName && <span>{errors.firstName}</span>}

                <label htmlFor="lastName">Last Name</label>
                <input type="text" {...getFieldProps('lastName')} />
                {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

                <label htmlFor="email">Email Address</label>
                <input type="email" {...getFieldProps('email')} />
                {touched.email && errors.email && <span>{errors.email}</span>}

                <button type="submit">Submit</button>
                <button type="button" onClick={handleReset}>
                    Reset
                </button>
            </form>
        </div>
    )
}
