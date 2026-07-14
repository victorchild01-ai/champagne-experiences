import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

import "../components/HowItWorks.css";


function HowItWorks() {

  const { t } = useTranslation()


  const steps = [

  {
    number: "01",
    title: t("step1Title"),
    text: t("step1Text")
  },

  {
    number: "02",
    title: t("step2Title"),
    text: t("step2Text")
  },

  {
    number: "03",
    title: t("step3Title"),
    text: t("step3Text")
  },

  {
    number: "04",
    title: t("step4Title"),
    text: t("step4Text")
  }

]



  const values = [

  {
    title: t("value1Title"),
    text: t("value1Text")
  },

  {
    title: t("value2Title"),
    text: t("value2Text")
  },

  {
    title: t("value3Title"),
    text: t("value3Text")
  }

]



  return (

    <section className="how-page">



      {/* HERO */}


      <div className="how-hero">


        <span>
        {t("ourApproach")}
        </span>


        <h1>
        {t("howHeroTitle")}
        </h1>


        <p>
        {t("howHeroText")}
        </p>


        <Link to="/contact">
        {t("startPlanning")}
        </Link>


      </div>





      {/* PROCESS */}


      <section className="process-section">


        <div className="section-header">


         <span>
        {t("process")}
        </span>

        <h2>
        {t("processTitle")}
        </h2>

        <p>
       {t("processText")}
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
          {t("transparentApproach")}
          </span>

          <h2>
          {t("feeTitle")}
          </h2>



          <p>
          {t("feeText")}
          </p>



          <div className="fee-box">


            <strong>
              8%
            </strong>


            <p>
            {t("feePercentage")}
            </p>


          </div>




          <p>
        {t("feeDetails")}
        </p>


        </div>


      </section>





      {/* VALUES */}



      <section className="values-section">


        <div className="section-header">


          <span>
          {t("beyondReservations")}
          </span>

          <h2>
          {t("moreThanBooking")}
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
          {t("faq")}
          </span>

          <h2>
          {t("faqTitle")}
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