import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"
import EnhancedTable from "../components/EnhancedTable"
import { Await, useLoaderData } from "react-router-dom"

export default function Invoices() {
  const { data } = useLoaderData()
  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <Await
          resolve={data}
          errorElement={<div>Could not load invoices 😬</div>}
          children={(invoices) => (
            <EnhancedTable data={invoices.data} header={"Invoices"} />
          )}
        />
      </Paper>
    </Box>
  )
}
