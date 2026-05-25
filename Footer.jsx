import { fb, Instagram, logo, tw } from '../assets';

const footerColumns = [
  {
    title: 'Product',
    items: ['Download', 'Pricing', 'Locations', 'Server', 'Countries', 'Blog'],
  },
  {
    title: 'Engage',
    items: ['LaslesVPN ?', 'FAQ', 'Tutorials', 'About Us', 'Privacy Policy', 'Terms of Service'],
  },
  {
    title: 'Earn Money',
    items: ['Affiliate', 'Become Partner'],
  },
];

function BrandDescription({ mobile = false }) {
  return (
    <div className={mobile ? 'footerDescriptionMobile' : 'footerDescription'}>
      <div className="footerPart">
        <img src={logo} alt="LaslesVPN logo" className="footerLogo" />
        <h5 className="footerMerk">
          Lasles<span className="footerVpnWord">VPN</span>
        </h5>
      </div>
      <div>
        <p className="footerText">
          <span className="footerLaslesVpn">LaslesVPN</span> is a private virtual network that <br />has unique features and has high security.
        </p>
      </div>
      <div className="sosmedLogo" aria-label="Social media links">
        <img src={fb} alt="Facebook" />
        <img src={tw} alt="Twitter" />
        <img src={Instagram} alt="Instagram" />
      </div>
      <div className="copyright">&copy;2020LaslesVPN</div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="eighthSectionContainer" id="help">
      <BrandDescription />
      {footerColumns.map((column) => (
        <div className="footerDescription" key={column.title}>
          <p className="footerTitle">{column.title}</p>
          {column.items.map((item) => (
            <p className="footerDetail" key={item}>{item}</p>
          ))}
        </div>
      ))}
      <BrandDescription mobile />
    </footer>
  );
}
