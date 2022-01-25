import LandingBg from '../../assets/svg/landing_bg.svg';
import { ReactComponent as LandingHomeIcon } from '../../assets/svg/landing_home_icon.svg';
import { ReactComponent as LandingHomepage } from '../../assets/svg/landing_homepage.svg';
import { ReactComponent as LandingNear } from '../../assets/svg/landing_near.svg';
import React from 'react';

export default function Footer() {
  return (
    <div className='flex flex-col w-full h-full'>
      <div
        className='flex flex-col justify-center items-center w-screen h-screen bg-cover'
        style={{ backgroundImage: `url(${LandingBg})` }}
      >
        <div className='flex flex-row'>
          <LandingHomeIcon />
          <LandingHomepage className='pt-1' />
        </div>
        <p className='font-manrope text-gray-100 opacity-90 text-sm1 font-medium'>
          a web3 gateway to hidden experiences
        </p>
        <div className='flex flex-col absolute ' style={{ bottom: '30px' }}>
          <div className='flex flex-row justify-center'>
            <p className='font-manrope text-white opacity-90 text-sm1 font-medium mb-2'>
              powered by
            </p>
          </div>
          <LandingNear />
        </div>
      </div>
    </div>
  );
}
