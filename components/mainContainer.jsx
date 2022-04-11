import Footer from "../components/footer";
import Nav from "../components/nav";

export default function MainContainer({ children }) {
  return (
    <>
      <div>{children}</div>
      <Footer />
    </>
  );
}
