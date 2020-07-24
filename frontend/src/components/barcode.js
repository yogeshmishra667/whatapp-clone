import React from 'react';
import logo from '../images/qr.png';
export default function Barcode() {
  return (
    <div className="qrcode">
      <img src={logo} alt="QR" />
      <div className="check">
        <input type="checkbox" />
        &nbsp; Keep me signed in
      </div>
    </div>
  );
}
