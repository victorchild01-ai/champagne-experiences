import { useEffect, useState } from "react"

import { Link } from "react-router-dom"


function Navbar() {

  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)


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



      <div className={`menu ${open ? "open" : ""}`}>

<a href="#signature-experiences">
  Experiences
</a>

<a href="/region">
  The Region
</a>

<a href="/how-it-works">
  How It Works
</a>

<a href="/contact">
  Contact
</a>

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