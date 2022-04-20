import Head from 'next/head'
import { FC } from 'react'
import { Box } from '@mui/material'
import { Navbar } from '../Navb'

interface LayoutProps {
  title?: string
}

export const Layout: FC<LayoutProps> = ({
  title = 'Dooper Bootcamp',
  children
}) => {
  return (
    <Box sx={{ flexFlow: 1 }}>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      <Box padding={5}>{children}</Box>
    </Box>
  )
}
