import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Text from './../components/text';
import Barcode from '../components/barcode';

export default function mainPage() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="md" className="container hero">
        <Text />
        <Barcode />
      </Container>
    </>
  );
}
