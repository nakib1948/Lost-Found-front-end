
import Footer from "@/Components/shared/Footer/Footer";
import Navbar from "@/Components/shared/Navbar/Navbar";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {

  return (
    <>
      <Navbar />
      <div className="min-h-screen">{children}</div>
      <Footer />
    </>
  );
};

export default CommonLayout;
