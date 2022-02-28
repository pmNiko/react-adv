import { useEffect, useRef, useState } from 'react';
import { onChangeArgs, Product } from '../interfaces/interfaces';

type ReturnHook = {
    counter: number
    increaseBy: ((value: number) => void)

}

interface Props {
    product: Product
    onChange?: (args: onChangeArgs) => void
    onChangeCustomState?: (args: onChangeArgs) => void
    value?: number
}

/**Hook useProduct 
 * @param product: Product
 * @param onChange: ((args: onChangeArgs) => void)
 * @returns counter: number
   @returns increaseBy: ((value: number) => void)
 */
export const useProduct = ({ product, onChange, onChangeCustomState, value = 0 }: Props): ReturnHook => {

    const [counter, setCounter] = useState(value)

    const isControlled = useRef(!!onChange)

    const increaseBy = (value: number) => {

        if (isControlled.current) {
            return onChange!({ count: value, product })
        }

        const newValue = Math.max(counter + value, 0)

        setCounter(newValue)

        onChangeCustomState && onChangeCustomState({ count: newValue, product })
    }

    useEffect(() => {
        setCounter(value)
    }, [value])


    return {
        counter,
        increaseBy
    }
}