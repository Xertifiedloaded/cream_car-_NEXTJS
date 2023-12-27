import Footer from "@components/ui/footer/Footer";
import Header from "@components/ui/header/Header";
import "@styles/global.css";
export const metadata = {
  title: "creamCar",
  decription: "welcome to creamy car",
};
export default function Layout({ children }) {
    // const Location = useRouter();
    // const homePage = location.pa
  return (
    <html lang="en">
      <body>
        <div style={{ paddingBottom: "50" }}>
          <Header />
        </div>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
