import { ErrorMessage, useField } from 'formik'

/* Interface Props to MyTextInput */
interface Props {
    label: string
    name: string
    classLabel?: string
    classInput?: string
    classError?: string
    [x: string]: any
}

export const MyCheckbox = ({ label, ...props }: Props) => {
    const [field] = useField({ ...props, type: 'checkbox' })

    return (
        <>
            <label className={props.classLabel}>
                <input type="checkbox" className={props.classInput} {...field} {...props} />
                {label}
            </label>
            <ErrorMessage name={props.name} component="span" className={props.classError} />
            {/* {meta.touched && meta.error && <span className="error"> {meta.error} </span>} */}
        </>
    )
}
