import { burgerIcon, logo } from '../assets';

const navLinks = ['About', 'Features', 'Pricing', 'Testimonials', 'Help'];

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="logoMerk">
        <img src={logo} alt="LaslesVPN logo" />
        <div className="navbarMerk">
          Lasles<span className="navbarVpnWord">VPN</span>
        </div>
        <button className="burgerIcon" type="button" aria-label="Open menu">
          <img src={burgerIcon} alt="" />
        </button>
      </div>

      <nav className="mainRoute" aria-label="Main navigation">
        {navLinks.map((link) => (
          <a href={`#${link.toLowerCase()}`} className="navbarRoute" key={link}>
            {link}
          </a>
        ))}
      </nav>

      <div className="sign">
        <button type="button">Sign In</button>
        <button type="button">Sign up</button>
      </div>
    </header>
  );
}
