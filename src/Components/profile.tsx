import React from 'react';
import { createStyles, Avatar, Text, Group, Box } from '@mantine/core';


const useStyles = createStyles((theme) => ({
  icon: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5],
  },

  name: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },
}));

interface UserInfoIconsProps {
  avatar: string;
  name: string;
  title: string;
  phone: string;
  email: string;
}

export function UserInfoIcons({ avatar, name, title, phone, email }: UserInfoIconsProps) {
  const { classes } = useStyles();
  return (
    <div>
      <Group noWrap py={'lg'} mx={'lg'} pl='lg'>
        <Box sx={{ borderColor: 'black', borderStyle: 'solid', borderWidth: 1 }}>
          <Avatar src={avatar} size={94} radius="md" />
        </Box>
        <div>
          <Text size="lg" weight={500} className={classes.name} align={'left'}>
            {name}
          </Text>
          <Group noWrap spacing={-10} mt={-7}>
            <Text size="xs" color="dimmed" align={'left'}>
              {title}
            </Text>
          </Group>

          <Group noWrap spacing={10} mt={5}>
            <Text size="xs" weight={500}>
              Phone: {phone}
            </Text>
          </Group>

          <Group noWrap spacing={10} mt={3}>
            <Text size="xs" weight={500}>
              Email: {email}
            </Text>
          </Group>
        </div>
      </Group>
    </div>
  );
}