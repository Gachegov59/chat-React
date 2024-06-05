import { FC } from 'react';
import Container from '@/components/UI/Container/Container';
import DefaultLayout from './layouts/DefaultLayout';
import LoaderSpinner from '@/components/UI/Loader/LoaderSpinner/LoaderSpinner';

const PageLoading: FC = () => {
  const containerClasses = 'flex h-screen flex-col justify-center';
  const mainClasses = 'flex ';

  return (
    <DefaultLayout classNameContainer={containerClasses} classNameMain={mainClasses}>
      <Container className='text-center'>
        <LoaderSpinner size={200} />
      </Container>
    </DefaultLayout>
  );
};

export default PageLoading;
