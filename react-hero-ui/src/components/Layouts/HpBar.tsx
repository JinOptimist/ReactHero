import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import MobileStepper from '@mui/material/MobileStepper';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Hero from '../../models/Hero';
import store from '../../reducers/store';

const HpBar: React.FC<{
    hero: Hero;
}> = ({hero}) => {
    let hpPercent = 100 * hero.hp / hero.maxHp;

    return (
        <>
            <Box sx={{
                width: 100
            }}>
                HP {hero.hp} / {hero.maxHp}:
                <LinearProgress color="success" variant="determinate" value={hpPercent} />
            </Box>
        </>
    );
}
export default HpBar;