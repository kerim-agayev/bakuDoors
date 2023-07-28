import React, { useState, useEffect } from 'react';
import { NavLink, Link } from "react-router-dom"
import { motion } from 'framer-motion'
import { Sidebar, Menu, MenuItem, } from 'react-pro-sidebar';


function SidebarMain({ text, link }) {


  const sidebarVariants = {
    open: {
      width: '250px',
      transition: { duration: 0.3 },
    },
    closed: {
      width: '80px',
      transition: { duration: 0.3 },
    },
  };






  const [collapsed, setCollapsed] = useState(false);
  const { a, b, c, d } = text
  const { aLink, bLink, cLink, dLink } = link
  // Brauzer ölçüsünü dinləmək üçün genişlik kiçikdirsə (məsələn, telefon ekranı) yan paneli yığcamlaşdırın
  const handleResize = () => {
    if (window.innerWidth < 768) {
      setCollapsed(true);
    } else {
      setCollapsed(false);
    }
  };


  window.addEventListener('resize', handleResize);


  useEffect(() => {
    handleResize();
  }, []);
  return (
    <>

      <motion.div className="motion "


      >

        <Sidebar className='sidebar' style={{ height: '100vh' }} collapsed={collapsed}>
          <Menu>
            <MenuItem component={<Link to={aLink} />} className='mt-5 text'>
              <button type="button" className="btn btn-primary btn-lg">
                {a}
              </button>
            </MenuItem>
            <hr />
            <MenuItem component={<Link to={bLink} />} className='mt-5 text'>
              <button type="button" className="btn btn-primary btn-lg">
                {b}
              </button>
            </MenuItem>
            <hr />
            {c && (
              <MenuItem component={<Link to={cLink} />} className='mt-5 text'>
                <button type="button" className="btn btn-primary btn-lg">
                  {c}
                </button>
              </MenuItem>
            )}
            {d && (
              <MenuItem component={<Link to={dLink} />} className='mt-5 text'>
                <button type="button" className="btn btn-primary btn-lg">
                  {d}
                </button>
              </MenuItem>
            )}
          </Menu>
        </Sidebar>
      </motion.div>


    </>
  )
}

export default SidebarMain


