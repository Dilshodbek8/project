import Footer from "../Footer";
import Navbar from "../Navbar";
import Header from "../header";

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
