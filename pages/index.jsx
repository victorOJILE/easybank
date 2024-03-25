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
    </>
  );
}
