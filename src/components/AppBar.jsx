import { Navigation } from './Navigation/Navigation';
import { UserMenu } from './UserMenu/UserMenu';
import { AuthNavigation } from './AuthNavigation/AuthNavigation';

export const AppBar = () => {
  return (
    <>
      <header>
        <Navigation />
        <AuthNavigation />
        <UserMenu />
      </header>
      <hr />
    </>
  );
};
