import { FC } from 'react';
import Container from '@/components/UI/Container/Container';
import Title, { TitleSize } from '@/components/UI/Title/Title';
import Auth from '@/components/Auth/Auth';
import DefaultLayout from './layouts/DefaultLayout';

const PageAuth: FC = () => {
  const containerClasses = 'flex flex-col h-full';
  const mainClasses = 'flex h-full';
  const container = 'flex flex-col';

  return (
    <DefaultLayout classNameContainer={containerClasses} classNameMain={mainClasses}>
      <Container className={container}>
        <Title size={TitleSize.H1} className="text-teal-500 text-3xl sm:text-5xl lg:text-7xl text-center pb-4">
          <span className="text-nowrap text-teal-500">The Best Chat Company </span> welcomes <strong>you</strong>!
        </Title>
        <Auth />
      </Container>
    </DefaultLayout>
  );
};

export default PageAuth;
