import { ActionIcon, Container, Group, Text } from "@mantine/core";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
} from "@tabler/icons-react";

export function Footer() {
  return (
    <footer style={{ backgroundColor: "black" }}>
      <Container p="md" color="black">
        <Group>
          <Text size="sm" c="dimmed">
            &copy; {new Date().getFullYear()} TekAD Sàrl. Tous droits réservés.
          </Text>
          <Group>
            <ActionIcon size="lg" component="a" href="#" target="_blank">
              <IconBrandGithub size="1.5rem" />
            </ActionIcon>
            <ActionIcon size="lg" component="a" href="#" target="_blank">
              <IconBrandLinkedin size="1.5rem" />
            </ActionIcon>
            <ActionIcon size="lg" component="a" href="#" target="_blank">
              <IconBrandTwitter size="1.5rem" />
            </ActionIcon>
          </Group>
        </Group>
      </Container>
    </footer>
  );
}
