import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faBusAlt } from '@fortawesome/free-solid-svg-icons';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import girlanda from '../public/girlmari.png';

const Footer = () => {
  return (
    <div className='Footer'>
      <div className='girlanda'>
        <img src={girlanda} alt='girlanda' />
      </div>
      <div className='FooterD'>
        <div className='footS'>
          <a href='https://www.lesnims.cz/lesni-ms/standardy-kvality.html'>
            <img
              src='https://res.cloudinary.com/tomastuser/image/upload/v1585867492/qdc5glp7boyre6m2sd6p.png'
              alt=''
            ></img>
          </a>
        </div>
        <div className='footS'>
          <a href='http://www.lesnims.cz/'>
            <img
              src='http://www.lesnimarianka.cz/Data/Sites/1/media/alms_logo_transparentni.gif'
              alt=''
            ></img>
          </a>
        </div>
        <div className='footerInfo'>
          <ul>
            <li>
              <a href='mailto:info@lesnimarianka.cz'>
                <h4>
                  <FontAwesomeIcon icon={faPaperPlane} size='1x' fixedWidth />
                  {'  '}
                  info@lesnimarianka.cz
                </h4>
              </a>
            </li>
            <li>
              <h4>
                <FontAwesomeIcon icon={faHome} size='1x' fixedWidth />{' '}
                Brno-Líšeň, ulice Samoty
              </h4>
            </li>
            <li>
              <h4>
                <FontAwesomeIcon icon={faBusAlt} size='1x' fixedWidth /> Bus č.
                58, zastávka Kubelíkova
              </h4>
            </li>
            <li>
              <a href='tel:+420777145343'>
                <h4>
                  <FontAwesomeIcon icon={faPhone} size='1x' fixedWidth /> 777
                  145 343
                </h4>
              </a>
            </li>
            <li>
              <h4>
                <a href='https://www.facebook.com/spolekKavyl/'>
                  <FontAwesomeIcon icon={faFacebookF} size='1x' fixedWidth />
                  &nbsp; spolekKavyl
                </a>
              </h4>
            </li>
          </ul>
        </div>
        <div className='footS'>
          <a href='https://www.darujme.cz/projekt/1200844'>
            <img
              src='http://www.lesnimarianka.cz/Data/Sites/1/media/darujme_logo.png'
              alt=''
            ></img>
          </a>
        </div>
        <div className='footS'>
          <a href='http://bit.ly/Podporuji-Kavyl'>
            <img
              src='http://lesnikvitek.cz/Data/Sites/1/media/uvodni/2017/givt_box_211_211.jpg'
              alt=''
            ></img>
          </a>
        </div>
      </div>
      <div className='FooterM'>
        <div className='footerInfo'>
          <ul>
            <li>
              <a href='mailto:info@lesnimarianka.cz'>
                <h4>
                  <FontAwesomeIcon icon={faPaperPlane} size='1x' fixedWidth />
                  {'  '}
                  info@lesnimarianka.cz
                </h4>
              </a>
            </li>
            <li>
              <h4>
                <FontAwesomeIcon icon={faHome} size='1x' fixedWidth />{' '}
                Brno-Líšeň, ulice Samoty
              </h4>
            </li>
            <li>
              <h4>
                <FontAwesomeIcon icon={faBusAlt} size='1x' fixedWidth /> Bus č.
                58, zastávka Kubelíkova
              </h4>
            </li>
            <li>
              <a href='tel:+420777145343'>
                <h4>
                  <FontAwesomeIcon icon={faPhone} size='1x' fixedWidth /> 777
                  145 343
                </h4>
              </a>
            </li>
            <li>
              <h4>
                <a href='https://www.facebook.com/spolekKavyl/'>
                  <FontAwesomeIcon icon={faFacebookF} size='1x' fixedWidth />
                  &nbsp; spolekKavyl
                </a>
              </h4>
            </li>
          </ul>
        </div>
        <div>
          <a href='https://www.lesnims.cz/lesni-ms/standardy-kvality.html'>
            <img
              src='https://res.cloudinary.com/tomastuser/image/upload/v1585867492/qdc5glp7boyre6m2sd6p.png'
              alt=''
            ></img>
          </a>
        </div>
        <div>
          <a href='http://www.lesnims.cz/'>
            <img
              src='http://www.lesnimarianka.cz/Data/Sites/1/media/alms_logo_transparentni.gif'
              alt=''
            ></img>
          </a>
        </div>
        <div>
          <a href='https://www.darujme.cz/projekt/1200844'>
            <img
              src='http://www.lesnimarianka.cz/Data/Sites/1/media/darujme_logo.png'
              alt=''
            ></img>
          </a>
        </div>
        <div>
          <a href='http://bit.ly/Podporuji-Kavyl'>
            <img
              src='http://lesnikvitek.cz/Data/Sites/1/media/uvodni/2017/givt_box_211_211.jpg'
              alt=''
            ></img>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
