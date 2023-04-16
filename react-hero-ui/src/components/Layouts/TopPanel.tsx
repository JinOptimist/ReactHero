import Box from '@mui/material/Box';
import React, { useState } from 'react';
import { useAppSelector } from '../../hooks';
import Hero from '../../models/Hero';
import store, { RootState } from '../../reducers/store';
import HpBar from './HpBar';

const TopPanel: React.FC<{}> = () => {
    const [hero, setHero] = useState(store.getState().currentHero)

    store.subscribe(() => {
        //setHero(useAppSelector(x => x.currentHero));
        setHero(store.getState().currentHero);
    })

    return (
        <>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <Box>LOGO</Box>
                <Box>{hero.name} {hero.hp}</Box>
                <HpBar hero={hero}></HpBar>
            </Box>
        </>
    );
}
export default TopPanel;