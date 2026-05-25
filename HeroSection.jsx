import { appleStore, mainImage, playStore } from '../assets';

function DownloadButtons() {
  return (
    <div className="buttonDownloadGroup">
      <button className="buttonDownload" type="button">
        <img src={appleStore} alt="Apple Store icon" />
        <span className="buttonDownloadText">Get on Iphone</span>
      </button>
      <button className="buttonDownload" type="button">
        <img src={playStore} alt="Play Store icon" />
        <span className="buttonDownloadText">Get on Android</span>
      </button>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="mainSection" id="about">
      <div className="mainSectionLeft">
        <h1 className="mainSectionTitle">
          The Best Way <br /> To Save &amp; Invest
        </h1>
        <p className="mainSectionText">
          Piggyvest help over 3 million customer achieve their financial <br /> goal by helping them save and invest with ease
        </p>
        <button className="buttonCreateAccount" type="button">Create Free Account</button>
        <DownloadButtons />
      </div>

      <div>
        <img src={mainImage} alt="Illustration of LaslesVPN app dashboard" className="mainImage" />
      </div>

      <div className="mainSectionMobile">
        <h1 className="mainSectionTitle">
          The Best Way <br /> To Save &amp; Invest
        </h1>
        <p className="mainSectionText">
          Piggyvest help over 3 million customer <br />achieve their financial goal by helping <br />them save and invest with ease
        </p>
        <button className="buttonGetStarted" type="button">Get Started</button>
        <DownloadButtons />
      </div>
    </section>
  );
}
