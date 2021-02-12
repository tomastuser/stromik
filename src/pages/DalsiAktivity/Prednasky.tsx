import React from 'react';
import ContentImport from '../../components/ContentImport';
import FotoCont from '../../components/FotoCont';
import Layout from '../../components/Layout';
import Zaklad from '../../components/Zaklad';

const Prednasky = () => {
  return (
    <Layout title='Přednášky'>
      <div className='mainTextCont'>
        <div className='mainText'>
          <Zaklad nazev='Přednášky' />
          <ContentImport nazev='Přednášky' />
          <FotoCont name='prednasky.jpg' alt='Prednasky' />
        </div>
      </div>
    </Layout>
  );
};

export default Prednasky;
