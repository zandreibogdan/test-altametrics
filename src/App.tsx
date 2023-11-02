import { CssBaseline } from "@mui/material"
import "./index.css"

import { Provider } from "react-redux"
import { store } from "./app/store"
import "./index.css"
import { ThemeProvider } from "@mui/material/styles"
import theme from "./theme"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import ErrorPage from "./error-page"
import { getBills, getInvoices } from "./api/lists"
import Bills from "./routes/Bills"
import Invoices from "./routes/Invoices"
import Root from "./Root"
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/bills",
        element: <Bills />,
        loader: async ({ request }) => {
          return getBills(request)
        },
      },
      {
        path: "/invoices",
        element: <Invoices />,
        loader: async ({ request }) => {
          return getInvoices(request)
        },
      },
    ],
  },
])

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <CssBaseline />
        <RouterProvider router={router} />
      </Provider>
    </ThemeProvider>
  )
}
