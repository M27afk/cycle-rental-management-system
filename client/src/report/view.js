import React from 'react';
import ReactDOM from 'react-dom';
import { PDFViewer } from '@react-pdf/renderer';
import MyDocument from './document';

const View = () => (
  <PDFViewer>
    <MyDocument />
  </PDFViewer>
);

export default View();
