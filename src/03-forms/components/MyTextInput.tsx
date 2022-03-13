import { ErrorMessage, useField } from 'formik'

/* Interface Props to MyTextInput */
interface Props {
    label: string
    name: string
    type?: 'text' | 'email' | 'password'
    placeholder?: string
    classLabel?: string
    classInput?: string
    classError?: string
    [x: string]: any
}

export const MyTextInput = ({ label, ...props }: Props) => {
    const [field] = useField(props)

    return (
        <>
            <label htmlFor={props.id || props.name} className={props.classLabel}>
                {label}
            </label>
            <input className={props.classInput} {...field} {...props} />
            <ErrorMessage name={props.name} component="span" className={props.classError} />
            {/* {meta.touched && meta.error && <span className="error"> {meta.error} </span>} */}
        </>
    )
}
