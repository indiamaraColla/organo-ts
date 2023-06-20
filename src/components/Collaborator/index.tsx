import { ICollaborator } from '../../shared/Interfaces/ICollaborator'
import './Collaborator.css'

const Collaborator = ({ name, image, position, backgroundColor }: ICollaborator) => {
  return (
    <div className="collaborator" data-testid="collaborator-list">
      <div className="header" style={{ backgroundColor: backgroundColor }} data-testid="collaborator-primary">
        <img src={image} alt={name} />
      </div>
      <div className="baseboard">
        <h4>{name}</h4> <h5>{position}</h5>
      </div>
    </div>
  )
}

export default Collaborator
