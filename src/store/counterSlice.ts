import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

export type LogType = { msg: string; date: Date;  }

export interface CounterState {
    value: number
    logs: LogType[]
}

const initialState: CounterState= {
    value: 0,
    logs: []
}

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
            state.logs.push({msg:`You increased the value by 1`, date:new Date()})
        },
        decrement: (state) => {
            state.value -= 1
            state.logs.push({msg:`You decreased the value by 1`, date:new Date()})
        },
        changeByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload
            state.logs.push({msg:`You changed the value by ${action.payload}`, date:new Date()})
        }
    }
})


export const { increment, decrement, changeByAmount } = counterSlice.actions
export default counterSlice.reducer

