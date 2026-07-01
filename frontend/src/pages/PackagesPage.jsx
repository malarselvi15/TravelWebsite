import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import PackageHero from "../components/packages/PackageHero";
import PackageList from "../components/packages/PackageList";
import Packages from "../components/Packages";

function PackagesPage() {
  return (
    <>
      <Navbar />

      <PackageHero />

      <PackageList />

      <Packages />

      <Footer />
    </>
  );
}

export default PackagesPage;