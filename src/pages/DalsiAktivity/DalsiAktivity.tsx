import React from 'react';
import Layout from '../../components/Layout';
import ContentImport from '../../components/ContentImport';

const DalsiAktivity = () => {
  return (
    <Layout title='Aktivity Kavylu'>
      <div className='mainTextCont'>
        <div className='mainText'>
          <ContentImport nazev='Aktivity Kavylu' />
        </div>
      </div>
    </Layout>
  );
};

export default DalsiAktivity;
