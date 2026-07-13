import { useEffect, useState } from "react"


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