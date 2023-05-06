import React from 'react';

import { getConfig } from '@edx/frontend-platform';
import { useIntl } from '@edx/frontend-platform/i18n';
import { Hyperlink, Image } from '@edx/paragon';
import classNames from 'classnames';

import messages from './messages';
import backg from '../base-component/images/backg.png';


const MediumLayout = () => {
  const { formatMessage } = useIntl();

  return (
    <>
      <div className="w-50" >
     <div className="min-vh-100 align-items-center" style={{display:"flex",justifyContent:"end"}}>
        <img className="logos " src={backg} alt="background imaage" style={{height:"350px"}}/>   
      
        </div>
        </div>

    </>
  );
};

export default MediumLayout;
