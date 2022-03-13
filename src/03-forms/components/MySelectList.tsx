import { ErrorMessage, useField } from 'formik'

type Option = {
    value: string
    description: string
}

/* Interface Props to MyTextInput */
interface Props {
    label: string
    options: {
        value: string
        description: string
    }[]
    classLabel?: string
    classSelect?: string
    classError?: string
    name: string
    placeholder?: string
    [x: string]: any
}

export const MySelectList = ({ label, options, ...props }: Props) => {
    const [field] = useField(props)

    return (
        <>
            <label className={props.classLabel} htmlFor={props.id || props.name}>
                {label}
            </label>

            <select className={props.classSelect} {...field} {...props}>
                {options.map(({ value, description }: Option) => (
                    <option key={value} value={value}>
                        {description}
                    </option>
                ))}
            </select>
            <ErrorMessage name={props.name} component="span" className={props.classError} />
            {/* {meta.touched && meta.error && <span className="error"> {meta.error} </span>}1 */}
        </>
    )
}
