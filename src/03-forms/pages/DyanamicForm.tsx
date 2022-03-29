import { Formik, Form } from 'formik'
import formJson from '../data/custom-form.json'
import { MyTextInput } from '../components/MyTextInput'
import { MySelect } from '../components'
import * as Yup from 'yup'

type Option = {
    id: number
    description: string
}

type Validation = {
    type: string
    message: string
}

interface FormProps {
    type: any
    name: string
    placeholder?: string
    label: string
    value: string
    options?: Option[]
    validations?: Validation[]
}

const initialValues: { [key: string]: any } = {}
const requiredFields: { [key: string]: any } = {}

for (const { name, value, validations } of formJson) {
    initialValues[name] = value

    if (!validations) continue

    let schema = Yup.string()

    for (const { type, message } of validations) {
        if (type === 'required') {
            schema = schema.required(message)
        }
    }

    requiredFields[name] = schema
}

const validationSchema = Yup.object({ ...requiredFields })

export const DyanamicForm = () => {
    return (
        <div>
            <h1>Dinamic Form</h1>

            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    console.log(values)
                }}
            >
                {({ handleReset }) => (
                    <Form noValidate>
                        {formJson.map(({ label, name, placeholder, type, options }: FormProps) => {
                            if (type === 'input' || type === 'password' || type === 'email') {
                                return (
                                    <MyTextInput
                                        key={name}
                                        label={label}
                                        name={name}
                                        placeholder={placeholder}
                                        type={type}
                                    />
                                )
                            } else if (type === 'select') {
                                return (
                                    <MySelect key={name} label={label} name={name}>
                                        <option value="">Seleccione una opción</option>
                                        {options?.map(({ id, description }: Option) => (
                                            <option key={description} value={id}>
                                                {description}
                                            </option>
                                        ))}
                                    </MySelect>
                                )
                            }

                            throw new Error(`El type: ${type}, no es soportado.`)
                        })}

                        <button type="submit">Send</button>
                        <button onClick={handleReset}>Reset</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
