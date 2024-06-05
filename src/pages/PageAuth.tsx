import { FC } from 'react';
import Container from '@/components/UI/Container/Container';
import Title, { TitleSize } from '@/components/UI/Title/Title';
import Auth from '@/components/Auth/Auth';
import DefaultLayout from './layouts/DefaultLayout';

const PageAuth: FC = () => {
  const containerClasses = 'flex h-screen flex-col';
  const mainClasses = 'flex';

  return (
    <DefaultLayout classNameContainer={containerClasses} classNameMain={mainClasses}>
      <Container>
        <Title size={TitleSize.H1} className="text-teal-500 text-3xl sm:text-5xl lg:text-7xl text-left pb-10">
          <span className="text-nowrap text-teal-500">The Best Chat Company </span> welcome <strong>you</strong>!
        </Title>
        <Auth />
      </Container>
    </DefaultLayout>
  );
};

export default PageAuth;
