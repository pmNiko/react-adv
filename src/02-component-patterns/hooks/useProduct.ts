import { useEffect, useRef, useState } from 'react';
import { onChangeArgs, Product } from '../interfaces/interfaces';

type ReturnHook = {
    counter: number
    increaseBy: ((value: number) => void)

}

interface Props {
    product: Product
    onChange?: (args: onChangeArgs) => void
    value?: number
}

/**Hook useProduct 
 * @param product: Product
 * @param onChange: ((args: onChangeArgs) => void)
 * @returns counter: number
   @returns increaseBy: ((value: number) => void)
 */
export const useProduct = ({ product, onChange, value = 0 }: Props): ReturnHook => {

    const [counter, setCounter] = useState(value)

    const increaseBy = (value: number) => {

        const newValue = Math.max(counter + value, 0)

        setCounter(newValue)

        onChange && onChange({ count: newValue, product })
    }

    useEffect(() => {
        setCounter(value)
    }, [value])


    return {
        counter,
        increaseBy
    }
}