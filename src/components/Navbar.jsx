import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


function Navbar() {

  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)


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
          Experiences
        </Link>


        <Link to="#discover">
          The Region
        </Link>


        <Link to="/how-it-works">
          How It Works
        </Link>


        <Link to="/contact">
          Contact
        </Link>


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