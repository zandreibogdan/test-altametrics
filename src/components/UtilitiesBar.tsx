import { Box, List, ListItem, Avatar } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone"
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined"
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined"

const UtilitiesBar = () => {
  return (
    <Box
      sx={{ my: 4, paddingBottom: "25px" }}
      className="flex w-auto items-center justify-between border-b-2"
    >
      <List className="flex items-center">
        <ListItem>
          <MenuIcon />
        </ListItem>
      </List>
      <List className="flex items-center">
        <ListItem>
          <NotificationsNoneIcon />
        </ListItem>
        <ListItem>
          <SettingsOutlinedIcon />
        </ListItem>
        <ListItem>
          <LightModeOutlinedIcon />
        </ListItem>
        <Avatar alt="B" src="/static/images/avatar/1.jpg" />
      </List>
    </Box>
  )
}

export default UtilitiesBar
