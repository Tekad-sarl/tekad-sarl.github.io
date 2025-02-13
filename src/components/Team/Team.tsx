import { Flex, Text, Stack } from "@mantine/core";
import { TeamCard } from "../TeamCard/TeamCard";

export function Team() {
  return (
    <>
      <Stack align="center">
        <h1 className="main-title about-h2">EQUIPE</h1>
        <Text>Nos experts à votre service</Text>
      </Stack>
      <Flex p="md" gap="md" align="center" justify="center">
        <TeamCard
          title="Senior Full Stack Software Engineer"
          img="team_anthony.jpeg"
          name="Anthony Durussel"
          text="Ayant obtenu un master en systèmes de communication à l'EPFL, Anthony cumule plus de 15 ans d'expérience dans le développement. Passionné par l'intelligence artificielle, il perfectionne son expertise chaque jour en concevant des solutions innovantes."
        />
      </Flex>
    </>
  );
}
