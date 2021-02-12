import React from 'react';
import ContentImport from '../../components/ContentImport';
import FotoCont from '../../components/FotoCont';
import Layout from '../../components/Layout';
import Zaklad from '../../components/Zaklad';

const Dokumenty = () => {
  return (
    <Layout title='Dokumenty'>
      <div className='mainTextCont'>
        <div className='mainText'>
          <Zaklad nazev='Dokumenty' />
          <ContentImport nazev='Dokumenty' />
          <FotoCont name='dokumenty.jpg' alt='Dokumenty' />
        </div>
      </div>
    </Layout>
  );
};

export default Dokumenty;
