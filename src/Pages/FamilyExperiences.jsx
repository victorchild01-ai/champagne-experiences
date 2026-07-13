import { Link } from "react-router-dom"


function FamilyExperiences() {

  return (

    <section className="experience-page">

      <h1>
        Family Champagne Experiences
      </h1>

      <p>
        Discover Champagne through authentic activities and tailor-made experiences designed for every generation.
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


export default FamilyExperiences