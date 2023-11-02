import { List, ListItem } from "@mui/material"
import React from "react"
import ChevronRightIcon from "@mui/icons-material/ChevronRight"
import { Link, useLocation } from "react-router-dom"

const Navbar = () => {
  const location = useLocation()
  return (
    <List className="flex flex-col gap-3  w-full h-6/12 justify-center">
      <ListItem
        component={"p"}
        sx={{ padding: 1 }}
        className="p-0 mb-5 text-gray-500 text-2xl"
      >
        <div>Menu</div>
      </ListItem>
      <Link to="/invoices" className="flex items-center">
        <ListItem
          component={"button"}
          className={`${
            location.pathname === "/invoices"
              ? "bg-purple-300 white text-white"
              : ""
          } mx-3 w-auto h-auto rounded`}
        >
          <ChevronRightIcon className="" />
          <div className="text-xl">Invoices</div>
        </ListItem>
      </Link>
      <Link to="/bills" className="flex items-center">
        <ListItem
          component={"button"}
          className={`${
            location.pathname === "/bills" ? "bg-purple-300 text-white" : ""
          } mx-3 w-auto h-auto rounded`}
        >
          <ChevronRightIcon className="" />
          <div className="text-xl">Bills</div>
        </ListItem>
      </Link>
    </List>
  )
}

export default Navbar
