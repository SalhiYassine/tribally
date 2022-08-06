import { FC } from 'react';
import { LastBattle as LastBattleType, User } from '../../types';
import { Header } from '../../components';

type Props = {
  user: User;
  season: number;
  closeProfile: () => void;
};

export const ProfilePage: FC<Props> = ({ user, closeProfile, season }) => {
  const { name, bio, points, rankTier, talent, lastBattle } = user;
  return (
    <>
      <Header season={season} title='Player Profile' />
      <div className='min-h-[500px] min-w-[575px] max-w-[700px] w-[55%] rounded-md mt-5 mx-auto bg-[#271A11] p-[6px] border-opacity-40 border-[#936e59] border-2'>
        <button
          onClick={closeProfile}
          className='font-extrabold text-yellow-100  bg-[#37261A] text-2xl w-[120px] rounded-md text-center mb-3'>
          Return
        </button>
        <ProfileItem title='Name' value={name} />
        <ProfileItem title='Bio' value={bio} />
        <ProfileItem title='Points' value={points} />
        <ProfileItem title='Rank Tier' value={rankTier} />
        <ProfileItem title='Talent' value={talent} />
        <LastBattle lastBattle={lastBattle} />
      </div>
    </>
  );
};

const ProfileItem = ({
  title,
  value,
}: {
  title: string;
  value: string | number;
}) => {
  return (
    <div className='flex-col mb-2'>
      <h4 className='font-extrabold text-white  text-md rounded-md '>
        {title}
      </h4>
      <p className='font-light text-gray-300 text-sm '>{value}</p>
    </div>
  );
};

const LastBattle = ({ lastBattle }: { lastBattle: LastBattleType }) => {
  const {
    battleEnded,
    battleStarted,
    battleType,
    opponentPointsAfter,
    opponentPointsBefore,
    opponentReward,
    playerPointsAfter,
    playerPointsBefore,
    playerReward,
    result,
  } = lastBattle;

  return (
    <div className='flex-col mb-2'>
      <h4 className='font-extrabold text-white  text-md rounded-md '>
        Last Battle :
      </h4>
      <LastBattleItem title='Result :' value={result.toUpperCase()} />
      <LastBattleItem title='Type :' value={battleType.toUpperCase()} />
      <LastBattleItem
        title='Opponent Point Loss/Gain : '
        value={opponentPointsAfter - opponentPointsBefore}
      />
      <LastBattleItem
        title='Player Point Loss/Gain : '
        value={playerPointsAfter - playerPointsBefore}
      />
      <LastBattleItem title='Player Reward :' value={playerReward} />
      <LastBattleItem title='Opponent Reward :' value={opponentReward} />
      <LastBattleItem title='Battle Started :' value={battleStarted} />
      <LastBattleItem title='Battle Ended :' value={battleEnded} />
    </div>
  );
};

const LastBattleItem = ({
  title,
  value,
}: {
  title: string;
  value: string | number;
}) => {
  return (
    <div className='flex'>
      <h5 className='font-medium text-gray-200 text-sm rounded-md '>{title}</h5>
      <p className='font-light text-gray-300 text-sm ml-2 '>{value}</p>
    </div>
  );
};
