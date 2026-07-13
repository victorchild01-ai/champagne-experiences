import { Link } from "react-router-dom"


function RomanticEscapes() {

  return (

    <section className="experience-page">

      <h1>
        Romantic Champagne Escapes
      </h1>

      <p>
        Create unforgettable memories through intimate Champagne experiences designed for proposals, anniversaries and special moments.
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


export default RomanticEscapes