import { handphone } from '../assets';

export default function InvestmentSection() {
  return (
    <section className="fourthSectionContainer">
      <div className="fourthSectionLeft">
        <img src={handphone} alt="Mobile phone investment app preview" className="handphoneImage" />
      </div>
      <div className="fourthSectionRight">
        <p className="upto25">Up to 25% returned</p>
        <h2 className="fourthSectionTitle">
          Access investment <br /> opportunities
        </h2>
        <p className="fourthSectionText">
          Invest securely and confidentialy on the go. Grow your <br />money confidently by investing on pre-vetted investment <br />opportunities
        </p>
        <p className="fourthSectionTextMobile">
          Invest securely and confidentialy on the go. <br />Grow your money confidently by investing on <br />pre-vetted investment opportunities
        </p>
        <p className="fourthLearnMore">Learn more about investment &gt;</p>
      </div>
    </section>
  );
}
