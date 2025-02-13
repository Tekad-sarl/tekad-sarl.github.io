import { Text, Image, Center, Stack, Divider, Box } from "@mantine/core";

export function TeamCard({
  name,
  title,
  img,
  text,
}: {
  name: string;
  title: string;
  img: string;
  text: string;
}) {
  return (
    <Box p="lg" maw={350}>
      <Center bd={1}>
        {" "}
        <Image
          src={`./img/${img}`}
          radius="sm"
          h={200}
          w="auto"
          fit="contain"
        />
      </Center>
      <Divider color="green.5" size="xl" />
      <Stack mt="md" align="center">
        <Text fw={700}>{name}</Text>
        <Text fw={500}>{title}</Text>

        <Text size="sm" c="dimmed" ta="center">
          {text}
        </Text>
      </Stack>
    </Box>
  );
}
