// import React, { useState, useEffect } from 'react';
// import { NavLink, Link, useLocation } from "react-router-dom"
// import { motion } from 'framer-motion'
// import { Sidebar, Menu, MenuItem, } from 'react-pro-sidebar';


// function SidebarMain({ text, link }) {
//   const location = useLocation();
//   const path = location.pathname;
//   const pathParts = path.split('/');
//   const secondPart = pathParts[2];

//   const initial = { opacity: 0.5, scale:0.5
//      }
    
//     const animate = {opacity: 1, scale:1}

//     const transition = {duration:1 }



//   const [collapsed, setCollapsed] = useState(false);
//   const { a, b, c, d } = text
//   const { aLink, bLink, cLink, dLink } = link
//   // Brauzer ölçüsünü dinləmək üçün genişlik kiçikdirsə (məsələn, telefon ekranı) yan paneli yığcamlaşdırın
//   const handleResize = () => {
//     if (window.innerWidth < 768) {
//       setCollapsed(true);
//     } else {
//       setCollapsed(false);
//     }
//   };


//   window.addEventListener('resize', handleResize);


//   useEffect(() => {
//     handleResize();

//   }, []);





//   return (
//     <>

//       <motion.div className="motion "
   
      

//       >

//         <Sidebar className='sidebar' style={{ height: '100vh' }} collapsed={collapsed}>
//           <Menu>
//             <MenuItem component={<Link to={aLink} />} className='mt-5 text'>
//               {/* <motion.button type="button" className="btn btn-primary btn-lg fontSize"  */}
//             <motion.button type="button" className={secondPart ===aLink ?'btn btn-danger btn-lg fontSize':'btn btn-primary btn-lg fontSize'}
//      initial={initial}
//      animate={ animate}
//      transition={transition}
//               >
//                 {a}
//               </motion.button>
//             </MenuItem>
//             <hr />
//             <MenuItem component={<Link to={bLink} />} className='mt-5 text'>
//             <motion.button type="button" className={secondPart ===bLink ?'btn btn-danger btn-lg fontSize':'btn btn-primary btn-lg fontSize'}
//      initial={initial}
//      animate={ animate}
//      transition={transition}
//               >
//                 {b}
//               </motion.button>
//             </MenuItem>
//             <hr />
//             {c && (
//               <MenuItem component={<Link to={cLink} />} className='mt-5 text'>
//                   <motion.button type="button" className={secondPart ===cLink ?'btn btn-danger btn-lg fontSize':'btn btn-primary btn-lg fontSize'}
//      initial={initial}
//      animate={ animate}
//      transition={transition}
//                 >
//                   {c}
//                 </motion.button>
//               </MenuItem>
//             )}
//              <hr />
//             {d && (
//               <MenuItem component={<Link to={dLink} />} className='mt-5 text'>
//                       <motion.button type="button" className={secondPart ===dLink ?'btn btn-danger btn-lg fontSize':'btn btn-primary btn-lg fontSize'}
//                      initial={initial}
//                      animate={ animate}
//                      transition={transition}
//                 >
//                   {d}
//                 </motion.button>
//               </MenuItem>
//             )}
//           </Menu>
//         </Sidebar>
//       </motion.div>


//     </>
//   )
// }

// export default SidebarMain

// Updated SidebarMain.js

import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';


