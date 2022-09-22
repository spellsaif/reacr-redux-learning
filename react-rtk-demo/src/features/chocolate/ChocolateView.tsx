// import { useSelector, useDispatch } from 'react-redux';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { chocolateActions } from './chocolateSlice'

export const ChocolateView = () => {

    const dispatch = useAppDispatch();
    const chocolates = useAppSelector((state) => state.chocolate.noOfChocolate)

    return (
        <div>
            <h2>Number of Chocolate: {chocolates}</h2>
            <button onClick={() => dispatch(chocolateActions.ordered())}>Order Chocolate</button>
            <button onClick={() => dispatch(chocolateActions.restocked(5))}>Restock Chocolate</button>
        </div>
    )
}