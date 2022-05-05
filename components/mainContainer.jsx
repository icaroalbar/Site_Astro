import Footer from "../components/footer";

export default function MainContainer({ children }) {
  return (
    <>
      <div>{children}</div>
      <Footer />
    </>
  );
}