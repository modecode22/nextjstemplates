import HeaderLogo from "@/icons/HeaderLogo";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <>
    {/* <section className="bg-gradient-to-r from-primary-400 via-primary-500  to-primary-600 text-light-500 px-3 sm:px-6 md:px-12 lg:px-32 xl:px-40">
        Read my blogs builduing in public from here 
    </section> */}
    <header className="w-full h-16 z-50 p-3  px-3 sm:px-6 md:px-12 lg:px-32 xl:px-40 border-b border-dashed border-primary-500/20 shadow-md  sticky inset-0 bg-dark-800/50 backdrop-blur-2xl flex justify-between">
      <HeaderLogo className="h-full " />
      <SearchBar />
    </header>
    </>
  );
};

export default Header;
