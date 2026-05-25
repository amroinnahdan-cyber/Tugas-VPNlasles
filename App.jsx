import Navbar from './components/Navbar.jsx';
import HeroSection from './components/HeroSection.jsx';
import SecuritySection from './components/SecuritySection.jsx';
import SavingsSection from './components/SavingsSection.jsx';
import InvestmentSection from './components/InvestmentSection.jsx';
import SaverSection from './components/SaverSection.jsx';
import CustomersSection from './components/CustomersSection.jsx';
import PartnersSection from './components/PartnersSection.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <SecuritySection />
        <SavingsSection />
        <InvestmentSection />
        <SaverSection />
        <CustomersSection />
        <PartnersSection />
      </main>
      <Footer />
    </>
  );
}
