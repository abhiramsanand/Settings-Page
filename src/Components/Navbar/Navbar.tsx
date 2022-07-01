import { createStyles, Navbar, Group } from "@mantine/core";
import { Article, Headset, Inbox, InfoCircle, LayoutDashboard, QuestionMark, Speakerphone, Stars, Timeline } from "tabler-icons-react";
import NavbarLink from "./NavbarLink";

const useNavbarStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor: theme.colors[theme.primaryColor][6],
  },
}));

export function NavbarMinimalColored() {
  const { classes } = useNavbarStyles();

  return (
    <Navbar height={750} width={{ base: 80 }} className={classes.navbar}>
      <Navbar.Section mt={10}>
        <Group direction="column" align="center" spacing={0}>
          <NavbarLink icon={LayoutDashboard} label="Dashboard" />
          <NavbarLink icon={Inbox} label="Inbox" />
          <NavbarLink icon={Timeline} label="Change account" />
        </Group>
      </Navbar.Section>
      <Navbar.Section mt={30}>
        <Group direction="column" align="center" spacing={0}>
          <NavbarLink icon={Stars} label="What`s New" />
          <NavbarLink icon={Speakerphone} label="Broadcasting" />
          <NavbarLink icon={Article} label="Blogs" />
        </Group>
      </Navbar.Section>
      <Navbar.Section mt={30}>
        <Group direction="column" align="center" spacing={0}>
          <NavbarLink icon={InfoCircle} label="About" />
          <NavbarLink icon={Headset} label="Support" />
          <NavbarLink icon={QuestionMark} label="FAQ" />
        </Group>
      </Navbar.Section>
    </Navbar>
  );
}