import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import Nav from './Nav';
import Footer from './Footer';
import Footer2 from './Footer2';
import ScrollToTop from '../utils/ScrollToTop';

const Layout = ({
  children,
  title = 'LMŠ Mariánka',
}: {
  children: React.ReactNode;
  title: string;
}) => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{`LMŠ Mariánka | Lesní školka v Brně-Líšni - ${title}`}</title>
      </Helmet>
      <header>
        <ScrollToTop />
        <Nav />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
        <Footer2 />
      </footer>
    </HelmetProvider>
  );
};

export default Layout;
