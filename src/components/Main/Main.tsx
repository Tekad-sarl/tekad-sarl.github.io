import { AppShell, Burger, Group, Image } from "@mantine/core";
import { useDisclosure, useWindowScroll } from "@mantine/hooks";
import { ReactElement, useEffect, useState } from "react";
import Navbar from "@/Navbar/Navbar";

export default function Main({ child }: { child: ReactElement }) {
  const [opened, { toggle }] = useDisclosure();
  const [scroll] = useWindowScroll();
  const [backgroundColor, setBackgroundColor] = useState<string>("none");

  useEffect(() => {
    if (scroll.y > 180) {
      setBackgroundColor("black");
    } else {
      setBackgroundColor("none");
    }
  }, [scroll.y, setBackgroundColor]);
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { desktop: true, mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header bg={backgroundColor} withBorder={false}>
        <Group h="100%" px="md">
          <Burger
            color="white"
            opened={opened}
            onClick={toggle}
            hiddenFrom="sm"
            size="sm"
          />
          <Image src="./img/LOGO_blanc.svg" p="sm" height={50} />
          <Group justify="space-between" style={{ flex: 1 }} visibleFrom="sm">
            <Navbar />
          </Group>
        </Group>
      </AppShell.Header>

      {/* Burger Menu */}
      <AppShell.Navbar bg="black" withBorder={false} onClick={toggle}>
        <Navbar direction="column" />
      </AppShell.Navbar>

      <AppShell.Main p="0">{child}</AppShell.Main>
    </AppShell>
  );
}
