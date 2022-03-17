import { useChain } from "react-moralis"
import { useState } from "react"
import { shortenIfAddress, shortenTransactionHash } from "@usedapp/core"
import ExternalLinkIcon from "@heroicons/react/solid/ExternalLinkIcon"
import Moralis from "moralis"
import Link from "next/link"
import { Table, TablePagination, TableRow, TableHead, TableContainer, TableCell, TableBody } from "@mui/material"
import Paper from "@mui/material/Paper"

const TransactionsTable = ({ transactions, rowProps, ...props }) => {
  const { chain } = useChain()
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  const rows = transactions.map((el) => {
    const date = new Date(el.block_timestamp).toLocaleDateString("uk")
    return {
      date: date,
      from: el.from_address,
      to: el.to_address,
      hash: el.hash || el.transaction_hash,
      value: el.value,
    }
  })
  return (
    <Paper className='container mx-auto max-w-[70rem] overflow-hidden rounded-lg'>
      <TableContainer className='styled-scrollbar h-[37rem]  bg-secondary-800'>
        <Table stickyHeader aria-label='Transactions Table'>
          <TableHead>
            <TableRow>
              <TableCell className='bg-secondary-700 text-white'>Date</TableCell>
              <TableCell className='bg-secondary-700 text-white'>From</TableCell>
              <TableCell className='bg-secondary-700 text-white'>To</TableCell>
              <TableCell className='bg-secondary-700 text-white'>Tx Hash</TableCell>
              <TableCell className='bg-secondary-700 text-white'>Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(({ hash, from, to, value, date }) => (
              <TableRow key={hash} className='bg-secondary-700 text-white odd:bg-secondary-800'>
                <TableCell className=' text-white'>{date}</TableCell>
                <TableCell className='text-white'>
                  <Link href={`/user/${from}`}>
                    <a className='inline-flex hover:text-secondary-100 '>
                      {shortenIfAddress(from)} <ExternalLinkIcon className='h-5 w-5' />
                    </a>
                  </Link>
                </TableCell>
                <TableCell className=' text-white '>
                  {to ? (
                    <Link href={`/user/${to}`}>
                      <a className='inline-flex hover:text-secondary-100'>
                        {shortenIfAddress(to) || "null"} <ExternalLinkIcon className='h-5 w-5' />
                      </a>
                    </Link>
                  ) : (
                    "Null address"
                  )}
                </TableCell>
                <TableCell className=' text-white '>
                  <a
                    href={`${chain?.blockExplorerUrl}tx/${hash}`}
                    target='_blank'
                    rel='noreferrer'
                    className='inline-flex hover:text-secondary-100'>
                    {shortenTransactionHash(hash) || "null"}
                    <ExternalLinkIcon className='h-5 w-5' />
                  </a>
                </TableCell>
                <TableCell className=' text-white '>{Moralis.Units.FromWei(value)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        className='bg-secondary-500 text-white'
        rowsPerPageOptions={[10, 25, 100]}
        component='div'
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  )
}

export default TransactionsTable
