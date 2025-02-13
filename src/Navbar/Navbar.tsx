import { UnstyledButton, Flex, StyleProp } from "@mantine/core";
import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";

export default function Navbar({
  direction = "row",
}: {
  direction?: StyleProp<React.CSSProperties["flexDirection"]>;
}) {
  return (
    <Flex
      className={classes.navbar}
      direction={direction}
      justify="center"
      align="center"
    >
      <Link to="#home">
        <UnstyledButton className={classes.link}>Home</UnstyledButton>
      </Link>
      <Link to="#service">
        <UnstyledButton className={classes.link}>Services</UnstyledButton>
      </Link>
      <Link to="#equipe">
        <UnstyledButton className={classes.link}>Equipe</UnstyledButton>
      </Link>
      <Link to="#contact">
        <UnstyledButton className={classes.link}>Contact</UnstyledButton>
      </Link>
    </Flex>
  );
}
