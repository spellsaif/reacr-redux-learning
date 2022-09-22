// import { useSelector, useDispatch } from 'react-redux';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { cakeActions } from './cakeSlice'
export const CakeView = () => {

    const dispatch = useAppDispatch();
    const cakes = useAppSelector((state) => state.cake.noOfCakes);
    return (
        <div>
            <h2>Number of Cakes: {cakes}</h2>
            <button onClick={() => dispatch(cakeActions.ordered())}>Order cake</button>
            <button onClick={() => dispatch(cakeActions.restocked(5))}>Restock cake</button>
        </div>
    )
}