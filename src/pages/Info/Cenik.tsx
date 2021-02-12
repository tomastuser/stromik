import React from 'react';
import ContentImport from '../../components/ContentImport';
import FotoCont from '../../components/FotoCont';
import Layout from '../../components/Layout';
import Zaklad from '../../components/Zaklad';

const Cenik = () => {
  return (
    <Layout title='Ceník'>
      <div className='mainTextCont'>
        <div className='mainText'>
          <Zaklad nazev='Ceník' />
          <ContentImport nazev='Ceník' />
          <FotoCont name='cenik.jpg' alt='Cenik' />
        </div>
      </div>
    </Layout>
  );
};

export default Cenik;
