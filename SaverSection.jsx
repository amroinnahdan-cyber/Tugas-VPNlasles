import { backWhite, computer } from '../assets';

export default function SaverSection() {
  return (
    <section className="fifthSectionContainer" id="testimonials">
      <div className="fifthSectionLeft">
        <h2 className="fifthSectionLeftTitle">
          Meet the saver <br /> of the month!
        </h2>
        <h2 className="fifthSectionLeftTitleMobile">
          Meet the saver of <br />the month!
        </h2>
        <p className="fifthSectionLeftText">
          Every month, we shine spotlight on one saver,asking <br />them questions about their saving culture and how the <br />product is specifically hellping them how they spend <br />and save for future responsibilities
        </p>
        <p className="fifthSectionLeftTextMobile">
          Every month, we shine spotlight on <br />one saver,asking them questions <br />about their saving culture and how the <br />product is specifically hellping them <br />how they spend and save for future <br />responsibilities
        </p>
        <div className="fifthSectionLeftMore">
          <img src={backWhite} alt="" className="fifthSectionLeftBack" />
          <p className="fifthSectionLeftMeet">Meet Tohbad</p>
        </div>
      </div>
      <div className="fifthSectionRight">
        <img src={computer} alt="Saver of the month on a computer" className="fifthSectionRightImage" />
      </div>
    </section>
  );
}
