import React from 'react';
import Header from '../parts/Header';
import Breadcrumb from '../components/Breadcrumb/Index';
import AsideMenu from '../parts/AsideMenu';
import Footer from '../parts/Footer';
import ProductDetail from '../parts/Details/ProductDetail';
import Suggestion from '../parts/Details/Suggestion';

export default function Details() {
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
      <ProductDetail />
      <Suggestion />
      <AsideMenu />
      <Footer />
    </div>
  );
}
