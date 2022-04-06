export default function Switch({ toggle, setToggle, extraStyles, theme, darkmode, setTheme }) {
  // const theme = (localStorage.getItem('theme'))

  return (
    <div
      className={`md:w-14 md:h-7 w-12 h-6 flex items-center bg-gray-200 rounded-[9999px] p-1 cursor-pointer ${extraStyles}`}
      onClick={() => {
        darkmode ? setTheme(theme === 'light' ? 'dark' : 'light') : setToggle(!toggle);
      }}
    >
      {/* Switch */}
      <div
        className={`
          md:w-6 md:h-6 h-5 w-5 rounded-[50%] shadow-md transform duration-300 ease-in-out
          ${toggle || theme === 'dark' ? 'bg-primary-color transform translate-x-6 ' : 'bg-[#B8B4C0]'} 
        `}
      ></div>
    </div>
  );
}
