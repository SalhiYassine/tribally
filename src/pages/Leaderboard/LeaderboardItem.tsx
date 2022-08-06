import React, { FC } from 'react';
import { User } from '../../types';

type Props = {
  user: User;
  position: number;
  handleItemClick: (user: User) => void;
};

export const LeaderboardItem: FC<Props> = ({
  user,
  position,
  handleItemClick,
}) => {
  const { name, points, rankTier } = user;
  return (
    <div
      onClick={() => handleItemClick(user)}
      className={`relative cursor-pointer flex 
      justify-between w-full min-w-[575px] 
      rounded-lg  
       ${
         position <= 3
           ? ' border-[#ff8860] border-[3px] '
           : ' border-opacity-40 border-[#936e59] border-2 '
       }
      h-[45px] mb-4 bg-[#271A11] p-[6px]`}>
      <div className='flex w-7/12'>
        <div className='w-2/12 flex items-center'>
          <p className='font-extrabold text-white  bg-[#37261A] text-2xl w-[50px] rounded-md text-center'>
            {position}
          </p>
        </div>
        <div className=' w-9/12 flex align-middle '>
          <p className='pl-3 my-auto font-extrabold text-white text-md truncate'>
            {name}
          </p>
        </div>
      </div>
      <div className='flex justify-start w-5/12'>
        <div className='w-5/12 flex items-center'>
          <img
            src={require(`../../assets/Star.png`)}
            alt='Star'
            className='h-[14px] w-[14px]'
          />
          <p className='font-medium text-yellow-400 text-md w-[50px] text-center'>
            {points}
          </p>
        </div>
        <div className=' w-7/12 flex align-middle '>
          <p className='pl-3 my-auto font-extrabold text-white text-md truncate'>
            {rankTier}
          </p>
        </div>
      </div>
      <div className='absolute right-[-15px] bottom-1 h-[40px] w-[40px] rotate-45 bg-white rounded-lg border-[3px] border-solid border-[#FFF0DC]'>
        <div className='relative -rotate-45 left-[1px] right-[0px] bottom-[0px]'>
          <img
            src={require(`../../assets/levels/${rankTier.split(' ')[0]}.png`)}
            alt='RankIcon'
            className='h-[30px] w-[30px]'
          />
        </div>
      </div>
    </div>
  );
};
