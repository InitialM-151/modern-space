import { useRouteError } from 'react-router-dom';
import React from 'react';
import Header from '../parts/Header';
import Breadcrumb from '../components/Breadcrumb/Index';
import AsideMenu from '../parts/AsideMenu';
import Footer from '../parts/Footer';
import PageErrorMessage from '../parts/PageErrorMessage';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div>
      <Header theme={'black'} />
      <Breadcrumb
        list={[
          { url: '/', name: 'Home' },
          { url: '/categories/912892', name: 'Office Rome' },
          { url: '/categories/912892/products/1738272', name: 'Details' },
        ]}
      />
      <PageErrorMessage title={error.statusText} body={error.message} />
      <AsideMenu />
      <Footer />
    </div>
  );
}
