import React from 'react';
import Header from '../parts/Header';
import Hero from '../parts/HomePage/Hero';
import JustArrived from '../parts/HomePage/JustArrived';
import BrowseRoom from '../parts/HomePage/BrowseRoom';
import Client from '../parts/Client';
import AsideMenu from '../parts/AsideMenu';
import Footer from '../parts/Footer';
import useScrollAnchor from '../hooks/useScrollAnchor';
import useModalDOM from '../hooks/useModalDOM';

export default function HomePage() {
  useScrollAnchor();
  useModalDOM();

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
