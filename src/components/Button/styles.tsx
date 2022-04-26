import { Button, styled } from '@mui/material'

export const Btn = styled(Button)({
  width: '80%',
  margin: '1rem 0',
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  padding: '6px 12px',
  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: '#029ab9',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#037990',
    borderColor: '#029ab9',
    boxShadow: 'none'
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#036b80'
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)'
  }
})
