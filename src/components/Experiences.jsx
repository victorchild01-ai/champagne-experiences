import { Link } from "react-router-dom"


function Experiences() {

  const experiences = [
    {
      title: "Private Champagne Tours",
      text: "Discover the landscapes, villages and hidden stories of Champagne through a journey designed around your interests.",
      link: "/experiences/private-tours"
    },
    {
      title: "Champagne House Visits",
      text: "Enter the world of renowned Champagne houses through private cellar visits and exceptional tastings.",
      link: "/experiences/champagne-houses"
    },
    {
      title: "Michelin Gastronomy",
      text: "Experience Champagne through refined culinary encounters and memorable gastronomic pairings.",
      link: "/experiences/gastronomy"
    },
    {
      title: "Luxury Transportation",
      text: "Move through Champagne effortlessly with discreet private transfers and carefully selected vehicles.",
      link: "/experiences/transportation"
    },
    {
      title: "Romantic Champagne Escapes",
      text: "Celebrate life's most meaningful moments with intimate escapes crafted for two.",
      link: "/experiences/romantic-escapes"
    },
    {
      title: "Family Champagne Experiences",
      text: "Share the magic of Champagne through authentic experiences designed for every generation.",
      link: "/experiences/family-experiences"
    }
  ]


  return (

    <section 
    className="experiences"
    id="signature-experiences"
    >

      <h2>
        Signature Experiences
      </h2>

      <p className="intro">
        Curated journeys revealing the heritage, craftsmanship and elegance of Champagne.
      </p>


      <div className="experience-grid">

        {experiences.map((experience, index) => (

          <div 
            className="experience-card" 
            key={index}
          >

            <h3>
              {experience.title}
            </h3>

            <p>
              {experience.text}
            </p>


            <Link to={experience.link}>
              <button>
                Explore Journey
              </button>
            </Link>


          </div>

        ))}

      </div>


    </section>

  )
}


export default Experiences