import { useFormik } from 'formik'
import * as Yup from 'yup'
import { string } from 'yup'

const validationSchema = Yup.object().shape({
  email: string()
    .email('Please provide a valid email')
    .required('Email is required'),
  password: string()
    .matches(new RegExp(/(?=.*[a-z])/), 'Must contain lowercase a-z characters')
    .matches(new RegExp(/(?=.*[A-Z])/), 'Must contain uppercase A-Z characters')
    .matches(new RegExp(/(?=.*[0-9])/), 'Must contain at least one number')
    .matches(
      new RegExp(/(?=.*[!@#$%^&*])/),
      'Must contain at least one !@#$%^&* special character'
    )
    .min(8, 'Must be at least 8 characters long')
    .trim('Spaces are not allowed')
    .strict()
    .required('Password is required')
})

const objectFromArray = (fields: any[], key: string) => {
  const mappedProps = fields.map((field) => {
    if (key !== 'validate') {
      return [field.id, field[key]]
    }
    const validation = validationSchema[field.validate]
    return [field.id, field.required ? validation.required() : validation]
  })

  return Object.fromEntries(mappedProps)
}

function useLoginConfig (fields: any, customHandleSubmit: (values: any) => any) {
  const formik = useFormik({
    initialValues: objectFromArray(fields, 'initialValue'),
    onSubmit: async (values, { resetForm }) => {
      await customHandleSubmit(values)
    },
    validationSchema,
    enableReinitialize: true
  })

  return { ...formik }
}

export default useLoginConfig
