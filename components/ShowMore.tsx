'use client';

import { useRouter } from 'next/navigation';
import { ShowMoreProps } from '@/types';
import { BaseButton } from '@/components/index';
import { handleUpdateParamsUtil } from '@/utils';
const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {
  const router = useRouter();

  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;
    const newPathname = handleUpdateParamsUtil('limit', newLimit.toString());

    router.push(newPathname, { scroll: false });
  };

  return (
    <div className='w-full flex-center gap-5 mt-10'>
      {!isNext && (
        <BaseButton
          title='Show More'
          btnType='button'
          containerStyles='bg-primary-blue rounded-full text-white'
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowMore;
