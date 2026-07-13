import { Link } from "react-router-dom"


function Experiences() {


  const experiences = [
    {
      title: "Private Champagne Tours",
      text: "Discover the landscapes, villages and hidden stories of Champagne through a journey designed entirely around your interests.",
      image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb",
      link: "/experiences/private-tours"
    },

    {
      title: "Champagne House Visits",
      text: "Enter the world of renowned Champagne houses through private cellar visits and exceptional tastings.",
      image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3",
      link: "/experiences/champagne-houses"
    },

    {
      title: "Michelin Gastronomy",
      text: "Experience Champagne through refined culinary encounters and memorable gastronomic pairings.",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0",
      link: "/experiences/gastronomy"
    },

    {
      title: "Luxury Transportation",
      text: "Move through Champagne effortlessly with discreet private transfers and carefully selected vehicles.",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
      link: "/experiences/transportation"
    },

    {
      title: "Romantic Champagne Escapes",
      text: "Celebrate life's most meaningful moments with intimate escapes crafted for two.",
      image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3",
      link: "/experiences/romantic-escapes"
    },

    {
      title: "Family Champagne Experiences",
      text: "Share the magic of Champagne through authentic experiences designed for every generation.",
      image: "https://images.unsplash.com/photo-1473973266408-ed4e27abdd47",
      link: "/experiences/family-experiences"
    }
  ]



  return (

    <section 
      className="experiences"
      id="signature-experiences"
    >


      <div className="experiences-header">


        <span>
          Our Expertise
        </span>


        <h2>
          Signature Experiences
        </h2>


        <p>
          Curated journeys revealing the heritage, craftsmanship and elegance of Champagne.
        </p>


      </div>



      <div className="experience-grid">


        {experiences.map((experience,index)=>(


          <article 
            className="experience-card"
            key={index}
          >


            <div className="experience-image">

              <img
                src={experience.image}
                alt={experience.title}
              />

            </div>



            <div className="experience-content">


              <h3>
                {experience.title}
              </h3>


              <p>
                {experience.text}
              </p>



              <Link to={experience.link}>

                Explore Journey →

              </Link>


            </div>


          </article>


        ))}


      </div>


    </section>

  )

}


export default Experiences