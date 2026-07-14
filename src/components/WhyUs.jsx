import { useRef, useState } from "react"
import { useTranslation } from "react-i18next";


function WhyUs() {

const { t } = useTranslation();


const items = [
  {
    title: "bespokeTitle",
    text: "bespokeText"
  },
  {
    title: "accessTitle",
    text: "accessText"
  },
  {
    title: "expertiseTitle",
    text: "expertiseText"
  },
  {
    title: "serviceTitle",
    text: "serviceText"
  }
]


const sliderRef = useRef(null)

const [current, setCurrent] = useState(1)



const handleScroll = () => {

  const slider = sliderRef.current

  if (!slider) return


  const index = Math.round(
    slider.scrollLeft / slider.children[0].offsetWidth
  ) + 1


  setCurrent(index)

}



return (

<section className="why">


<div className="why-intro">

<h2>
{t("whyTitle")}
</h2>

<div className="gold-line"></div>

<p className="why-description">
  {t("whyDescription")}
</p>

</div>



<div 
className="why-grid"
ref={sliderRef}
onScroll={handleScroll}
>


{items.map((item,index)=>(

<div className="card" key={index}>


<h3>
{t(item.title)}
</h3>

<p>
{t(item.text)}
</p>


</div>

))}


</div>



<div className="why-counter">

{String(current).padStart(2,"0")} / 04

</div>



</section>

)

}


export default WhyUs