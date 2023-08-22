import { getNumberColor } from "../utils/color"
import { useAppSelector } from "../store/hooks"

export const Count = () => {
    const count = useAppSelector((state) => state.counter.value)
    return (
        <h1 style={{color:getNumberColor(count)}} >{count}</h1>
    )
}