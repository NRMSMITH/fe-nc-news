import Navbar from './Navbar'

const Header = () => {
  return (
    <header>
      <h1 className="header">
        <u>NS Marketplace</u>
      </h1>
      {<Navbar />}
    </header>
  );
};

export default Header;
