import React from 'react';
import Header from '../parts/Header';
import Breadcrumb from '../components/Breadcrumb/Index';
import AsideMenu from '../parts/AsideMenu';
import Footer from '../parts/Footer';
import ShoppingCart from '../parts/Cart/ShoppingCart';
import CartDetail from '../parts/Cart/CartDetail';

export default function Cart() {
  return (
    <div>
      <Header theme={'black'} />
      <Breadcrumb
        list={[
          { url: '/', name: 'Home' },
          { url: '/cart', name: 'Shopping Cart' },
        ]}
      />
      <section className='md:py-16'>
        <div className='container mx-auto px-4'>
          <div className='flex -mx-4 flex-wrap'>
            <ShoppingCart />
            <CartDetail />
          </div>
        </div>
      </section>
      <AsideMenu />
      <Footer />
    </div>
  );
}
