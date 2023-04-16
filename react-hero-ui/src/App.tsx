import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Tavern from './components/Game/Tavern';
import LefSideMenu from './components/Layouts/LefSideMenu';
import TopPanel from './components/Layouts/TopPanel';
import Hero from './models/Hero';

function App() {
  return (
    <>
      <TopPanel></TopPanel>
      <Box
        sx={{
          display: 'flex',
          // backgroundColor: 'primary.dark',
          // '&:hover': {
          //   backgroundColor: 'primary.main',
          // },
        }}
      >
        <LefSideMenu></LefSideMenu>
        <Tavern></Tavern>
      </Box>

    </>
  );
}

export default App;
