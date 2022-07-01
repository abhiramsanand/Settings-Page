import React from 'react';
import logo from './logo.svg';
import './App.css';
import { AppShell, Center, Container, Divider, MantineProvider, Title, } from '@mantine/core';
import { NavbarMinimalColored } from './Components/Navbar/Navbar';
import { HeaderMiddle } from './Components/Header';
import { UserInfoIcons } from './Components/profile';
import Show from './Components/Show';
import Edit from './Components/Edit';


function App() {
  return (
    <div className="App">
      <MantineProvider theme={{ fontFamily: 'Sofia Pro' }} withGlobalStyles withNormalizeCSS>
        <AppShell
          navbar={<NavbarMinimalColored />}
          header={<HeaderMiddle />}>
          <Container>
            <Title order={3} pb={'lg'} align={"left"} mx={'lg'} pl='lg'>Settings</Title>
            <Center>
              <Divider style={{ width: '92%' }}></Divider>
            </Center>
            <UserInfoIcons avatar={logo} name={'Alok Das'} title={'Employee Profile'} phone={'+91 xxxxx xxxxx'} email={'abc@gmail.com'} />
            <Center>
              <Divider style={{ width: '92%' }}></Divider>
            </Center>
            <Show />
            <Center>
              <Divider style={{ width: '92%' }}></Divider>
            </Center>
            <Edit />
          </Container>
        </AppShell>
      </MantineProvider>
    </div>
  );
}

export default App;
