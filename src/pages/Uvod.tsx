import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import OdrazkyUvod from '../components/Uvod/OdrazkyUvod';
import UvodSlider from '../components/Uvod/UvodSlider';
import Andel from '../components/Uvod/Andel';
import AktualitaZastupce from '../components/AktualitaZastupce';
import Layout from '../components/Layout';
import { dbContext } from '../utils/dbContext';
import { AktualitaIF } from '../utils/dbInterfaces';

function Uvod() {
  const { aktuality } = useContext(dbContext);

  const serazeniOdNejvyssiho = () => {
    return [].slice.call(aktuality).sort((a: AktualitaIF, b: AktualitaIF) => {
      return Number(b.id) - Number(a.id);
    });
  };
  return (
    <Layout title='Úvodní strana'>
      <div className='Uvod'>
        <div className='pozadiFixed'>
          <img
            src='https://res.cloudinary.com/tomastuser/image/upload/v1587637533/aezswjs5y9sb8bds5hyhHD_do5byd.jpg'
            alt=''
          ></img>
        </div>
        <div className='uvodAktuality'>
          <UvodSlider />
          <Andel />

          <h1>Co je u nás nového?</h1>
          {aktuality ? (
            <div
              style={{
                marginBottom: '4vh',
              }}
            >
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
            <div className='loading'>
              <h3>NAHRÁVÁNÍ...</h3>
            </div>
          )}
        </div>
        <div className='pozadiPrazdneContainer'>
          <div className='pozadiPrazdne'>
            <OdrazkyUvod />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Uvod;
