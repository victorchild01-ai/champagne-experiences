import { Link } from "react-router-dom"


function Hero() {
  return (
    <section className="hero">

      <div className="hero-overlay">

        <h1>
          Discover Champagne Beyond the Ordinary
        </h1>

        <p>
          Exceptional moments, hidden places and unforgettable experiences
          crafted around you.
        </p>

        <Link to="/contact">
        <button>
        Plan Your Journey
        </button>
        </Link>

      </div>

   <div className="scroll">

  <div className="mouse">

    <div className="wheel"></div>

  </div>

  <span>SCROLL</span>

</div>

    </section>
  )
}

export default Hero