import React from 'react';
import Header from '../parts/Header';
import Breadcrumb from '../components/Breadcrumb/Index';
import AsideMenu from '../parts/AsideMenu';
import Footer from '../parts/Footer';
import Success from '../parts/Success';

export default function Congratulation() {
  return (
    <div>
      <Header theme={'black'} />
      <Breadcrumb
        list={[
          { url: '/', name: 'Home' },
          { url: '/congratulation', name: 'Congratulation' },
        ]}
      />

      <Success />
      <AsideMenu />
      <Footer />
    </div>
  );
}
