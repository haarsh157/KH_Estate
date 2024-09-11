import Container_1 from "@/components/container/Container_1";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navigation/navbar"
import '@fortawesome/fontawesome-svg-core/styles.css';

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full relative">
      <div className="">
        <Navbar/>
        {/* <Container_1/> */}
      </div>
      <main className="child">{children}</main>
      <Footer/>
    </div>
  );
};

export default MainLayout;
