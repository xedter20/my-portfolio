import React, { useState } from 'react';
import './Navbar.scss';
import { images } from '../../constants';

import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
const Navbar = () => {
  const [toogle, setToogle] = useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt=""></img>
      </div>

      <ul className="app__navbar-links">
        {['home', 'about', 'contact', 'work', 'skills', 'contact'].map(
          (item, index) => {
            return (
              <li key={`link-${index}`} className="app__flex p-text">
                <div></div>
                <a href={`#${item}`}>{item}</a>
              </li>
            );
          }
        )}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4
          onClick={() => {
            setToogle(true);
          }}
        />

        {toogle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85 }}>
            <HiX
              onClick={() => {
                setToogle(false);
              }}
            />
            <ul>
              {['home', 'about', 'contact', 'work', 'skills', 'contact'].map(
                (item, index) => {
                  return (
                    <li
                      key={`link-${index}`}
                      className="app__flex p-text"
                      onClick={() => {
                        setToogle(false);
                      }}>
                      <a href={`#${item}`}>{item}</a>
                    </li>
                  );
                }
              )}{' '}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
