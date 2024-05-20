import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import OdrazkyUvod from '../components/Uvod/OdrazkyUvod';
import UvodEl from '../components/Uvod/Uvod';
import AktualitaZastupce from '../components/AktualitaZastupce';
import Layout from '../components/Layout';
import { dbContext } from '../utils/dbContext';
import { AktualitaIF } from '../utils/dbInterfaces';
import Loading from '../components/Loading';
// import DialogPopup from '../components/DialogPopup';

function Uvod() {
  const { aktuality } = useContext(dbContext);

  const serazeniOdNejvyssiho = () => {
    return [].slice.call(aktuality).sort((a: AktualitaIF, b: AktualitaIF) => {
      return Number(b.id) - Number(a.id);
    });
  };
  return (
    <Layout title='Úvodní strana'>
      <div className='pozadiFixed'>
        <img
          src='https://lesnikavyl.cz/images/pozadiFixedStromik.jpg'
          alt='pozadiFixed'
        />
      </div>
      <div className='Uvod'>
        <div className='uvodAktuality'>
          <UvodEl />
          <div className='aktualityPrehledUvod'>
            <h1>Co je u nás nového?</h1>
            {aktuality && aktuality.length > 0 ? (
              <div>
                <div className='aktuality'>
                  {serazeniOdNejvyssiho()
                    .slice(0, 3)
                    .map((aktualita: AktualitaIF, index: number) => (
                      <AktualitaZastupce
                        key={aktualita.id}
                        aktualita={aktualita}
                        pozadi={`aktualitaPozadi${index + 1}`}
                      />
                    ))}
                </div>
                <br />
                <Link
                  className='button'
                  style={{
                    width: '15%',
                    padding: '0.8rem 1.8rem 0.8rem 1.8rem',
                    minWidth: '260px',
                  }}
                  to='/aktuality'
                >
                  Všechny příspěvky
                </Link>
              </div>
            ) : (
              <Loading />
            )}
          </div>
        </div>
        <div className='pozadiPrazdneContainer'>
          <div className='pozadiPrazdne'>
            <OdrazkyUvod />
          </div>
        </div>
      </div>
      {/* <DialogPopup /> */}
    </Layout>
  );
}

export default Uvod;
