import { Box, TextField, styled } from '@mui/material'

export const InputWrapper = styled(Box)({
  position: 'relative',
  width: '80%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: 'auto'
})

export const InputField = styled(TextField)`
  position: relative;
  width: 100%;
  color: #000;
  font-size: 1rem;
  font-weight: 400;
  margin: 8px 0;

  &:focus {
    border-color: #000;
    box-shadow: none;
  }
`

export const IconWrapper = styled(Box)({
  position: 'absolute',
  right: '12px',
  transform: 'translateY(-50%)',
  top: '50%',
  cursor: 'pointer',
  transition: 'all 0.3s ease-in-out',
  opacity: '0.5',
  '&:hover': {
    opacity: '1'
  }
})
