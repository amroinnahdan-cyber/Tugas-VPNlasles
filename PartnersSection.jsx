import { amazon, discord, netflix, reddit, spotify } from '../assets';

const partners = [
  { src: netflix, alt: 'Netflix' },
  { src: reddit, alt: 'Reddit' },
  { src: amazon, alt: 'Amazon' },
  { src: discord, alt: 'Discord' },
  { src: spotify, alt: 'Spotify' },
];

export default function PartnersSection() {
  return (
    <section aria-label="Featured partners">
      <div className="seventhSectionContainer">
        {partners.map((partner) => (
          <div key={partner.alt}>
            <img src={partner.src} alt={partner.alt} />
          </div>
        ))}
      </div>
      <div className="seventhSectionContainerMobile">
        <div className="upperImages">
          <div><img src={netflix} alt="Netflix" height="50" width="91" /></div>
          <div><img src={reddit} alt="Reddit" height="23" width="71" /></div>
        </div>
        <div className="lowerImages">
          <div><img src={amazon} alt="Amazon" height="30" width="96" /></div>
          <div><img src={discord} alt="Discord" height="32" width="95" /></div>
          <div><img src={spotify} alt="Spotify" height="26" width="87" /></div>
        </div>
      </div>
    </section>
  );
}
