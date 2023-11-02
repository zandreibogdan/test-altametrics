import { Box, Button } from "@mui/material"
import { Link, useRouteError } from "react-router-dom"
type ErrorResponse = {
  data: any
  status: number
  statusText: string
  message?: string
}

const errorCheck = (error: any): error is ErrorResponse => {
  return "data" in error && "status" in error && "statusText" in error
}
export default function ErrorPage() {
  const error = useRouteError()

  if (errorCheck(error)) {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100vw",
        }}
      >
        <h1>Oops! Page not found</h1>
        <p>Sorry the route you are looking for does not exist.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
        <Link to="/">
          <Button color={"primary"}>Return Home</Button>
        </Link>
      </Box>
    )
  } else {
    return <></>
  }
}
