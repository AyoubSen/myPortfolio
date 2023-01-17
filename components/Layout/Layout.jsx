import React from 'react';
import Navbar from '../Navbar/Navbar';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};
export default function Layout({ children }) {
  const { asPath } = useRouter();

  return (
    <motion.div
      key={asPath}
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ type: 'linear' }}
    >
      <Navbar />
      <main>{children}</main>
    </motion.div>
  );
}
