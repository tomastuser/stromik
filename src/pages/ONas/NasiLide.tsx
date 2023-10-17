import React, { useContext } from 'react';
import Layout from '../../components/Layout';
import Loading from '../../components/Loading';
import ClenTymu from '../../components/Tym/ClenTymu';
import caraNadpis from '../../public/cara_nadpis.png';
import { dbContext } from '../../utils/dbContext';
import { ClenIF } from '../../utils/dbInterfaces';

const NasiLide = () => {
  const { clenove } = useContext(dbContext);

  const serazeniOdNejvyssiho = () => {
    console.log(clenove);
    return [].slice.call(clenove).sort((a: ClenIF, b: ClenIF) => {
      return b.Poradi - a.Poradi;
    });
  };
  return (
    <Layout title='Naši lidé'>
      <div className='mainOstatni'>
        <div className='nasTym'>
          <div className='mainOstatniNadpis'>
            <div className='mainText' style={{ paddingBottom: '5vh' }}>
              <h1 className='nazev'>Náš tým</h1>
              <img className='caraNadpis' alt='caraNadpis' src={caraNadpis} />
            </div>
          </div>
          {clenove && clenove.length > 0 ? (
            <div className='tymContainer'>
              <div className='tym'>
                {serazeniOdNejvyssiho()
                  .reverse()
                  .map((clen: ClenIF) => (
                    <ClenTymu key={`${clen.Poradi} ${clen.id}`} clen={clen} />
                  ))}
              </div>
            </div>
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </Layout>
  );
};

export default NasiLide;
