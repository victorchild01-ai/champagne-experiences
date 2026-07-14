import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

import "../components/Contact.css"


function Contact() {

  const { t } = useTranslation()

  return (

    <section className="contact-page">


      <div className="contact-hero">

       <h1>
        {t("contactHeroTitle")}
        </h1>

      <p>
       {t("contactHeroText")}
      </p>

      </div>



      <div className="contact-container">



        <form className="contact-form">


          <h2>
  {t("yourDetails")}
</h2>


          <div className="double-input">

            <input
              type="text"
              placeholder={t("firstName")}
            />

            <input
              type="text"
              placeholder={t("lastName")}
            />

          </div>


          <input
            type="email"
            placeholder={t("email")}
          />


          <input
            type="text"
            placeholder={t("country")}
          />



          <h2>
 {t("yourJourney")}
</h2>


          <div className="double-input">

            <input
              type="date"
            />

            <input
              type="date"
            />

          </div>



          <div className="double-input">

            <input
              type="number"
              placeholder={t("guests")}
            />


            <select>

              <option>
 {t("budget")}
</option>

              <option>
 {t("budget1")}
</option>

<option>
 {t("budget2")}
</option>

<option>
 {t("budget3")}
</option>

<option>
 {t("budget4")}
</option>

            </select>

          </div>




          <h2>
 {t("yourInterests")}
</h2>



          <div className="interest-grid">


            <label>
              <input type="checkbox" />
              {t("interest1")}
            </label>


            <label>
              <input type="checkbox" />
              {t("interest2")}
            </label>


            <label>
              <input type="checkbox" />
              {t("interest3")}
            </label>


            <label>
              <input type="checkbox" />
              {t("interest4")}
            </label>


            <label>
              <input type="checkbox" />
              {t("interest5")}
            </label>


            <label>
              <input type="checkbox" />
              {t("interest6")}
            </label>


            <label>
              <input type="checkbox" />
              {t("interest7")}
            </label>


            <label>
              <input type="checkbox" />
              {t("interest8")}
            </label>


          </div>





          <h2>
 {t("tellUsMore")}
</h2>


          <textarea

            rows="7"

            placeholder={t("messagePlaceholder")}

          ></textarea>





          <button type="submit">

            {t("requestProposal")}

          </button>



        </form>





        <div className="contact-info">


          <h2>
 {t("craftedAroundYou")}
</h2>



          <p>
            {t("craftedText1")}
          </p>



          <p>
            {t("craftedText2")}
          </p>





          <div className="response-box">


            <h3>
 {t("commitment")}
</h3>


            <p>
              {t("commitmentText")}
            </p>


          </div>

          <Link 
          to="/how-it-works"
          className="how-link"
          >
         {t("discoverJourney")} →
          </Link>





          <div className="process-box">


            <h3>
 {t("process")}
</h3>


            <p>
              <strong>
{t("contactStep1Title")}
</strong>
              <br />
              {t("contactStep1Text")}
            </p>


            <p>
              <strong>
{t("contactStep2Title")}
</strong>
              <br />
              {t("contactStep2Text")}
            </p>


            <p>
              <strong>
{t("contactStep3Title")}
</strong>
              <br />
              {t("contactStep3Text")}
            </p>


          </div>





          <Link to="/">
            ← {t("backHome")}
          </Link>



        </div>



      </div>



    </section>

  )

}


export default Contact