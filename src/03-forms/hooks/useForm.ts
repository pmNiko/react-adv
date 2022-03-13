import { ChangeEvent, useState } from "react"

export const useForm = <T>(initState: T) => {
    const [formData, setFormData] = useState<T>(initState)

    const onChange = ({ target: { name, value } }: ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [name]: value })
    }

    const reset = () => {
        setFormData(initState)
    }

    const isValidEmail = (email: string) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    return {
        ...formData,
        onChange,
        reset,
        isValidEmail
    }
}