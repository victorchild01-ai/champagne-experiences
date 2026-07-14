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

      <div className="page-back-home">

  <Link to="/">
    ← {t("backHome")}
  </Link>

</div>



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
  {t("faq1Question")}
</h3>

<p>
  {t("faq1Answer")}
</p>

          </div>



          <div>

            <h3>
  {t("faq2Question")}
</h3>

<p>
  {t("faq2Answer")}
</p>

          </div>



          <div>

            <h3>
  {t("faq3Question")}
</h3>

<p>
  {t("faq3Answer")}
</p>

          </div>



        </div>


      </section>






      {/* FINAL CTA */}



      <section className="final-cta">


        <h2>
  {t("ctaTitle")}
</h2>

<p>
  {t("ctaText")}
</p>


<Link to="/contact">

  {t("ctaButton")}

</Link>


      </section>

<div className="back-home">

  <Link to="/">
  ← {t("backHome")}
</Link>

</div>


    </section>

  )

}


export default HowItWorks