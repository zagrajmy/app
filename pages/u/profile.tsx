import { NextPage } from 'next';
import { Heading } from '@theme-ui/components';

import { Page } from '../../src/app/components';
import { auth } from '../../src/app/auth';

const Profile: NextPage = () => {
  return (
    <Page>
      <Heading>Profile</Heading>
    </Page>
  );
};

Profile.getInitialProps = async ({ req, res }) => {
  if (typeof window === 'undefined') {
    const session = await auth.getSession(req!);
    if (!session?.user) {
      res!.writeHead(302, {
        Location: '/api/login',
      });
      res!.end();

      return {};
    }

    return { user: session.user };
  }

  return {};
};

export default Profile;
