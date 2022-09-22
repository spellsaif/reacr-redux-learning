import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
// import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from './userSlice';

export const UserView = () => {

    const dispatch = useAppDispatch()
    const user = useAppSelector((state) => state.user)
    useEffect(() => {
        dispatch(fetchUsers())
    }, [])
    return (
        <div>
            <h2>List Of Users</h2>
            {user.loading && <p>Loading...</p>}
            {user.users && (
                <ul>
                    {
                        user.users.map((user) => (
                            <li key={user.id}>{user.name}</li>
                        ))
                    }
                </ul>
            )}

            {user.error && user.loading ? <p>{user.error}</p> : ''}
        </div>
    )
}