import React, { useContext } from 'react';
import { dbContext } from '../../utils/dbContext';
import Layout from '../../components/Layout';
import Zaklad from '../../components/Zaklad';
import Loading from '../../components/Loading';
import { SponzorIF } from '../../utils/dbInterfaces';

const Sponzori = () => {
  const { sponzori } = useContext(dbContext);
  const sponzoriSorted = () => {
    return [].slice.call(sponzori).sort((a: SponzorIF, b: SponzorIF) => {
      return Number(a.id) - Number(b.id);
    });
  };
  return (
    <Layout title='Podporují nás'>
      <div className='mainTextCont'>
        <div className='mainText'>
          <Zaklad nazev='Podporují nás' />
          <div className='sponzoriCont'>
            {sponzori && sponzori.length > 0 ? (
              sponzoriSorted().map((sponzor: SponzorIF) => (
                <div>
                  <a href={sponzor.Nazev}>
                    <img
                      style={{ height: sponzor.Vyska ? sponzor.Vyska : '5vw' }}
                      alt=''
                      src={sponzor.Image.url}
                    ></img>
                  </a>
                </div>
              ))
            ) : (
              <Loading />
            )}
            {/* <div>
              <a href='http://www.brno-lisen.cz/'>
                <img
                  style={{ height: '5vw' }}
                  alt=''
                  src='https://res.cloudinary.com/tomastuser/image/upload/v1587221222/Brno-L%C3%AD%C5%A1e%C5%88_znak.svg_bdbwus.png'
                ></img>
                <h3>Brno-Líšeň</h3>
              </a>
            </div>
            <div>
              <a href='https://www.brno.cz/'>
                <img
                  style={{ height: '5vw', padding: '2vh' }}
                  alt=''
                  src='https://upload.wikimedia.org/wikipedia/commons/a/a9/Logo_Brno.svg'
                ></img>
              </a>
            </div>
            <div>
              <a href='http://www.msmt.cz/'>
                <img
                  style={{ height: '5vw' }}
                  alt=''
                  src='http://www.lesnimarianka.cz/Data/Sites/1/media/logo_msmt.jpg'
                ></img>
              </a>
            </div>
            <div>
              <a href='https://foundation.avast.com/'>
                <img
                  style={{ height: '5vw' }}
                  alt=''
                  src='http://www.lesnimarianka.cz/Data/Sites/1/media/avastlogo.png'
                ></img>
              </a>
            </div>
            <div>
              <a href='http://www.livebox.cz/'>
                <img
                  style={{ height: '5vw', padding: '2vh' }}
                  alt=''
                  src='http://www.lesnimarianka.cz/Data/Sites/1/media/logo---livebox.gif'
                ></img>
              </a>
            </div>
            <div>
              <a href='http://www.buranteatr.cz/'>
                <img
                  style={{ height: '5vw' }}
                  alt=''
                  src='http://www.lesnimarianka.cz/Data/Sites/1/media/logo.png'
                ></img>
              </a>
            </div>
            <div>
              <a href='http://www.toactivity.cz/'>
                <img
                  style={{ height: '5vw', padding: '1vh' }}
                  alt=''
                  src='http://www.lesnimarianka.cz/Data/Sites/1/media/to-activity.png'
                ></img>
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Sponzori;
