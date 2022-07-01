import { TextInput, Text, Group } from '@mantine/core';
import { Pencil } from 'tabler-icons-react';

function Edit() {
  return (

    <>
      <Group py={'lg'} mx={'lg'} pl='lg' >
        <Text color={'#020A23'} size="lg" weight={500} align="left">Edit Personal Details</Text>
        <Pencil height={16.910400390625} width={16.811044692993164} color={'#020A23'} />
      </Group>
      <Group mx={'lg'} pl='lg' >
        <TextInput
          placeholder="Alok"
          label={
            <Text size="xs" weight={300} color="dimmed" align={'left'}>First Name</Text>
          }
          radius="md" />
        <TextInput
          placeholder="Das"
          label={
            <Text size="xs" weight={300} color="dimmed" align={'left'}>Last Name</Text>
          }
          radius="md" />
      </Group>
      <Group py={'lg'} mx={'lg'} pl='lg' >
        <TextInput
          placeholder="India"
          label={
            <Text size="xs" weight={300} color="dimmed" align={'left'}>Country</Text>
          }
          radius="md" />

        <TextInput
          placeholder="594460"
          label={
            <Text size="xs" weight={300} color="dimmed" align={'left'}>ZIP</Text>
          }
          radius="md" />
      </Group>
    </>

  );
}

export default Edit;