function SidebarMain({ text, link }) {
   const location = useLocation();
  const path = location.pathname;
  const pathParts = path.split('/');
  const secondPart = pathParts[2];

  const initial = { opacity: 0.5, scale:0.5
     }
    
    const animate = {opacity: 1, scale:1}

    const transition = {duration:1 }



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
      {/* <motion.div className="motion">

        <Sidebar className="sidebar" style={{ height: '100vh' }} collapsed={collapsed}>
          <Menu>


            <MenuItem component={<Link to={aLink} />} className="mt-5 text">
              <motion.button
                type="button"
                className={secondPart === aLink ? 'btn btn-danger btn-lg fontSize' : 'btn btn-primary btn-lg fontSize'}
                initial={initial}
                animate={animate}
                transition={transition}
              >
                {a}
              </motion.button>
            </MenuItem>
            <hr />


            <MenuItem component={<Link to={bLink} />} className="mt-5 text">
              <motion.button
                type="button"
                className={secondPart === bLink ? 'btn btn-danger btn-lg fontSize' : 'btn btn-primary btn-lg fontSize'}
                initial={initial}
                animate={animate}
                transition={transition}
              >
                {b}
              </motion.button>
            </MenuItem>
            <hr />


            {c && (
              <MenuItem component={<Link to={cLink} />} className="mt-5 text">
                <motion.button
                  type="button"
                  className={secondPart === cLink ? 'btn btn-danger btn-lg fontSize' : 'btn btn-primary btn-lg fontSize'}
                  initial={initial}
                  animate={animate}
                  transition={transition}
                >
                  {c}
                </motion.button>
              </MenuItem>
            )}
            <hr />


            {d && (
              <MenuItem component={<Link to={dLink} />} className="mt-5 text">
                <motion.button
                  type="button"
                  className={secondPart === dLink ? 'btn btn-danger btn-lg fontSize' : 'btn btn-primary btn-lg fontSize'}
                  initial={initial}
                  animate={animate}
                  transition={transition}
                >
                  {d}
                </motion.button>
              </MenuItem>
            )}


            
          </Menu>
        </Sidebar>

        
      </motion.div> */}
      
      <motion.div className="motion vHeight">
{
  c ? (
    <Sidebar className="sidebarC" style={{ height: '100vh' }} collapsed={collapsed}>
          <Menu>


<MenuItem component={<Link to={aLink} />} className="mt-5 text">
              <motion.button
                type="button"
                className={secondPart === aLink ? 'btn btn-danger btn-lg fontSize' : 'btn btn-primary btn-lg fontSize'}
                initial={initial}
                animate={animate}
                transition={transition}
              >
                {a}
              </motion.button>
            </MenuItem>
            <hr />


            <MenuItem component={<Link to={bLink} />} className="mt-5 text">
              <motion.button
                type="button"
                className={secondPart === bLink ? 'btn btn-danger btn-lg fontSize' : 'btn btn-primary btn-lg fontSize'}
                initial={initial}
                animate={animate}
                transition={transition}
              >
                {b}
              </motion.button>
            </MenuItem>
            <hr />


        
              <MenuItem component={<Link to={cLink} />} className="mt-5 text">
                <motion.button
                  type="button"
                  className={secondPart === cLink ? 'btn btn-danger btn-lg fontSize' : 'btn btn-primary btn-lg fontSize'}
                  initial={initial}
                  animate={animate}
                  transition={transition}
                >
                  {c}
                </motion.button>
              </MenuItem>
        
            <hr />


         
              <MenuItem component={<Link to={dLink} />} className="mt-5 text">
                <motion.button
                  type="button"
                  className={secondPart === dLink ? 'btn btn-danger btn-lg fontSize' : 'btn btn-primary btn-lg fontSize'}
                  initial={initial}
                  animate={animate}
                  transition={transition}
                >
                  {d}
                </motion.button>
              </MenuItem>
         


            


            
          </Menu>
        </Sidebar>
  ):(
    <>
        <Sidebar className="sidebar" style={{ height: '100vh' }} collapsed={collapsed}>
          <Menu>


            <MenuItem component={<Link to={aLink} />} className="mt-5 text">
              <motion.button
                type="button"
                className={secondPart === aLink ? 'btn btn-danger btn-lg fontSize' : 'btn btn-primary btn-lg fontSize'}
                initial={initial}
                animate={animate}
                transition={transition}
              >
                {a}
              </motion.button>
            </MenuItem>
            <hr />


            <MenuItem component={<Link to={bLink} />} className="mt-5 text">
              <motion.button
                type="button"
                className={secondPart === bLink ? 'btn btn-danger btn-lg fontSize' : 'btn btn-primary btn-lg fontSize'}
                initial={initial}
                animate={animate}
                transition={transition}
              >
                {b}
              </motion.button>
            </MenuItem>
            <hr />


    


            
          </Menu>
        </Sidebar>
    </>
  )
}
    

        
      </motion.div>
    </>
  );
}

export default SidebarMain;

