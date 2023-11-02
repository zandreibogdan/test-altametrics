import { TableFooter, TablePagination, TableRow } from "@mui/material"
import React from "react"
import { Data } from "../types/interfaces"

interface Props {
  setPage: React.Dispatch<React.SetStateAction<number>>
  page: number
  setRowsPerPage: React.Dispatch<React.SetStateAction<number>>
  rowsPerPage: number
  data: Data[]
}

const EnhancedTableFooter = ({
  setPage,
  setRowsPerPage,
  rowsPerPage,
  page,
  data,
}: Props) => {
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }
  return (
    <TableFooter className="bg-slate-100">
      <TableRow>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
          colSpan={0}
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          SelectProps={{
            inputProps: {
              "aria-label": "rows per page",
            },
          }}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableRow>
    </TableFooter>
  )
}

export default EnhancedTableFooter
