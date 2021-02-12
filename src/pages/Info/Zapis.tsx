import React from 'react';
import ContentImport from '../../components/ContentImport';
import FotoCont from '../../components/FotoCont';
import Layout from '../../components/Layout';
import Zaklad from '../../components/Zaklad';

const Zapis = () => {
  return (
    <Layout title='Zápis'>
      <div className='mainTextCont'>
        <div className='mainText'>
          <Zaklad nazev='Zápis' />
          <ContentImport nazev='Zápis' />
          <FotoCont name='zapis.jpg' alt='Zapis' />
        </div>
      </div>
    </Layout>
  );
};

export default Zapis;
