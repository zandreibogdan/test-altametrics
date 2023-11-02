import { Box, Paper } from "@mui/material"
import EnhancedTable from "../components/EnhancedTable"
import { Await, useLoaderData } from "react-router-dom"

export default function Bills() {
  const { data } = useLoaderData()

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <Await
          resolve={data}
          errorElement={<div>Could not load Bills 😬</div>}
          children={(bills) => (
            <EnhancedTable data={bills.data} header={"Bills"} />
          )}
        />
      </Paper>
    </Box>
  )
}
