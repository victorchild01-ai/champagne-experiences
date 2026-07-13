import { Link } from "react-router-dom"

import "../components/Contact.css"

function Contact() {

  return (

    <section className="contact-page">

      <div className="contact-hero">

        <h1>
          Plan Your Champagne Journey
        </h1>

        <p>
          Every experience begins with a conversation.
          Tell us about your wishes and let us craft a bespoke
          Champagne journey designed exclusively for you.
        </p>

      </div>


      <div className="contact-container">

        <form className="contact-form">

          <h2>Your Details</h2>

          <input
            type="text"
            placeholder="Full Name"
          />

          <input
            type="email"
            placeholder="Email Address"
          />

          <input
            type="tel"
            placeholder="Phone Number (Optional)"
          />


          <h2>Your Experience</h2>

          <select>

            <option>
              Select an Experience
            </option>

            <option>
              Private Champagne Tours
            </option>

            <option>
              Champagne House Visits
            </option>

            <option>
              Michelin Gastronomy
            </option>

            <option>
              Luxury Transportation
            </option>

            <option>
              Romantic Champagne Escapes
            </option>

            <option>
              Family Champagne Experiences
            </option>

            <option>
              Bespoke Experience
            </option>

          </select>


          <div className="double-input">

            <input
              type="date"
            />

            <input
              type="number"
              placeholder="Guests"
            />

          </div>


          <textarea
            rows="7"
            placeholder="Tell us about your ideal Champagne experience, your interests, any special occasion or specific wishes..."
          ></textarea>


          <button type="submit">
            Submit Your Request
          </button>

        </form>


        <div className="contact-info">

          <h2>
            A Journey Crafted Around You
          </h2>

          <p>
            Every request is personally reviewed to create an
            experience that reflects your interests, your pace
            and your expectations.
          </p>

          <p>
            Whether you dream of discovering prestigious
            Champagne houses, hidden family estates, Michelin-starred
            gastronomy or celebrating a special occasion, every
            detail is thoughtfully curated.
          </p>

          <div className="response-box">

            <h3>
              Our Commitment
            </h3>

            <p>
              We aim to reply within 24 hours with a personalised proposal.
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