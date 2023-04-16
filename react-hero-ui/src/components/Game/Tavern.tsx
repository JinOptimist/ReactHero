import Box from '@mui/material/Box';
import { useAppDispatch } from '../../hooks';
import { healIsHealing, heroUnderAttack } from '../../reducers/heroReducer';

function Tavern() {
    const name = 'Pink sisters';
    const dispatch = useAppDispatch()

    const hitTheHero = () => {
        dispatch(heroUnderAttack(1))
    }
    const healTheHero = () => {
        dispatch(healIsHealing(1))
    }

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            flex: 1
        }}>
            Tavern: {name}.
            <button onClick={hitTheHero}>Fights</button>
            <button onClick={healTheHero}>Drinks</button>
        </Box>
    );
}
export default Tavern;