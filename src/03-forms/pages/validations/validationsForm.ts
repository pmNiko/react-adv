import * as Yup from 'yup';

/* Vlidación de los formularios con Yup */
export const validationForm = Yup.object({
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
    terms: Yup.boolean().isTrue('Debe aceptar los terminos y condiciones.')
})