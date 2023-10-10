import { useRouteError } from 'react-router-dom';
import React from 'react';
import Header from '../parts/Header';
import Breadcrumb from '../components/Breadcrumb/Index';
import AsideMenu from '../parts/AsideMenu';
import Footer from '../parts/Footer';

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
      <section className=''>
        <div className='container mx-auto min-h-screen'>
          <div className='flex flex-col items-center justify-center'>
            <div className='w-full md:w-4/12 text-center'>
              <img src='./images/content/404.png' alt='congrats illustration' />
              <h2 className='text-3xl font-semibold mb-6'>Error!</h2>
              <p className='text-lg mb-12'>
                {' '}
                <i>{error.statusText || error.message}</i>
              </p>
              <a
                href={'/'}
                className='text-gray-900 bg-red-200 focus:outline-none w-full py-3 rounded-full text-lg focus:text-black transition-all duration-200 px-8 cursor-pointer'>
                Back to Shop
              </a>
            </div>
          </div>
        </div>
      </section>
      <AsideMenu />
      <Footer />
    </div>
  );
}
