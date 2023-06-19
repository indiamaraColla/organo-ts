import './TextField.css'

interface TextFieldProps {
  toAlter: (value: string) => void
  placeholder: string
  label: string
  value: string
  required?: boolean
}
const TextField = ({ toAlter, placeholder, label, value, required = false }: TextFieldProps) => {
  const placeholderModificada = `${placeholder}...`

  const toTyped = (event: React.ChangeEvent<HTMLInputElement>) => {
    toAlter(event.target.value)
  }

  return (
    <div className="text-field">
      <label>{label}</label>
      <input value={value} onChange={toTyped} required={required} placeholder={placeholderModificada} />
    </div>
  )
}

export default TextField
