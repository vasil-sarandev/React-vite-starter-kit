import { ContentLayout, Typography } from '@/components';
import { LoginPageContainer } from '@/features/auth/login-page';

const LoginPage = () => {
  return (
    <ContentLayout title="Login">
      <LoginPageContainer/>
    </ContentLayout>
  );
};

export default LoginPage;
