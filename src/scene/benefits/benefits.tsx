import HText from '@/shared/text';
import { BenefitType, SelectedPage } from '@/shared/types';
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import Benefit from './benefit';

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className='h-6 w-6' />,
    title: 'State of the Art Facilities',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur, voluptate. Natus ratione praesentium fugiat a? ',
  },
  {
    icon: <UserGroupIcon className='h-6 w-6' />,
    title: '100s of diverse Classes',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur, voluptate. Natus ratione praesentium fugiat a? ',
  },
  {
    icon: <AcademicCapIcon className='h-6 w-6' />,
    title: 'Expert and Pro Trainers',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur, voluptate. Natus ratione praesentium fugiat a? ',
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id='benefits' className='mx-auto min-h-full w-5/6 py-20'>
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* {header} */}
        <div className='md:my-5 md:w-3/5'>
          <HText>MORE THEN JUST A GYM</HText>
          <p className='my-5 text-sm'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id
            doloribus, alias corrupti consequatur dicta distinctio?
          </p>
        </div>

        {/* {benefits} */}
        <div className='mt-5 items-center justify-between gap-8 md:flex'>
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
