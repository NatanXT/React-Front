import React from 'react';
import { motion } from 'framer-motion';
import './Home.css'; // Arquivo CSS específico para a Home

const Home = () => {
  return (
    <motion.div 
    className="Home" 
    initial={{ x: -300, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    exit={{ x: 300, opacity: 0 }}
    transition={{ duration: 0.5 }}
>
  <h1>Página Principal</h1>
</motion.div>
  );
};

export default Home;