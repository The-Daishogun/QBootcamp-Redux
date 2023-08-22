import { useAppDispatch } from "../store/hooks";
import {changeByAmount} from "../store/counterSlice"

export const ChangeValueButton = ({ amount }: { amount: number }) => {
    const dispatch = useAppDispatch()
    return (
    <button onClick={() => {
                dispatch(changeByAmount(amount))
            }
        }>
            {amount}
    </button>
)}