import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChooseEasybank from "@/components/ChooseEasybank";
import Articles from "@/components/Articles";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <ChooseEasybank />
        <Articles />
      </main>
      <Footer />
      <div style={{ height: "0px", opacity: "0", position: "absolute" }}>
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="#">Victor Ojile</a>.
      </div>
    </>
  );
}
