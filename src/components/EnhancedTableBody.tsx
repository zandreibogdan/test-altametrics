import { Checkbox, TableBody, TableCell, TableRow } from "@mui/material"
import moment from "moment"
import React, { useState } from "react"
import { Data } from "../types/interfaces"
import EnhancedModal from "./EnhancedModal"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import {
  newRowBill,
  newRowInvoice,
  selectedRow,
} from "../features/rowSetter/rowSetterSlice"
import { useLocation } from "react-router"

interface Props {
  visibleRows: Data[]
  selected: number[]
  setSelected: React.Dispatch<React.SetStateAction<number[]>>
  emptyRows: number
  dense?: boolean
}

const EnhancedTableBody = ({
  visibleRows,
  selected,
  setSelected,
  emptyRows,
  dense,
}: Props) => {
  const isSelected = (id: number) => selected.indexOf(id) !== -1
  const location = useLocation()

  const theRow = useAppSelector(selectedRow)
  const dispatch = useAppDispatch()
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const handleClick = (
    event: React.MouseEvent<unknown>,
    id: number,
    row: Data,
  ) => {
    const selectedIndex = selected.indexOf(id)
    let newSelected: number[] = []

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id)
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1))
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1))
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      )
    }
    // setSelected(newSelected)
    // setTheRow(row)
    if (location.pathname === "/invoice") {
      dispatch(newRowInvoice(row))
    } else {
      dispatch(newRowBill(row))
    }
  }

  return (
    <TableBody>
      {visibleRows.map((row, index) => {
        const isItemSelected = isSelected(row.id as number)
        const labelId = `enhanced-table-checkbox-${index}`
        return (
          <TableRow
            hover
            onClick={(event) => {
              handleClick(event, row.id as number, row)
              handleOpen()
            }}
            data-testid="invoice"
            role="checkbox"
            aria-checked={isItemSelected}
            tabIndex={-1}
            key={row.id}
            selected={isItemSelected}
            sx={{ cursor: "pointer" }}
          >
            <TableCell padding="checkbox">
              <Checkbox
                color="primary"
                checked={isItemSelected}
                inputProps={{
                  "aria-labelledby": labelId,
                }}
              />
            </TableCell>
            <TableCell component="th" id={labelId} scope="row" padding="none">
              {moment(row.due_at).format("DD/MM/YY")}
            </TableCell>
            <TableCell align="right">{row.contact_email}</TableCell>
            <TableCell align="right">{row.contact_name}</TableCell>
            <TableCell align="right">{row.amount_formatted}</TableCell>
          </TableRow>
        )
      })}
      {emptyRows > 0 && (
        <TableRow
          style={{
            height: (dense ? 33 : 53) * emptyRows,
          }}
        >
          <TableCell colSpan={6} />
        </TableRow>
      )}
      <EnhancedModal open={open} handleClose={handleClose} row={theRow} />
    </TableBody>
  )
}

export default EnhancedTableBody
