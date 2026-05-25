import { appleStore, member, playStore } from '../assets';

export default function CustomersSection() {
  return (
    <section className="sixthSectionContainer">
      <div className="sixthSectionLeft">
        <img src={member} alt="LaslesVPN customers" className="memberImage" />
      </div>
      <div className="sixthSectionRight">
        <h2 className="sixthSectionRightTitle">3 Million+ customers</h2>
        <p className="sixthSectionRightText">
          Since launching in 2016, over 3,000,000 people have <br />used Piggyvest to manage their money better,avoid <br />over-spending and be more accountable
        </p>
        <p className="sixthSectionRightTextMobile">
          Since launching in 2016, over 3,000,000 <br />people have used Piggyvest to manage <br />their money better,avoid over-spending <br />and be more accountable
        </p>
        <button className="buttonStartSaving" type="button">Start Saving</button>
        <div className="buttonDownloadGroup">
          <button className="buttonGetStarted" type="button">Get Started</button>
          <button className="buttonDownload" type="button">
            <img src={appleStore} alt="Apple Store icon" />
            <span>Get on Iphone</span>
          </button>
          <button className="buttonDownload" type="button">
            <img src={playStore} alt="Play Store icon" />
            <span>Get on Android</span>
          </button>
        </div>
      </div>
    </section>
  );
}
