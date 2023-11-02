import { render, screen } from "@testing-library/react"
import Invoices from "../routes/Invoices"
import { RouterProvider, createMemoryRouter } from "react-router-dom"
import EnhancedModal from "../components/EnhancedModal"
import EnhancedTable from "../components/EnhancedTable"
import EnhancedTableHead from "../components/EnhancedTableHead"
import { MouseEvent, ChangeEvent } from "react"
import { Data } from "../types/interfaces"

// {
//   "id": 2092,
//   "company_id": 1,
//   "type": "invoice",
//   "document_number": "INV-01091",
//   "order_number": null,
//   "status": "cancelled",
//   "issued_at": "2023-12-27T23:18:05+00:00",
//   "due_at": "2023-12-29T23:18:05+00:00",
//   "amount": 0,
//   "amount_formatted": "$0.00",
//   "category_id": 519,
//   "currency_code": "USD",
//   "currency_rate": 1,
//   "contact_id": 288,
//   "contact_name": "Mortimer Toy",

//   "contact_tax_number": "531302322",
//   "contact_phone": "+1.830.514.0987",
//   "contact_address": "984 Heathcote Skyway\nJadynchester, ME 62293-9028",
//   "contact_city": null,
//   "contact_zip_code": null,
//   "contact_state": null,
//   "contact_country": null,

test("shows detail of invoice/bill", async () => {
  render(
    <EnhancedModal
      open={true}
      handleClose={function (): void {
        throw new Error("Function not implemented.")
      }}
      row={{
        id: 2092,
        due_at: "2023-12-29T23:18:05+00:00",
        contact_name: "Mortimer Toy",
        contact_email: "ankunding.okey@yahoo.com",
        amount_formatted: "$0.00",
        contact_phone: "+1.830.514.0987",
        contact_address: "984 Heathcote Skyway\nJadynchester, ME 62293-9028",
        type: "invoice",
      }}
    />,
  )
  await screen.findByRole("heading")
  expect(screen.getByText("Type: invoice")).toBeInTheDocument()
})

test("shows invoice table", async () => {
  const { getByText } = render(
    <EnhancedTableHead
      numSelected={0}
      onRequestSort={() => {}}
      onSelectAllClick={function (): void {
        throw new Error("Function not implemented.")
      }}
      order={"desc"}
      orderBy={""}
      rowCount={0}
      header={"Invoice"}
    />,
  )

  expect(screen.getByText("Email")).toBeInTheDocument()
  expect(screen.getByText("Date")).toBeInTheDocument()
  expect(screen.getByText("Full Name")).toBeInTheDocument()
  expect(screen.getByText("Amount")).toBeInTheDocument()
})
