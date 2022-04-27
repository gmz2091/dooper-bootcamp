import { ChangeEvent } from 'react'

interface Route {
  path: string
  label: string
}

export interface DrawerMenuProps {
  isOpen: boolean
  setClose: (isOpen: boolean) => void
  routes: Route[]
}

export interface CustomTheme {
  colors: {
    primary: string
    secondary: string
  }
  bgColor: {
    primary: string
    secondary: string
  }
}

export interface TextFieldsProps {
  name: string
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  type: string
  placeholder: string
  error?: boolean
  helperText?: string
  required?: boolean
  variant?: 'outlined' | 'standard'
}

export interface FieldsProps {
  id: string
  label: string
  initialValue: string
  placeholder: string
  validate: string
  required: boolean
  type: string
}
