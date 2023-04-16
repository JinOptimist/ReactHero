import { useAppDispatch } from '../../hooks';
import heroReducer, { heroUnderAttack } from '../../reducers/heroReducer';
import store from '../../reducers/store';

function Tavern() {
    const name = 'Pink sisters';
    
    const hitTheHero = () => {
        store.dispatch(heroUnderAttack(1))
        //useAppDispatch()(heroUnderAttack(1))
    }

    return (
        <>
            Tavern: {name}. Barmen hit the hero <button onClick={hitTheHero}>hit the hero</button>
        </>
    );
}
export default Tavern;