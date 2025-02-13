import { Text, Image, Card, Group } from "@mantine/core";

export function ServiceCard({
  title,
  img,
  text,
}: {
  title: string;
  img: string;
  text: string;
}) {
  return (
    <Card maw={350} shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image src={`./img/${img}`} height={160} />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{title}</Text>
      </Group>

      <Text size="sm" c="dimmed">
        {text}
      </Text>
    </Card>
  );
}
