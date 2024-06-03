import { FC } from 'react';
import AuthLayout from './layouts/AuthLayout';
import Container from '@/components/UI/Container/Container';
import Title, { TitleSize } from '@/components/UI/Title/Title';
import Auth from '@/components/Auth/Auth';
// import LoginForm from '@/components/Auth/LoginForm';

const PageAuth: FC = () => {
  return (
    <AuthLayout>
      <Container>
        <Title size={TitleSize.H1} className="text-teal-500 text-3xl  sm:text-5xl lg:text-7xl text-left pb-10">
          <span className="text-nowrap text-teal-500">The Best Chat Company </span>  welcome <strong>you</strong>
        </Title>
        <Auth />
        {/* <LoginForm /> */}
      </Container>
    </AuthLayout>
  );
};

export default PageAuth;
