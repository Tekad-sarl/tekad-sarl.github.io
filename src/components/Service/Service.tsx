import { Flex, Center } from "@mantine/core";
import { ServiceCard } from "../ServiceCard/ServiceCard";

export function Service() {
  return (
    <>
      <Center>
        <h1 className="main-title about-h2">SERVICES</h1>
      </Center>
      <Flex p="md" gap="xl" justify="center" wrap="wrap">
        <ServiceCard
          title="Développement"
          img="card1.png"
          text="Réalisation de projet de développement logiciel"
        />
        <ServiceCard
          title="Intégration IA"
          img="card2.png"
          text="chatbots connectés à vos données et agents IA capables d'intéragir avec vos systèmes internes."
        />
        <ServiceCard
          title="Conseil stratégique"
          img="card3.png"
          text="Profitez de notre expertise pour intégrer l'IA dans vos projets et maximiser votre ROI."
        />
      </Flex>
    </>
  );
}
