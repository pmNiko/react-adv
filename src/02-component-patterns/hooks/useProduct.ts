import { useState } from 'react';
import { onChangeArgs, Product, InitialValues } from '../interfaces/interfaces';

type ReturnHook = {
    counter: number
    increaseBy: ((value: number) => void)
    isMaxCountReached: boolean
    maxCount?: number
    reset: () => void
}

interface Props {
    product: Product
    onChange?: (args: onChangeArgs) => void
    value?: number
    initialValues?: InitialValues
}

/**Hook useProduct 
 * @param product: Product
 * @param onChange?: ((args: onChangeArgs) => void)
 * @param value? = 0: number
 * @param initialValues?: number
 * @returns counter: number
 * @returns increaseBy: ((value: number) => void)
 * @returns isMaxCountReached: boolean
 * @returns maxCount: number
 * @returns reset: () => void
 */
export const useProduct = ({ product, onChange, initialValues, value = 0 }: Props): ReturnHook => {

    const [counter, setCounter] = useState<number>(initialValues?.count || value)

    // const isMounted = useRef(false)

    const increaseBy = (value: number) => {

        let newValue = Math.max(counter + value, 0)

        if (initialValues?.maxCount) {
            newValue = Math.min(newValue, initialValues.maxCount)
        }

        setCounter(newValue)

        onChange && onChange({ count: newValue, product })
    }


    /**Reset to counter */
    const reset = () => {
        setCounter(initialValues?.count || value)
    }

    // useEffect(() => {
    //     if (!isMounted.current) return
    //     setCounter(value)
    // }, [value])

    // useEffect(() => {
    //     isMounted.current = true
    // }, [isMounted])


    return {
        counter,
        increaseBy,
        isMaxCountReached: !!initialValues?.maxCount && initialValues.maxCount === counter,
        maxCount: initialValues?.maxCount,
        reset
    }
}