import React from 'react';
import { SettingsOutlined, MoreVert } from '@material-ui/icons';

export default function Text() {
  return (
    <div>
      <div className="text__items">
        <p className="text__heading">To use whatsapp on your computer:</p>

        <p>1. Open Whatsapp on your phone</p>
        <p>
          2. Tap
          <strong>
            {' '}
            Menu
            <i className="icon">
              <MoreVert />
            </i>
          </strong>{' '}
          or{' '}
          <strong>
            Setting{' '}
            <i className="icon">
              <SettingsOutlined />
            </i>
          </strong>{' '}
          and select <strong> Whatsapp Web</strong>
        </p>
        <p>3. Point your point to this screen to capture the code</p>
      </div>
      <a href="/" className="text__link">
        need to help get started?
      </a>
    </div>
  );
}
