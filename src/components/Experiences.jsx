import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"


function Experiences() {

  const { t } = useTranslation()


  const experiences = [
  {
    title: t("privateToursTitle"),
    text: t("privateToursText"),
    image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb",
    link: "/experiences/private-tours"
  },

  {
    title: t("champagneHousesTitle"),
    text: t("champagneHousesText"),
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3",
    link: "/experiences/champagne-houses"
  },

  {
    title: t("gastronomyTitle"),
    text: t("gastronomyText"),
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0",
    link: "/experiences/gastronomy"
  },

  {
    title: t("transportationTitle"),
    text: t("transportationText"),
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
    link: "/experiences/transportation"
  },

  {
    title: t("romanticEscapesTitle"),
    text: t("romanticEscapesText"),
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3",
    link: "/experiences/romantic-escapes"
  },

  {
    title: t("familyExperiencesTitle"),
    text: t("familyExperiencesText"),
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
        {t("expertise")}
        </span>

        <h2>
        {t("signatureExperiences")}
        </h2>

        <p>
        {t("experiencesDescription")}
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