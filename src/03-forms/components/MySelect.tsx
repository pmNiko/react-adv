import { ErrorMessage, useField } from 'formik'

/* Interface Props to MyTextInput */
interface Props {
    label: string
    classLabel?: string
    classSelect?: string
    classError?: string
    name: string
    placeholder?: string
    [x: string]: any
}

export const MySelect = ({ label, ...props }: Props) => {
    const [field] = useField(props)

    return (
        <>
            <label className={props.classLabel} htmlFor={props.id || props.name}>
                {label}
            </label>
            <select className={props.classSelect} {...field} {...props} />
            <ErrorMessage name={props.name} component="span" className={props.classError} />
            {/* {meta.touched && meta.error && <span className="error"> {meta.error} </span>} */}
        </>
    )
}

/* <MySelect label="jobType" name="jobType">
    <option value="">Pick something</option>
    <option value="developer">Developer</option>
    <option value="designer">Designer</option>
    <option value="it-senior">IT Senior</option>
    <option value="it-jr">IT JR.</option>
</MySelect> */
