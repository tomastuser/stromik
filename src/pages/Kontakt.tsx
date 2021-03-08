import React from 'react';
import caraNadpis from '../public/cara_nadpis.png';
import Layout from '../components/Layout';
import ContentImportSmall from '../components/ContentImportSmall';

function Kontakt() {
  return (
    <Layout title='Kontakt'>
      <div className='mainTextCont'>
        <div className='mainText'>
          <div className='zakladKontakt'>
            <h1 className='nazev'>Kontakt</h1>
            <img className='caraNadpis' alt='caraNadpis' src={caraNadpis} />
          </div>
          <div className='kontaktContD'>
            <div className='kontaktA'>
              <ContentImportSmall nazev='Kontakt1' />
              <div className='mapouterD'>
                <div className='gmap_canvas'>
                  <iframe
                    id='gmap_canvas'
                    src='https://maps.google.com/maps?q=Host%C4%9Bnick%C3%A1%20626,%20664%2007%20Pozo%C5%99ice&t=&z=15&ie=UTF8&iwloc=&output=embed'
                    scrolling='no'
                    marginHeight={0}
                    marginWidth={0}
                    width={320}
                    height={320}
                    frameBorder={0}
                  />
                </div>
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      '.mapouter{position:relative;text-align:right;height:320px;width:320px;}.gmap_canvas {overflow:hidden;background:none!important;height:320px;width:320px;}',
                  }}
                />
              </div>
            </div>
            <div className='kontaktB'>
              <ContentImportSmall nazev='Kontakt2' />
            </div>
          </div>
          <div className='kontaktContM'>
            <div className='kontaktB'>
              <ContentImportSmall nazev='Kontakt2' />
            </div>
            <div className='kontaktA'>
              <ContentImportSmall nazev='Kontakt1' />
              <div className='mapouterM'>
                <div className='gmap_canvas'>
                  <iframe
                    id='gmap_canvas'
                    src='https://maps.google.com/maps?q=Host%C4%9Bnick%C3%A1%20626,%20664%2007%20Pozo%C5%99ice&t=&z=15&ie=UTF8&iwloc=&output=embed'
                    scrolling='no'
                    marginHeight={0}
                    marginWidth={0}
                    width={320}
                    height={320}
                    frameBorder={0}
                  />
                </div>
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      '.mapouter{position:relative;text-align:right;height:320px;width:320px;}.gmap_canvas {overflow:hidden;background:none!important;height:320px;width:320px;}',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Kontakt;
