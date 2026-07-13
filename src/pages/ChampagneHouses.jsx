import { Link } from "react-router-dom"


function ChampagneHouses() {

  return (

    <section className="experience-page">

      <h1>
        Champagne House Visits
      </h1>

      <p>
        Enter the world of prestigious Champagne houses through private cellar visits, exceptional tastings and exclusive discoveries.
      </p>


      <div>

        <Link to="/#experiences">
        Back to Experiences
        </Link>


        <Link to="/contact">
          Plan Your Journey
        </Link>

      </div>


    </section>

  )

}


export default ChampagneHouses