import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { Team } from "@/components/Team/Team";
import { Service } from "@/components/Service/Service";
import ScrollToHashElement from "@/ScrollToHashElement";

export function HomePage() {
  return (
    <>
      <ScrollToHashElement />
      <div id="home">
        <Header />
      </div>
      <div id="service" style={{ scrollMarginTop: "60px" }}>
        <Service />
      </div>
      <div id="equipe" style={{ scrollMarginTop: "60px" }}>
        <Team />
      </div>
      <div id="contact" style={{ scrollMarginTop: "60px" }}>
        <Footer />
      </div>
    </>
  );
}
