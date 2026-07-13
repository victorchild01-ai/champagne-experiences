import { useRef, useState } from "react"


function WhyUs() {


const items = [
  {
    title: "Bespoke by Design",
    text: "Every journey begins with your desires, your rhythm and your vision. Each experience is crafted entirely around you."
  },
  {
    title: "Private Access",
    text: "From prestigious Champagne houses to hidden family estates, we reveal places and encounters beyond the ordinary."
  },
  {
    title: "Local Expertise",
    text: "A deep connection with Champagne, its vineyards, heritage and passionate people allows us to create truly authentic moments."
  },
  {
    title: "Seamless Service",
    text: "From your first conversation to your final departure, every detail is carefully designed and personally orchestrated."
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
The Art of Experiencing Champagne
</h2>

<div className="gold-line"></div>

<p className="why-description">
  More than a journey, a private invitation to discover the
  culture, heritage and hidden treasures of Champagne.
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
{item.title}
</h3>


<p>
{item.text}
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