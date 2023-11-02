import React, { Suspense } from "react"
import { createBrowserRouter } from "react-router-dom"
import ErrorPage from "./error-page"
import axios from "axios"
import { App, Bills, Invoices } from "./main"

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={"Loading..."}>
        <App />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/bills",
        element: <Bills />,
      },
      {
        path: "/invoices",
        element: <Invoices />,
        loader: async ({ request }) => {
          return await axios(
            "https://ak.contentcubed.com/api/documents?search=type:invoice&page=1&limit=20",
            {
              headers: {
                Authorization: "Basic Y2doaXVyZWFAYWx0YW1ldHJpY3MuY29tOnBhc3M=",
              },
              signal: request.signal,
            },
          )
        },
      },
    ],
  },
])
