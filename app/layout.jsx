import Footer from "@components/ui/footer/Footer";
import Header from "@components/ui/header/Header";
import Context from "@context/Context";
import "@styles/global.css";
export const metadata = {
  title: "creamCar",
  decription: "welcome to creamy car",
};
export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
       <Context>
       <Header />
        {children}
        <Footer />
       </Context>
      </body>
    </html>
  );
}
