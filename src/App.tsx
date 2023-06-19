import { useState } from 'react'
import Banner from './components/Banner'
import Form from './components/Form'
import Team from './components/Team'
import { teams } from './config'
import { ICollaborator } from './shared/Interfaces/ICollaborator'

function App() {
  const [collaborators, setCollaborators] = useState<ICollaborator[]>([])

  const toNewCollaboratorAdded = (collaborator: ICollaborator) => {
    setCollaborators([...collaborators, collaborator])
  }

  return (
    <div className="App">
      <Banner address="/imagens/banner.png" text="O banner principal da página do Organo" />
      <Form
        teams={teams.map((item) => item.name)}
        onCollaboratorCreated={(collaborator) => toNewCollaboratorAdded(collaborator)}
      />

      {teams.map((item) => (
        <Team
          key={item.name}
          name={item.name}
          primary={item.primary}
          secondary={item.secondary}
          collaborators={collaborators.filter((collaborator) => collaborator.team === item.name)}
        />
      ))}
    </div>
  )
}

export default App
