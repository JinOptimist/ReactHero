import Box from '@mui/material/Box';
import React from 'react';
import { useAppSelector } from '../../hooks';
import HpBar from './HpBar';

const TopPanel: React.FC<{}> = () => {
    const hero = useAppSelector(x => x.currentHero);
    return (
        <>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <Box>LOGO</Box>
                <Box>{hero.name}</Box>
                <HpBar hero={hero}></HpBar>
            </Box>
        </>
    );
}
export default TopPanel;