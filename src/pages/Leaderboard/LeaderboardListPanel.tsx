import { FC } from 'react';
import { ScrollArea } from '@mantine/core';
import { User } from '../../types';
import { Header } from '../../components';
import { LeaderboardItem } from './LeaderboardItem';

type Props = {
  users: User[];
  season: number;
  handleItemClick: (user: User) => void;
};

export const LeaderboardListPanel: FC<Props> = ({
  users,
  season,
  handleItemClick,
}) => {
  return (
    <>
      <Header season={season} title='Origin Leaderboard' />
      <div className='min-h-[500px] min-w-[575px] max-w-[700px] w-[55%] mt-5 mx-auto'>
        {users.map((user, index) => {
          return (
            <LeaderboardItem
              handleItemClick={handleItemClick}
              position={index + 1}
              user={user}
            />
          );
        })}
      </div>
    </>
  );
};
