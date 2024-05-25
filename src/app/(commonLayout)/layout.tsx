import Navbar from "@/Components/shared/Navbar/Navbar";


const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="min-h-screen">{children}</div>
    </>
  );
};

export default CommonLayout;
