import { useState } from 'react'
import { ICollaborator } from '../../shared/Interfaces/ICollaborator'
import Button from '../Button'
import DropdownList from '../DropdownList'
import TextField from '../TextField'
import './Form.css'

interface FormProps {
  onCollaboratorCreated: (collaborator: ICollaborator) => void
  teams: string[]
}
interface FormState {
  name: string
  position: string
  image: string
  team: string
}

const Form = ({ onCollaboratorCreated, teams }: FormProps) => {
  const [formState, setFormState] = useState<FormState>({
    name: '',
    position: '',
    image: '',
    team: '',
  })

  const onSave = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (formState.name && formState.position && formState.team) {
      onCollaboratorCreated(formState)
      setFormState({
        name: '',
        position: '',
        image: '',
        team: '',
      })
    }
  }

  const handleChange = (fieldName: keyof FormState, value: string) => {
    setFormState((prevState) => ({
      ...prevState,
      [fieldName]: value,
    }))
  }

  return (
    <section className="form-group">
      <form onSubmit={onSave} data-testid="form">
        <h2>Preencha os dados para criar o card do collaborator</h2>
        <TextField
          required={true}
          label="Nome"
          placeholder="Digite seu nome"
          value={formState.name}
          toAlter={(value) => handleChange('name', value)}
        />
        <TextField
          required={true}
          label="Cargo"
          placeholder="Digite seu cargo"
          value={formState.position}
          toAlter={(value) => handleChange('position', value)}
        />
        <TextField
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          value={formState.image}
          toAlter={(value) => handleChange('image', value)}
        />
        <DropdownList
          required={true}
          label="Time"
          itens={teams}
          value={formState.team}
          toAlter={(value) => handleChange('team', value)}
        />
        <Button>Criar Card</Button>
      </form>
    </section>
  )
}

export default Form
