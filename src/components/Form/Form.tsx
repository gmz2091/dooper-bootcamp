import { Typography } from '@mui/material'
import { fieldsLogin } from '@src/fields'
import useLoginConfig from '@src/hook/useLogin'
import Button from '../Button'
import TextFields from '../common'
import { Form as FormValues } from './styles'

interface Props {
  title: string
}
function Form ({ title }: Props) {
  const handleSubmit = async (values: any) => {
    alert(JSON.stringify(values, null, 2))
  }
  const formConfig = useLoginConfig(fieldsLogin, handleSubmit)
  return (
    <FormValues onSubmit={formConfig.handleSubmit}>
      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>
      {fieldsLogin.map((field: any) => (
        <TextFields key={field.id} field={field} formik={formConfig} />
      ))}
      <Button title="Login" type="submit" />
    </FormValues>
  )
}

export default Form
