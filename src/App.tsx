import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ProfilePage } from './pages';
import { LeaderboardListPanel } from './pages/Leaderboard/LeaderboardListPanel';
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

  const season = 0;

  useEffect(() => {
    dispatch(fetchLeaderboardRequest());
  }, [dispatch]);

  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const handleItemClick = (user: User) => {
    setSelectedUser(user);
  };

  const handleCloseProfile = () => {
    setSelectedUser(null);
  };

  if (pending) return <h5>Loading...</h5>;
  if (error || !users) return <h5>{error?.message}</h5>;

  if (selectedUser)
    return (
      <ProfilePage
        season={season}
        closeProfile={handleCloseProfile}
        user={selectedUser}
      />
    );

  return (
    <div className='min-h-screen min-w-screen'>
      <LeaderboardListPanel
        handleItemClick={handleItemClick}
        season={season}
        users={users}
      />
    </div>
  );
};

export default App;
