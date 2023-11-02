import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { Data } from "../../types/interfaces"
import { RootState } from "../../app/store"

const initialState: Data | undefined = {
  id: 0,
  due_at: "",
  contact_email: "",
  contact_name: "",
  amount_formatted: "",
  contact_address: "",
  contact_phone: "",
  type: "",
}

export const rowSetterSlice = createSlice({
  name: "row",
  initialState,
  reducers: {
    newRowInvoice: (state, action: PayloadAction<Data>) => {
      return {
        ...state,
        id: action.payload.id,
        due_at: action.payload.due_at,
        contact_email: action.payload.contact_email,
        contact_name: action.payload.contact_name,
        amount_formatted: action.payload.amount_formatted,
        contact_address: action.payload.contact_address,
        contact_phone: action.payload.contact_phone,
        type: action.payload.type,
      }
    },
    newRowBill: (state, action: PayloadAction<Data>) => {
      return {
        ...state,
        id: action.payload.id,
        due_at: action.payload.due_at,
        contact_email: action.payload.contact_email,
        contact_name: action.payload.contact_name,
        amount_formatted: action.payload.amount_formatted,
        contact_address: action.payload.contact_address,
        contact_phone: action.payload.contact_phone,
        type: action.payload.type,
      }
    },
  },
})

export const { newRowInvoice, newRowBill } = rowSetterSlice.actions

export const selectedRow = (state: RootState) => state.row

export default rowSetterSlice.reducer
