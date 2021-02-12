import React from 'react';
import ContentImport from '../../components/ContentImport';
import FotoCont from '../../components/FotoCont';
import Layout from '../../components/Layout';
import Zaklad from '../../components/Zaklad';

const Krouzky = () => {
  return (
    <Layout title='Kroužky'>
      <div className='mainTextCont'>
        <div className='mainText'>
          <Zaklad nazev='Kroužky' />
          <ContentImport nazev='Kroužky' />
          <FotoCont name='krouzky.jpg' alt='Krouzky' />
        </div>
      </div>
    </Layout>
  );
};

export default Krouzky;
