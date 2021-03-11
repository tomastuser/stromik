import React from 'react';
import ContentImport from '../../components/ContentImport';
import ContentImportSmall from '../../components/ContentImportSmall';
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
          <FotoCont name='cenik1.jpg' alt='Cenik' />
          <ContentImportSmall nazev='Ceník 2' />
          <FotoCont name='cenik2.jpg' alt='Cenik' />
        </div>
      </div>
    </Layout>
  );
};

export default Cenik;
