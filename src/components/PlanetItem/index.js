// Write your code here
import './index.css'

const PlanetItem = props => {
  const {eachPlanet} = props
  const {name, imageUrl, description} = eachPlanet
  return (
    <div className="planet-details-container">
      <img className="planet-img" src={imageUrl} alt={name} />
      <h3 className="name">{name}</h3>
      <p className="description">{description}</p>
    </div>
  )
}

export default PlanetItem
