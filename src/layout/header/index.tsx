import Logo from './components/logo';
import Menu from './components/menu';
import Message from './components/message';
import Notification from './components/notification';
import Profile from './components/profile';
import Search from './components/search';

const HeaderComponent = () => {
  return (
    <header className="bg-secondary block fixed w-full inset-x-0 z-30 h-16 px-4 shadow-xl">
      <div className="w-full h-full flex items-center justify-between px-10">
        <Logo />
        <Search />
        <div className="flex justify-center items-center gap-4">
          <Menu />
          <Message />
          <Notification />
          <Profile />
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
