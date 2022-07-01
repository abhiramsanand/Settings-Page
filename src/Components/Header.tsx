import React from 'react';
import { Header, Group, ActionIcon, Container } from '@mantine/core';
import { ExclamationMark, Copy, Bell, Man } from 'tabler-icons-react';

export function HeaderMiddle() {
  return (
    <Header height={40} mb={0}>
      <Container>
        <Group spacing={0} position="right" noWrap>
          <ActionIcon size="lg">
            <ExclamationMark size={18} color="#0746AA" />
          </ActionIcon>
          <ActionIcon size="lg">
            <Copy size={18} color="#0746AA" />
          </ActionIcon>
          <ActionIcon size="lg">
            <Bell size={18} color="#0746AA" />
          </ActionIcon>
          <ActionIcon size="lg">
            <Man size={18} color="#0746AA" />
          </ActionIcon>
        </Group>
      </Container>
    </Header>
  );
}