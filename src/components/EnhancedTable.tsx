import * as React from "react"
import Box from "@mui/material/Box"
import Table from "@mui/material/Table"
import TableContainer from "@mui/material/TableContainer"
import Paper from "@mui/material/Paper"
import { Order, getComparator } from "../utils/getComparator"
import { Data } from "../types/interfaces"
import EnhancedTableHead from "./EnhancedTableHead"
import EnhancedTableBody from "./EnhancedTableBody"
import EnhancedTableFooter from "./EnhancedTableFooter"
import { EnhancedTableToolbar } from "./EnhancedTableToolbar"

interface Props {
  data: Data[]
  header: string
}

export default function EnhancedTable({ data, header }: Props) {
  const [order, setOrder] = React.useState<Order>("asc")
  const [orderBy, setOrderBy] = React.useState<keyof Data>("due_at")
  const [selected, setSelected] = React.useState<number[]>([])
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(5)
  function stableSort<T>(
    array: readonly T[],
    comparator: (a: T, b: T) => number,
  ) {
    const stabilizedThis = array.map((el, index) => [el, index] as [T, number])
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0])
      if (order !== 0) {
        return order
      }
      return a[1] - b[1]
    })
    return stabilizedThis.map((el) => el[0])
  }
  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof Data,
  ) => {
    const isAsc = orderBy === property && order === "asc"
    setOrder(isAsc ? "desc" : "asc")
    setOrderBy(property)
  }

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = data.map((n) => n.id as number)
      setSelected(newSelected)
      return
    }
    setSelected([])
  }

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0

  const visibleRows = React.useMemo(
    () =>
      // @ts-ignore
      stableSort(data, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage,
      ),
    [order, orderBy, page, rowsPerPage],
  )

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <EnhancedTableToolbar numSelected={selected.length} header={header} />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={"medium"}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={data.length}
              header={header}
            />
            <EnhancedTableBody
              selected={selected}
              setSelected={setSelected}
              // @ts-ignore
              visibleRows={visibleRows}
              emptyRows={emptyRows}
            />
            <EnhancedTableFooter
              page={page}
              setPage={setPage}
              rowsPerPage={rowsPerPage}
              setRowsPerPage={setRowsPerPage}
              data={data}
            />
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  )
}
