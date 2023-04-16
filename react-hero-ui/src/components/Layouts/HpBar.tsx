import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import React from 'react';
import Hero from '../../models/Hero';

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