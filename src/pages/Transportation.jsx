import { Link } from "react-router-dom"


function Transportation() {

  return (

    <section className="experience-page">

      <h1>
        Luxury Transportation
      </h1>

      <p>
        Travel through Champagne effortlessly with private drivers, premium vehicles and seamless transfers.
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


export default Transportation