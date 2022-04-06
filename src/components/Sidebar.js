import React, { useContext, useState } from 'react'
import AdminSvg from '../svgs/AdminSvg';
import AgentInboxSvg from '../svgs/AgentInboxSvg';
import AnalyticsSvg from '../svgs/AnalyticsSvg';
import ChevronRight from '../svgs/ChevronRight';
import HelpCenterSvg from '../svgs/HelpCenterSvg';
import KnowledgeBaseSvg from '../svgs/KnowledgeBaseSvg';
import { motion, AnimatePresence } from "framer-motion";
import ThemeSelect from './ThemeSelect';
import { ThemeContext } from '../context/ThemeContext';

function Sidebar() {
    const themeContext = useContext(ThemeContext);
    const theme = themeContext.theme;
    const [ activeNavIndex, setActiveNavIndex ] = useState();
    const [ activeSubMenu, setActiveSubMenu ] = useState();
    const [ userName ] = useState('adeyinka@metacare.app');

    const sidebarAnime = {
        hidden: { 
            opacity: 0,
            x: '-100px',
        },
        visible: { 
            opacity: 1,
            x: 0,
            transition: {
                duration: 1
            }
        },
    }

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
        const [ activeSubMenuItem, setActiveSubMenuItem ] = useState();
        
        const classes = `
          px-2 sm:px-6 justify-center sm:justify-start py-4 text-base rounded-full flex cursor-pointer font-normal
          ${activeNavIndex === navItem.label && activeSubMenu ?
            'text-primary-color dark:text-darkmode-primary-color font-semibold' :
            'text-gray-600 dark:text-grey-300 hover:text-primary-color dark:hover:text-darkmode-primary-color transform hover:translate-x-1 transition ease-in-out duration-200'
        }`;

        return (
            <>
                <motion.div initial={false} onClick={() => handleMenuClick(navItem.label)} className={classes}>
                    <div className="flex items-center justify-between w-full pr-4">
                        <div className='flex items-center'>
                            <div className='mr-4'>
                                <navItem.icon navIndex={navItem.label} activeNavIndex={activeSubMenu} theme={theme} />
                            </div>
                            <span className={``}>
                                {navItem.label}
                            </span>
                        </div>
                        <span className={`${activeNavIndex === navItem.label && activeSubMenu ? 'origin-center rotate-90' : 'origin-center rotate-0'} transition-all duration-200 ease-in-out`}> 
                            <ChevronRight theme={theme} /> 
                        </span>
                    </div>
                </motion.div>
                <AnimatePresence initial={true}>
                    { activeNavIndex === navItem.label && activeSubMenu &&
                        <motion.ul
                            key={navItem.label}
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
                                    className={`px-5 py-2 sm:px-[58px] dark:bg-darkmode-light-bg dark:hover:text-darkmode-text-color hover:text-black cursor-pointer transition-colors duration-200 ease-in-out ${activeSubMenuItem === item && activeNavIndex === navItem.label && 'font-semibold dark:text-darkmode-primary-color text-black'}`}
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
        <motion.div 
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={sidebarAnime}
            className='w-[16.5vw] dark:bg-dark-bg fixed top-0 left-0 h-screen border-r dark:border-darkmode-border-color border-border-color dark:text-grey-300 text-text-color z-10'
        >
            <div className='mt-[21px] w-[221px] mx-auto border py-3 text-center dark:border-darkmode-border-color border-border-color rounded-lg'>
                <div className='text-text-black dark:text-darkmode-primary-color font-gelion-black font-normal leading-[22px] text-sm'> Metacare </div>
                <div className='text-xs font-gelion-regular'> {userName} </div>
            </div>

            <div className="mt-[30px]">
                {navItems.map((navItem, index) => (
                    <NavItemContainer key={index}>
                        <NavItem navItem={navItem} navIndex={index} />
                    </NavItemContainer>
                ))}
            </div>

            <div className='absolute bottom-10 left-6'>
                <ThemeSelect />
            </div>
        </motion.div>
    )
}

export default Sidebar