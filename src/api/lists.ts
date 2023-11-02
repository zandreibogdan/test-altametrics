import axios from "axios"
import { encode } from "base-64"

export const getInvoices = (request: Request) => {
  return axios(
    `${import.meta.env.VITE_AKAUNTING_URL}/documents?search=type:${
      import.meta.env.VITE_AKAUNTING_TYPE_INVOICE
    }&page=${import.meta.env.VITE_AKAUNTING_PAGE}&limit=${
      import.meta.env.VITE_AKAUNTING_LIMIT
    }`,
    {
      headers: {
        Authorization: `Basic ${encode("cghiurea@altametrics.com:pass")}`,
      },
      signal: request.signal,
    },
  ).catch(function (error) {
    console.log(error.toJSON())
  })
}

export const getBills = (request: Request) => {
  return axios(
    `${import.meta.env.VITE_AKAUNTING_URL}/documents?search=type:${
      import.meta.env.VITE_AKAUNTING_TYPE_BILL
    }&page=${import.meta.env.VITE_AKAUNTING_PAGE}&limit=${
      import.meta.env.VITE_AKAUNTING_LIMIT
    }`,
    {
      headers: {
        Authorization: `Basic ${encode("cghiurea@altametrics.com:pass")}`,
      },
      signal: request.signal,
    },
  ).catch(function (error) {
    console.log(error.toJSON())
  })
}
