import { FC } from 'react';
import Container from '@/components/UI/Container/Container';
import Title, { TitleSize } from '@/components/UI/Title/Title';
import DefaultLayout from '../layouts/DefaultLayout';
import BtnBase from '@/components/UI/Button/BtnBase/BtnBase';
import { Link } from 'react-router-dom';
import { IBtnColors } from '@/components/UI/Button/BtnBase/IBtn';
import { useAppSelector } from '@/hooks/redux';
import RoutesСonstant from '@/router/constant';
const containerClasses = 'flex h-screen flex-col justify-center';
const mainClasses = 'flex text-center';

const PageAuth: FC = () => {
  const { isAuth } = useAppSelector((state) => state.auth);

  return (
    <DefaultLayout classNameMain={mainClasses} classNameContainer={containerClasses}>
      <Container>
        <Title size={TitleSize.H1} className="text-teal-500 text-3xl sm:text-5xl lg:text-7xl">
          <span className="text-nowrap text-teal-500">
            Oops, why are <strong>you</strong> here ?{' '}
          </span>
        </Title>
        <p className="sm:text-5xl lg:text-7xl text-ce">404</p>
        <div className="flex mt-20 max-w-3xl m-auto">
          {isAuth && (
            <BtnBase
              btnText={RoutesСonstant.BASE}
              className="bg-white border-2 block text-teal-500 mt-7 text-2xl mr-5"
              btnColor={IBtnColors.Blue}
            >
              <Link to={RoutesСonstant.BASE}>homepage</Link>
            </BtnBase>
          )}
          <BtnBase
            btnText="Chat"
            className="bg-white border-2 block text-teal-500 mt-7 text-2xl"
            btnColor={IBtnColors.Blue}
          >
            <Link to={RoutesСonstant.LOGIN}>login page</Link>
          </BtnBase>
        </div>
      </Container>
    </DefaultLayout>
  );
};

export default PageAuth;
