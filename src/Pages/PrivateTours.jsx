import { Link } from "react-router-dom";


function PrivateTours() {

  return (

    <section className="experience-page">

      <h1>
        Private Champagne Tours
      </h1>

      <p>
        Discover the vineyards, villages and hidden stories of Champagne through a private journey designed around your interests.
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

  );

}


export default PrivateTours;