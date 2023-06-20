import Collaborator from '../Collaborator'
import './Team.css'
import { TeamProps } from './type'

const Team = ({ collaborators, secondary, primary, name }: TeamProps) => {
  const css = { backgroundColor: secondary }

  return collaborators.length > 0 ? (
    <section className="team" style={css} data-testid="team">
      <h3 style={{ borderColor: primary }} data-testid="primary">
        {name}
      </h3>
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
