import { useEffect } from "react"
import { useLocation } from "react-router-dom"

function ScrollToHash() {

  const { pathname, hash } = useLocation()

  useEffect(() => {

    if (hash) {

      const element = document.getElementById(hash.replace("#", ""))

      if (element) {
        element.scrollIntoView()
      }

    } else {

      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant"
      })

    }

  }, [pathname, hash])


  return null

}

export default ScrollToHash