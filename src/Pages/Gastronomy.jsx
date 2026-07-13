import { Link } from "react-router-dom"


function Gastronomy() {

  return (

    <section className="experience-page">

      <h1>
        Michelin Gastronomy
      </h1>

      <p>
        Experience Champagne through refined culinary encounters, exceptional restaurants and unforgettable pairings.
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


export default Gastronomy