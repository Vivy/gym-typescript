import ActionButton from '@/shared/actionbutton';
import HText from '@/shared/text';
import BenefitsPageGraphic from '@/assets/BenefitsPageGraphic.png';
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

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};
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
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className='md:my-5 md:w-3/5'
        >
          <HText>MORE THEN JUST A GYM</HText>
          <p className='my-5 text-sm'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id
            doloribus, alias corrupti consequatur dicta distinctio?
          </p>
        </motion.div>

        {/* {benefits} */}
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
          className='mt-5 items-center justify-between gap-8 md:flex'
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
        {/* {graphics and description} */}
        <div className='mt-16 items-center justify-between gap-20 md:mt-28 md:flex'>
          {/* {graphic} */}
          <img
            src={BenefitsPageGraphic}
            alt='benefits-page-graphic'
            className='mx-auto '
          />

          {/* {description} */}
          <div>
            {/* {title} */}
            <div className='relative  '>
              <div className='before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves'>
                <motion.div
                  initial='hidden'
                  whileInView='visible'
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    Millions of Happy Members Getting{' '}
                    <span className='text-primary-500'>FIT</span>
                  </HText>
                </motion.div>
              </div>
            </div>
            {/* {description} */}
            <motion.div
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className='my-5'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti deserunt consectetur quo quisquam in quidem quasi
                similique dolorem aperiam. Officiis sapiente obcaecati unde nam
                rerum?
              </p>
              <p className='mb-5'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
                libero, vel accusantium voluptate iure quaerat sapiente ipsam
                nemo voluptas dolorum.
              </p>
            </motion.div>
            {/* {button} */}
            <div className='relative mt-16'>
              <div className='before:absolute before:-bottom-20 before:-right-40 before:z-[-1] before:content-sparkles'>
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
