import React from 'react';
import ContentImport from '../../components/ContentImport';
import FotoCont from '../../components/FotoCont';
import Layout from '../../components/Layout';
import Zaklad from '../../components/Zaklad';

const Projekty = () => {
  return (
    <Layout title='Projekty'>
      <div className='mainTextCont'>
        <div className='mainText'>
          <Zaklad nazev='Projekty' />
          <ContentImport nazev='Projekty 1' />
          <FotoCont name='projekty.jpg' alt='Projekty 1' />
        </div>
      </div>
    </Layout>
  );
};

export default Projekty;
