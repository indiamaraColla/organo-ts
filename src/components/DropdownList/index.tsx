import './DropdownList.css'

interface ListProps {
  toAlter: (value: string) => void
  label: string
  value: string
  required?: boolean
  itens: string[]
}

const DropdownList = ({ toAlter, label, value, itens, required = false }: ListProps) => {
  return (
    <div className="dropdown-list">
      <label htmlFor={label}>{label}</label>
      <select
        onChange={(evento) => toAlter(evento.target.value)}
        required={required}
        value={value}
        data-testid={label}
        id={label}
      >
        <option value=""></option>
        {itens.map((item) => {
          return <option key={item}>{item}</option>
        })}
      </select>
    </div>
  )
}

export default DropdownList
