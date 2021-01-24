import React from 'react';
import ContentImport from '../../components/ContentImport';
import Layout from '../../components/Layout';
import Zaklad from '../../components/Zaklad';

const Zazemi = () => {
  return (
    <Layout title='Zázemí'>
      <div className='mainTextCont'>
        <div className='mainText'>
          <Zaklad nazev='Zázemí' />
          <ContentImport nazev='Zázemí' />
          {/* <FotoCont name='KDOJSME.jpg' alt='Kdo jsme' /> */}
        </div>
      </div>
    </Layout>
  );
};

export default Zazemi;
