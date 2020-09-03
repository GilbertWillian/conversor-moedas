import React from 'react';
import ReactDOM from 'react-dom';
import ConversorMoedas from './Conversor-moedas';
import { render } from '@testing-library/react';

it ('deve renderizar o componente sem erros', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ConversorMoedas />, div);
  ReactDOM.unmountComponentAtNode(div);
})