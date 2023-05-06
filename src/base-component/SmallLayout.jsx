import React from 'react';

import { getConfig } from '@edx/frontend-platform';
import { useIntl } from '@edx/frontend-platform/i18n';
import { Hyperlink, Image } from '@edx/paragon';
import classNames from 'classnames';
import backg from '../base-component/images/backg.png';

import messages from './messages';

const SmallLayout = () => {
  const { formatMessage } = useIntl();

  return (
    <span className="bg-primary-400 w-100">
      <div className="col-md-12 small-screen-top-stripe" >
      <div className="min-vh-100 align-items-center" style={{display:"flex",justifyContent:"end"}}>
        <img className="logos " src={backg} alt="background imaage" style={{height:"350px"}}/>   
      
        </div>
      </div>
    </span>
  );
};

export default SmallLayout;
