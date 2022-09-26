import Navbar from './Navbar'

const Header = () => {
  return (
    <header>
      <h1 className="header">
        NS News
      </h1>
      {<Navbar />}
    </header>
  );
};

export default Header;
