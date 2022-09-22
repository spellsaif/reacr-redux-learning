// import { useSelector, useDispatch } from 'react-redux';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { icecreamActions } from './icecreamSlice'

export const IcecreamView = () => {

    const dispatch = useAppDispatch();
    const icecreams = useAppSelector((state: any) => state.icecream.noOfIceCreams)
    return (
        <div>
            <h2>Number of Ice-creams: {icecreams}</h2>
            <button onClick={() => dispatch(icecreamActions.ordered())}>Order Ice-creams</button>
            <button onClick={() => dispatch(icecreamActions.restocked(5))}>Restock Ice-creams</button>
        </div>
    )
}