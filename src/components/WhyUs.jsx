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


  return (

    <section className="why">


      <div className="why-intro">

        <h2>
          The Art of Experiencing Champagne
        </h2>

<div className="gold-line"></div>

        <p>
          More than a journey, a private invitation to discover the
          culture, heritage and hidden treasures of Champagne.
        </p>

      </div>



      <div className="why-grid">


        {items.map((item, index) => (

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


    </section>

  )
}


export default WhyUs