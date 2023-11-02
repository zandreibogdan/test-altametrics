import Container from "@mui/material/Container"
import Navbar from "./Navbar"
import { Outlet } from "react-router"
import { Grid } from "@mui/material"
import UtilitiesBar from "./components/UtilitiesBar"
import Box from "@mui/material/Box"

export default function Root() {
  return (
    <Box className={"w-screen h-screen"}>
      <Grid className={"w-screen h-screen"} container>
        <Grid xs={2} item={true} className={"w-full bg-purple-100"}>
          <Navbar />
        </Grid>
        <Grid xs={10} item={true}>
          <Container>
            <Box sx={{ my: 4 }}>
              <UtilitiesBar />
              <Outlet />
            </Box>
          </Container>
        </Grid>
      </Grid>
    </Box>
  )
}
