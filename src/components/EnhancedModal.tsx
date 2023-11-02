import * as React from "react"
import Backdrop from "@mui/material/Backdrop"
import Box from "@mui/material/Box"
import Modal from "@mui/material/Modal"
import Fade from "@mui/material/Fade"
import Typography from "@mui/material/Typography"
import { Data } from "../types/interfaces"
import { Button, List, ListItem } from "@mui/material"

interface Props {
  open: boolean
  handleClose: () => void
  row: Data
}
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
}

export default function EnhancedModal({ open, handleClose, row }: Props) {
  // const [open, setOpen] = React.useState(false)
  // const handleOpen = () => setOpen(true)
  // const handleClose = () => setOpen(false)
  return (
    <>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <List>
              <ListItem style={{ borderBottom: "1px solid black" }}>
                <Typography
                  id="transition-modal-title"
                  variant="h5"
                  component="h1"
                >
                  Details about {row.contact_name}
                </Typography>
              </ListItem>
              <ListItem>
                <Typography id="transition-modal-description">
                  Email: {row.contact_email}
                </Typography>
              </ListItem>
              <ListItem>
                <Typography id="transition-modal-description">
                  Phone number: {row.contact_phone}
                </Typography>
              </ListItem>
              <ListItem>
                <Typography id="transition-modal-description">
                  Address: {row.contact_address}
                </Typography>
              </ListItem>
              <ListItem>
                <Typography id="transition-modal-description">
                  Amount: {row.amount_formatted}
                </Typography>
              </ListItem>
              <ListItem>
                <Typography id="transition-modal-description">
                  Type: {row.type}
                </Typography>
              </ListItem>
              <ListItem>
                <Button
                  variant="contained"
                  onClick={handleClose}
                  color={"primary"}
                  size="small"
                  style={{ marginLeft: "auto" }}
                >
                  Close
                </Button>
              </ListItem>
            </List>
          </Box>
        </Fade>
      </Modal>
    </>
  )
}
