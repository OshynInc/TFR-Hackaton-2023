import React from 'react';
import { Text, useSitecoreContext } from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  AlertTitle: string;
  AlertMessage: string;
}

type AlertPopupProps = {
  fields: Fields;
};

export const AlertPopup = (props: AlertPopupProps): JSX.Element => {
  const { sitecoreContext } = useSitecoreContext();

  if (props.fields) {
    const { AlertTitle, AlertMessage } = props.fields;

    return (
      <div className='alert-popup'>
        <div className='alert-popup-content'>
          <div className='alert-popup-header'>
            <Text tag='h2' className='alert-popup-title' field={AlertTitle} />
          </div>
          <div className='alert-popup-body'>
            <Text
              tag='p'
              className='alert-popup-message'
              field={AlertMessage}
            />
          </div>
        </div>
        {sitecoreContext.pageEditing ? (
          <div className='alert-popup-edit-hint'>
            Please fill out the Alert Title and Alert Message fields.
          </div>
        ) : null}
      </div>
    );
  }

  return null;
};
