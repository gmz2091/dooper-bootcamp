import { useState } from 'react'
import Icon from '../Icon'
import { IconWrapper, InputField, InputWrapper } from './styles'

const TextFields = ({ field, formik }: any) => {
  const [type, setType] = useState(false)
  const { values, errors, touched, handleChange, handleBlur } = formik
  return (
    <>
      <InputWrapper>
        <InputField
          className={
            touched[field.id] && !!errors[field.id]
              ? 'classes.input__error'
              : 'classes.input'
          }
          id={field.id}
          label={field.label}
          error={touched[field.id] && !!errors[field.id]}
          type={touched[field.id] && type ? 'text' : field.type}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder={field.placeholder}
          value={values[field.id]}
          helperText={(touched[field.id] && errors[field.id]) ?? null}
        />
        <IconWrapper
          onClick={() => {
            setType(!type)
          }}
        >
          {field.icon && (
            <Icon
              id={field.iconName}
              error={touched[field.id] && !!errors[field.id]}
            />
          )}
        </IconWrapper>
      </InputWrapper>
    </>
  )
}

export default TextFields
