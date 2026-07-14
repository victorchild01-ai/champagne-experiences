import { useTranslation } from "react-i18next";


function DiscoverChampagne() {

  const { t } = useTranslation();

  return (
    <section className="discover">

      <div className="discover-container">

        <div className="discover-image">
          <img
            src="/images/champagne-vineyard.webp"
            alt="Champagne vineyard"
          />
        </div>


        <div className="discover-content">

          <span>
          {t("philosophy")}
          </span>

          <h2>
          {t("philosophyTitle")}
          </h2>


          <p>
          {t("philosophyText1")}
          </p>

          <p>
        {t("philosophyText2")}
        </p>


          <button>
          {t("philosophyButton")}
          </button>

        </div>

      </div>

    </section>
  )
}

export default DiscoverChampagne