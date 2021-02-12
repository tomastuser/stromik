import React from 'react';
import ContentImport from '../../components/ContentImport';
import FotoCont from '../../components/FotoCont';
import Layout from '../../components/Layout';
import Zaklad from '../../components/Zaklad';

const Zazemi = () => {
  return (
    <Layout title='Zázemí'>
      <div className='mainTextCont'>
        <div className='mainText'>
          <Zaklad nazev='Zázemí' />
          <ContentImport nazev='Zázemí 1' />
          <FotoCont name='zazemi1.jpg' alt='Zazemi 1' />
          <ContentImport nazev='Zázemí 2' />
          <FotoCont name='zazemi2.jpg' alt='Zazemi 2' />
        </div>
      </div>
    </Layout>
  );
};

export default Zazemi;
