import Box from '@mui/material/Box';
import Tavern from './components/Game/Tavern';
import LefSideMenu from './components/Layouts/LefSideMenu';
import TopPanel from './components/Layouts/TopPanel';
import { useAppDispatch } from './hooks';
import Hero from './models/Hero';
import { setHero } from './reducers/heroReducer';

function App() {
  const dispatch = useAppDispatch();
  dispatch(setHero({
    name: 'smile',
    hp: 8,
    maxHp: 10
  } as Hero))

  return (
    <>
      <TopPanel></TopPanel>
      <Box
        sx={{
          display: 'flex',
          // backgroundColor: 'primary.dark',//TODO THEME
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
