import { useEffect, useState } from "react"


function Navbar() {

  const [scrolled, setScrolled] = useState(false)


  useEffect(() => {

    const handleScroll = () => {

      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }

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



      <div className="menu">


        <a href="#">
          Experiences
        </a>


        <a href="#">
          Destinations
        </a>


        <a href="#">
          Journal
        </a>


        <a href="#">
          About
        </a>


        <a href="#">
          Contact
        </a>


      </div>


    </nav>

  )
}


export default Navbar