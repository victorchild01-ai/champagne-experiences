import { Link } from "react-router-dom"

import { useTranslation } from "react-i18next";


function Hero() {

  const { t } = useTranslation();

  return (
    <section className="hero">

      <div className="hero-overlay">

        <h1>
          {t("heroTitle")}
        </h1>

        <p>
          {t("heroSubtitle")}
        </p>

        <Link to="/contact">
        <button>
        {t("heroButton")}
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