import React from 'react';
import Header from '../parts/Header';
import Hero from '../parts/Hero';
import JustArrived from '../parts/HomePage/JustArrived';
import BrowseRoom from '../parts/HomePage/BrowseRoom';
import Client from '../parts/Client';
import AsideMenu from '../parts/AsideMenu';
import Footer from '../parts/Footer';

export default function HomePage() {
  return (
    <div>
      <Header theme={'white'} postition={'absolute'} />
      <Hero />
      <BrowseRoom />
      <JustArrived />
      <Client />
      <AsideMenu />
      <Footer />
    </div>
  );
}
