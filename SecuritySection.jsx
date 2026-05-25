import { security } from '../assets';

export default function SecuritySection() {
  return (
    <section className="secondSectionContainer" id="features">
      <div>
        <img src={security} alt="Security shield illustration" />
      </div>
      <div className="secondSectionRight">
        <h2 className="secondSectionRightTitle">Your Security is our priority</h2>
        <h2 className="secondSectionRightTitleMobile">
          Your Security is <br />our priority
        </h2>
        <p className="secondSectionRightText">
          Piggyvest use the the highest level of security and it is secures by 256 bits SSL security <br /> ecryption to ensure that your information is completely protected from fraud
        </p>
        <p className="secondSectionRightTextMobile">
          Piggyvest use the the highest level of <br />security and it is secures by 256 bits <br />SSL security ecryption to ensure that <br />your information is completely <br />protected from fraud
        </p>
        <div className="secondSectionRightLearn">
          <a href="#features" className="secondSectionRightLearnText">Learn More &gt;</a>
        </div>
      </div>
    </section>
  );
}
