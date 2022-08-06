import { FC } from 'react';
const BannerIMG = require('../assets/HeaderBoard.png');
const WoodenSignIMG = require('../assets/WoodenSign.png');

type Props = {
  season: number;
  title: string;
};

export const Header: FC<Props> = ({ season, title }) => {
  return (
    <div className='h-[240px] relative'>
      <img
        src={BannerIMG}
        alt='HeaderBanner'
        className='w-screen h-[131px] bg-blend-color-burn absolute bottom-0 -z-10'
      />
      <div className='w-[590px] h-[203px] mx-auto relative'>
        <div className='absolute left-0 right-0 ml-auto mr-auto w-[375px] h-[75px] bottom-[20px]'>
          <h2 className='font-extrabold text-white text-4xl text-center mb-2'>
            {title}
          </h2>
          <div className='flex justify-center align-middle bg-[#271A11] w-[165px] rounded-2xl mx-auto'>
            <img
              src={require(`../assets/Star.png`)}
              alt='Star'
              className='h-[14px] w-[14px] my-auto'
            />
            <h5 className='font-extrabold text-white text-2xl text-center mx-2'>
              Season {season}
            </h5>
            <img
              src={require(`../assets/Star.png`)}
              alt='Star'
              className='h-[14px] w-[14px] my-auto'
            />
          </div>
        </div>
        <img src={WoodenSignIMG} alt='WoodenSign' className='object-fill' />
      </div>
    </div>
  );
};
