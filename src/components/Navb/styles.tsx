import { AppBar, Typography, styled } from '@mui/material'

export const Text = styled(Typography)`
  color: ${(props) => props.theme.palette.primary.light};
  align-items: center;
  justify-content: center;
  font-size: ${(props) => props.theme.typography.h4.fontSize};
`
export const Navbar = styled(AppBar)`
  background-color: #2b3445;
`
