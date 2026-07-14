import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import i18n from "../i18n"
import { useTranslation } from "react-i18next"


function Navbar() {

  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { t } = useTranslation()
  const changeLanguage = (lang) => {
  i18n.changeLanguage(lang)
  localStorage.setItem("language", lang)
}


  useEffect(() => {

    const handleScroll = () => {

      setScrolled(window.scrollY > 50)

    }


    window.addEventListener("scroll", handleScroll)


    return () => {
      window.removeEventListener("scroll", handleScroll)
    }

  }, [])



  return (

    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>


      <div className="logo">


        <div className="brand-line">

          <span className="brand">
            CHILD
          </span>


          <span className="brand-small">
            & Co.
          </span>


        </div>


        <span className="tagline">
          Private Journeys in Champagne
        </span>


      </div>



      <div className={`menu ${open ? "open" : ""}`}>


        <Link to="#signature-experiences">
        {t("experiences")}
        </Link>


        <Link to="#discover">
        {t("region")}
        </Link>


        <Link to="/how-it-works">
        {t("howItWorks")}
        </Link>


        <Link to="/contact">
        {t("contact")}
        </Link>

        <div className="language-switcher">

  <button onClick={() => changeLanguage("en")}>
    ENG
  </button>

  <span>|</span>

  <button onClick={() => changeLanguage("fr")}>
    FRA
  </button>

</div>


      </div>



      <button
        className="hamburger"
        onClick={() => setOpen(!open)}
      >

        <span></span>
        <span></span>
        <span></span>

      </button>


    </nav>

  )

}


export default Navbar