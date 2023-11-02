import { Order } from "../utils/getComparator"

export interface Data {
  id: number | string
  due_at: string
  contact_name: string
  contact_email: string
  amount_formatted: string
  contact_phone?: string
  contact_address?: string
  type?: string
}

export interface HeadCell {
  disablePadding: boolean
  id: keyof Data
  label: string
  numeric: boolean
}
export interface EnhancedTableProps {
  numSelected: number
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof Data,
  ) => void
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void
  order: Order
  orderBy: string
  rowCount: number
  header: string
}
