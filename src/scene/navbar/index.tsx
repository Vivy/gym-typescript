import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Logo from '@/assets/Logo.png';
import Link from './link';
import { SelectedPage } from '@/shared/types';
import useMediaQuery from '@/hooks/usemadiaquerie';
import ActionButton from '@/shared/actionbutton';

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (values: SelectedPage) => void;
};

const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
  const flexBetween = 'flex item-center justify-between';
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');
  const [isMenuToggle, setIsMenuToggle] = useState<boolean>(false);

  return (
    <nav>
      <div className={`${flexBetween} fixed top-0 z-30 w-full py-6 `}>
        <div className={`${flexBetween} mx-auto w-5/6 `}>
          <div className={`${flexBetween} w-full gap-16`}>
            <img src={Logo} alt='logo' />
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full `}>
                <div className={`${flexBetween} texsm gap-8`}>
                  <Link
                    page='Home'
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page='Benefits'
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page='Our Classes'
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page='Contact Us'
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
                <div className={`${flexBetween} gap-8`}>
                  <p>Sign In</p>
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Become a Member
                  </ActionButton>
                </div>
              </div>
            ) : (
              <button
                className='rounded-full bg-secondary-500 p-2 '
                onClick={() => setIsMenuToggle(!isMenuToggle)}
              >
                <Bars3Icon className='h-6 w-6 text-white ' />
              </button>
            )}
          </div>
        </div>
      </div>

      {/*Mobile Menu Modal*/}
      {!isAboveMediumScreens && isMenuToggle && (
        <div className='fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl'>
          {/* {Close Icon} */}
          <div className='flex justify-end p-12'>
            <button onClick={() => setIsMenuToggle(!isMenuToggle)}>
              <XMarkIcon className='h-6 w-6 text-gray-400' />
            </button>
          </div>

          {/* {Menu Items} */}
          <div className='ml-[33%] flex flex-col gap-10 text-2xl'>
            <Link
              page='Home'
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page='Benefits'
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page='Our Classes'
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page='Contact Us'
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
