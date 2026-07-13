import { Link } from "react-router-dom"

import "../components/HowItWorks.css";


function HowItWorks() {


  const steps = [

    {
      number: "01",
      title: "First Conversation",
      text: "Every journey begins with a personal exchange. We take the time to understand your wishes, expectations and the experience you envision."
    },

    {
      number: "02",
      title: "Tailor-Made Design",
      text: "Based on your vision, we carefully curate experiences, partners and details that bring your private Champagne journey to life."
    },

    {
      number: "03",
      title: "Your Private Proposal",
      text: "Within 24 hours, we present a personalised proposal including carefully selected experiences and recommendations."
    },

    {
      number: "04",
      title: "Your Champagne Journey",
      text: "Once confirmed, every detail is coordinated before your arrival to ensure a seamless and unforgettable experience."
    }

  ]



  const values = [

    {
      title: "Authentic Access",
      text: "Through our local expertise and trusted relationships, we reveal the places, people and stories that make Champagne truly unique."
    },

    {
      title: "Time Efficiency",
      text: "We take care of the research, organisation and coordination, allowing you to fully enjoy the experience."
    },

    {
      title: "Personal Attention",
      text: "Every journey is designed around your expectations, your pace and the moments you wish to create."
    }

  ]



  return (

    <section className="how-page">



      {/* HERO */}


      <div className="how-hero">


        <span>
          Our Approach
        </span>


        <h1>
          A Seamless Journey,
          <br />
          Designed Around You
        </h1>


        <p>
          From your first conversation to your final departure,
          every detail is carefully curated to create an exceptional
          Champagne experience.
        </p>


        <Link to="/contact">

          Start Planning Your Journey

        </Link>


      </div>





      {/* PROCESS */}


      <section className="process-section">


        <div className="section-header">


          <span>
            The Process
          </span>


          <h2>
            From Vision To Experience
          </h2>


          <p>
            A personalised approach designed to transform your wishes
            into a unique Champagne journey.
          </p>


        </div>





        <div className="steps-grid">


          {steps.map((step,index)=>(


            <article 
              className="step-card"
              key={index}
            >


              <span>
                {step.number}
              </span>


              <h3>
                {step.title}
              </h3>


              <p>
                {step.text}
              </p>


            </article>


          ))}


        </div>


      </section>





      {/* SERVICE FEE */}



      <section className="fee-section">


        <div className="fee-content">


          <span>
            A Transparent Approach
          </span>


          <h2>
            Our Service & Coordination Fee
          </h2>



          <p>
            Our role is to design, organise and coordinate your
            Champagne journey. We are remunerated exclusively through
            a transparent coordination fee.
          </p>



          <div className="fee-box">


            <strong>
              8%
            </strong>


            <p>
              of the total value of your journey
            </p>


          </div>




          <p>
            Your personalised proposal includes the complete cost of
            all selected services. Each experience remains directly
            provided and paid to our carefully selected partners.
          </p>


        </div>


      </section>





      {/* VALUES */}



      <section className="values-section">


        <div className="section-header">


          <span>
            Beyond Reservations
          </span>


          <h2>
            More Than A Booking Service
          </h2>


        </div>





        <div className="values-grid">


          {values.map((value,index)=>(


            <article 
              className="value-card"
              key={index}
            >


              <h3>
                {value.title}
              </h3>


              <p>
                {value.text}
              </p>


            </article>


          ))}


        </div>


      </section>





      {/* FAQ */}



      <section className="faq-section">


        <div className="section-header">


          <span>
            Frequently Asked Questions
          </span>


          <h2>
            Everything You Need To Know
          </h2>


        </div>



        <div className="faq-list">


          <div>

            <h3>
              When should I contact you?
            </h3>

            <p>
              We recommend reaching out several weeks before your journey
              to allow us to carefully design every detail.
            </p>

          </div>



          <div>

            <h3>
              Do you organise last-minute experiences?
            </h3>

            <p>
              Depending on availability, we can sometimes accommodate
              shorter timelines.
            </p>

          </div>



          <div>

            <h3>
              How does payment work?
            </h3>

            <p>
              Your coordination fee is paid to Child & Co. All other
              services are paid directly to the selected providers.
            </p>

          </div>



        </div>


      </section>






      {/* FINAL CTA */}



      <section className="final-cta">


        <h2>
          Ready To Create Your Champagne Journey?
        </h2>


        <p>
          Share your vision with us and let us craft an experience
          designed entirely around you.
        </p>



        <Link to="/contact">

          Begin Your Journey

        </Link>


      </section>

<div className="back-home">

  <Link to="/">
    ← Back to Home
  </Link>

</div>


    </section>

  )

}


export default HowItWorks