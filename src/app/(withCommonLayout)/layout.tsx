import Footer from "@/components/shared/Footer";


const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container mx-auto">
      <main className="min-h-screen">
        {/* <Navbar/> */}
        <div className="min-h-screen">
        {children}
        </div>
        <Footer/>
      </main>
    </div>
  );
};

export default CommonLayout;
