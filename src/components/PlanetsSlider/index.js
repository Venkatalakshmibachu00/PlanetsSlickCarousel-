// Write your code here
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import PlanetItem from '../PlanetItem'

import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props
  const sliderSettings = {dots: false, slidesToShow: 1, slidesToScroll: 1}
  return (
    <div className="planets-slider-container" data-testid="planets">
      <h1 className="title">PLANETS</h1>
      <Slider {...sliderSettings}>
        {planetsList.map(eachPlanet => (
          <PlanetItem key={eachPlanet.id} eachPlanet={eachPlanet} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider
