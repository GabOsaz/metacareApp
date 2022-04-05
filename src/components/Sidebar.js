import React, { useState } from 'react'
import AdminSvg from '../svgs/AdminSvg';
import AgentInboxSvg from '../svgs/AgentInboxSvg';
import AnalyticsSvg from '../svgs/AnalyticsSvg';
import ChevronRight from '../svgs/ChevronRight';
import HelpCenterSvg from '../svgs/HelpCenterSvg';
import KnowledgeBaseSvg from '../svgs/KnowledgeBaseSvg';
import { motion, AnimatePresence } from "framer-motion";

function Sidebar() {
    // const [ isSidebarOpen, setIsSidebarOpen ] = useState(true);
    const [ activeNavIndex, setActiveNavIndex ] = useState();
    const [ activeSubMenuItem, setActiveSubMenuItem ] = useState();
    const [ activeSubMenu, setActiveSubMenu ] = useState();

    const handleMenuClick = (navItem) => {
        setActiveNavIndex(navItem)
        navItem === activeSubMenu ? setActiveSubMenu('') : setActiveSubMenu(navItem)
    }

    const navItems = [
        {
          label: 'Admin',
          icon: AdminSvg,
          subMenu: ['Teams', 'Knowledge Base', 'Training SAM', 'Help Center']
        },
        {
          label: 'Knowledge Base',
          icon: KnowledgeBaseSvg,
          subMenu: ['Teams', 'Knowledge Base', 'Training SAM', 'Help Center']
        },
        {
          label: 'Train SAM',
          icon: KnowledgeBaseSvg,
          subMenu: ['Teams', 'Knowledge Base', 'Training SAM', 'Help Center']
        },
        {
          label: 'Agent Inbox',
          icon: AgentInboxSvg,
          subMenu: ['Teams', 'Knowledge Base', 'Training SAM', 'Help Center']
        },
        {
          label: 'Help Center',
          icon: HelpCenterSvg,
          subMenu: ['Teams', 'Knowledge Base', 'Training SAM', 'Help Center']
        },
        {
          label: 'Analytics',
          icon: AnalyticsSvg,
          subMenu: ['Teams', 'Knowledge Base', 'Training SAM', 'Help Center']
        }
    ];

    const NavItem = ({ navItem, navIndex }) => {
        
        const classes = `
          px-2 sm:px-6 justify-center sm:justify-start py-4 text-base rounded-full flex cursor-pointer font-normal
          ${activeNavIndex === navItem.label && activeSubMenu ?
            'text-primary-color font-semibold' :
            'text-gray-600 hover:text-primary-color transform hover:translate-x-1 transition ease-in-out duration-200'
        }`;

        return (
            <>
                <motion.div initial={false} onClick={() => handleMenuClick(navItem.label)} className={classes}>
                    <div className="flex items-center justify-between w-full pr-4">
                        <div className='flex items-center'>
                            <div className='mr-4'>
                            {/* <div className={`${isSidebarOpen ? 'mr-4' : 'mr-0'}`}> */}
                                <navItem.icon navIndex={navItem.label} activeNavIndex={activeSubMenu} />
                            </div>
                            <span className={``}>
                            {/* <span className={`${isSidebarOpen ? 'block' : 'hidden'}`}> */}
                                {navItem.label}
                            </span>
                        </div>
                        <span className={`${activeNavIndex === navItem.label && activeSubMenu ? 'rotate-90' : 'rotate-0'} transition-all duration-200 ease-in-out`}> <ChevronRight navIndex={navIndex} activeNavIndex={activeNavIndex} /> </span>
                    </div>
                </motion.div>
                <AnimatePresence initial={true}>
                    { activeNavIndex === navItem.label && activeSubMenu &&
                        <motion.ul
                            key="content"
                            initial="collapsed"
                            animate="open"
                            exit="collapsed"
                            variants={{
                            open: { opacity: 1, height: "auto" },
                            collapsed: { opacity: 0, height: 0 }
                            }}
                            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
                        >
                            {navItem.subMenu.map((item, index) => (
                                <motion.li 
                                    key={index}
                                    onClick={() => setActiveSubMenuItem(item)} 
                                    className={`px-5 py-2 sm:px-[58px] cursor-pointer transition-colors duration-200 ease-in-out ${activeSubMenuItem === item && activeNavIndex === navItem.label && 'font-semibold text-black'}`}
                                >
                                    {item}
                                </motion.li>
                            ))}
                        </motion.ul>
                    }
                </AnimatePresence>
            </>
        );
    };

    const NavItemContainer = ({ children }) => (
        <div className=''>{children}</div>
    );

  return (
    <div className='w-[16.5vw] fixed top-0 left-0 h-screen border-r border-border-color text-text-color z-10'>
        <div className='mt-[21px] w-[221px] mx-auto border py-3 text-center border-border-color rounded-lg'>
            <div className='text-text-black font-gelion-black font-normal leading-[22px] text-sm'> Metacare </div>
            <div className='text-xs font-gelion-regular'> adeyinka@metacare.app </div>
        </div>

        <div className="mt-[30px]">
            {navItems.map((navItem, index) => (
                <NavItemContainer key={index}>
                    <NavItem navItem={navItem} navIndex={index} />
                </NavItemContainer>
            ))}
        </div>
    </div>
  )
}

export default Sidebar