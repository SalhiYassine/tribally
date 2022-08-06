import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLeaderboardRequest } from './redux/actions';
import { getLeaderboardSelector } from './redux/selectors';
import { User } from './types/Leaderboard/User';

const App: FC = () => {
  const dispatch = useDispatch();
  const {
    users,
    pending,
    error,
  }: { users: User[]; pending: boolean; error: Error | undefined } =
    useSelector(getLeaderboardSelector);

  useEffect(() => {
    dispatch(fetchLeaderboardRequest());
  }, []);

  if (pending) return <h5>Loading...</h5>;
  if (error || !users) return <h5>Error</h5>;

  console.log(users);
  return (
    <div className='App'>
      {users.map((user, index) => {
        return <p key={user.name}>{user.name}</p>;
      })}
    </div>
  );
};

export default App;
