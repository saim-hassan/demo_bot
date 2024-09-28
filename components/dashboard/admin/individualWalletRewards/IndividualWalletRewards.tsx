'use client'

import React, { useState } from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';
import Link from 'next/link';
import AirdropRequest from '../blueDialog/AirdropRequest';
import ClaimRewardsRequest from '../blueDialog/ClaimRewardRequest';
import ReferralRewards from '../blueDialog/ReferralRewards';

const IndividualWalletRewards = () => {

  return (
    <div className='w-full flex flex-col justify-center items-start py-10 gap-4'>
      <div className='w-full flex justify-start items-center'>
        <h2 className="text-[#fff] text-[24px]">Individual wallet rewards</h2>
      </div>
      <div className='w-full flex justify-start items-center gap-4'>
      <ClaimRewardsRequest />
      <ReferralRewards />
      <AirdropRequest />
      </div>
    </div>
  );
};

export default IndividualWalletRewards;
