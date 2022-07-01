import React from 'react';
import { Group, Space, Switch, Text } from '@mantine/core';

function Show() {
  return (
    <>
      <Group py={'lg'} mx={'lg'} pl='lg' >
        <Text size="lg" weight={500} pr={'lg'}>Show contact details on CV</Text>
        <Switch
          color="dark"
        />
      </Group>
      <Text size='xs' align='left' mx={'lg'} pl='lg'>Info Info Info Info Info Info Info Info Info Info Info Info Info Info Info Info Info Info Info Info </Text>
      <Text size='xs' align='left' mx={'lg'} pl='lg'>Info Info Info Info Info </Text>
      <Space h="md" />
      <Space h="xs" />
    </>
  );
}

export default Show;