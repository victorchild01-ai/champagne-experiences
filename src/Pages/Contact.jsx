import { Link } from "react-router-dom"

import "../components/Contact.css"


function Contact() {

  return (

    <section className="contact-page">


      <div className="contact-hero">

        <h1>
          Plan Your Private Champagne Journey
        </h1>

        <p>
          Every exceptional experience begins with a conversation.
          Share your vision with us, and we will carefully craft
          a Champagne journey designed entirely around you.
        </p>

      </div>



      <div className="contact-container">



        <form className="contact-form">


          <h2>
            Your Details
          </h2>


          <div className="double-input">

            <input
              type="text"
              placeholder="First Name"
            />

            <input
              type="text"
              placeholder="Last Name"
            />

          </div>


          <input
            type="email"
            placeholder="Email Address"
          />


          <input
            type="text"
            placeholder="Country of Residence"
          />



          <h2>
            Your Journey
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
              placeholder="Number of Guests"
            />


            <select>

              <option>
                Approximate Budget
              </option>

              <option>
                Under €1,000 per person
              </option>

              <option>
                €1,000 - €3,000 per person
              </option>

              <option>
                €3,000 - €5,000 per person
              </option>

              <option>
                €5,000+ per person
              </option>

            </select>

          </div>




          <h2>
            Your Interests
          </h2>



          <div className="interest-grid">


            <label>
              <input type="checkbox" />
              Private Champagne Houses
            </label>


            <label>
              <input type="checkbox" />
              Family Producers
            </label>


            <label>
              <input type="checkbox" />
              Michelin Gastronomy
            </label>


            <label>
              <input type="checkbox" />
              Luxury Accommodation
            </label>


            <label>
              <input type="checkbox" />
              Private Transportation
            </label>


            <label>
              <input type="checkbox" />
              Vineyard Experiences
            </label>


            <label>
              <input type="checkbox" />
              Cultural Discoveries
            </label>


            <label>
              <input type="checkbox" />
              Romantic Experiences
            </label>


          </div>





          <h2>
            Tell Us More
          </h2>


          <textarea

            rows="7"

            placeholder="Tell us about your expectations, special occasions, preferences or anything you would like us to consider..."

          ></textarea>





          <button type="submit">

            Request Your Private Proposal

          </button>



        </form>





        <div className="contact-info">


          <h2>
            A Journey Crafted Around You
          </h2>



          <p>
            Every request is personally reviewed to create an
            experience reflecting your interests, your pace
            and your expectations.
          </p>



          <p>
            From prestigious Champagne houses to hidden family
            estates, exceptional gastronomy and unforgettable
            moments, every detail is thoughtfully curated.
          </p>





          <div className="response-box">


            <h3>
              Our Commitment
            </h3>


            <p>
              Within 24 hours, our team will review your request
              and begin designing the first ideas for your private
              Champagne experience.
            </p>


          </div>

          <Link 
          to="/how-it-works"
          className="how-link"
          >
         Discover How Your Journey Is Crafted →
          </Link>





          <div className="process-box">


            <h3>
              The Process
            </h3>


            <p>
              <strong>01 — Share your vision</strong>
              <br />
              Tell us about your expectations and preferences.
            </p>


            <p>
              <strong>02 — Receive your proposal</strong>
              <br />
              We create a tailored experience around your wishes.
            </p>


            <p>
              <strong>03 — Enjoy your journey</strong>
              <br />
              Every detail is coordinated before your arrival.
            </p>


          </div>





          <Link to="/">
            ← Back to Home
          </Link>



        </div>



      </div>



    </section>

  )

}


export default Contact