import {
  backBlue,
  backGreen,
  backRed,
  protectBlue,
  protectGreen,
  secretBlue,
  secretRed,
} from '../assets';

const features = [
  {
    icon: protectBlue,
    title: 'Automated Savings',
    text: <>Build a dedicated saving on your <br />term automatically or manually</>,
    arrow: backBlue,
    label: 'Piggybank',
    textClass: 'featureTextOdd',
  },
  {
    icon: secretBlue,
    title: 'Fixed Savings',
    text: <>Lock money away for a fixed duration <br />with no access to it until maturity. it’s <br />like having a custom fixed deposit,</>,
    arrow: backBlue,
    label: 'Savelock',
    textClass: 'featureTextEven',
  },
  {
    icon: protectGreen,
    title: 'Good oriented-Savings',
    text: <>Build a dedicated saving on your <br />term automatically or manually</>,
    arrow: backGreen,
    label: 'Piggybank',
    textClass: 'featureTextOdd',
  },
  {
    icon: secretRed,
    title: 'Fixed Savings',
    text: <>Lock money away for a fixed duration <br />with no access to it until maturity. it’s <br />like having a custom fixed deposit,</>,
    arrow: backRed,
    label: 'Savelock',
    textClass: 'featureTextEven',
  },
];

function FeatureCard({ arrow, icon, label, text, textClass, title }) {
  return (
    <article className="feature">
      <img src={icon} alt="" height="41" width="43" />
      <h3 className="featureTitle">{title}</h3>
      <p className={textClass}>{text}</p>
      <div className="goFeature">
        <img src={arrow} alt="" />
        <p className="goFeatureText">{label}</p>
      </div>
    </article>
  );
}

export default function SavingsSection() {
  return (
    <section className="thirdSectionContainer" id="pricing">
      <div className="thirdMain">
        <h2 className="thirdMainTitle">
          4 Ways to build <br />your savings
        </h2>
        <p className="thirdMainText">
          Earn 5%-15% when you save with any <br />of these Piggyvest plans
        </p>
        <button className="buttonStartSaving" type="button">Start Saving</button>
        <button className="buttonStartSavingMobile" type="button">Start Saving</button>
      </div>
      {features.map((feature) => (
        <FeatureCard key={`${feature.title}-${feature.label}-${feature.arrow}`} {...feature} />
      ))}
    </section>
  );
}
