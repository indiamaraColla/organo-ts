import Collaborator from '../Collaborator'
import './Team.css'

interface ListProps {
  position: string
  name: string
  image: string
}

interface TeamProps {
  secondary: string
  primary: string
  name: string
  collaborators: ListProps[]
}
const Team = ({ collaborators, secondary, primary, name }: TeamProps) => {
  const css = { backgroundColor: secondary }

  return collaborators.length > 0 ? (
    <section className="team" style={css}>
      <h3 style={{ borderColor: primary }}>{name}</h3>
      <div className="collaborators">
        {collaborators.map((colaborador) => (
          <Collaborator
            backgroundColor={primary}
            key={colaborador.name}
            name={colaborador.name}
            position={colaborador.position}
            image={colaborador.image}
          />
        ))}
      </div>
    </section>
  ) : (
    <></>
  )
}

export default Team
