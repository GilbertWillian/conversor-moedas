import React from 'react';
import ReactDOM from 'react-dom';
import ConversorMoedas from './Conversor-moedas';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import axiosMock from 'axios';

describe('Teste do componente de conversão de moedas', () => {
  
  it ('deve renderizar o componente sem erros', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ConversorMoedas />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  
  it('deve simular uma conversão de moedas', async () => {
    const { findByTestId, getByTestId } = render(<ConversorMoedas />);
    axiosMock.get.mockResolvedValueOnce({
      data: {success: true, rates: { BRL: 4.564293, USD: 1.101049}}
    });
    fireEvent.click(getByTestId('btn-converter'));
    const modal = await findByTestId('modal');
    expect(axiosMock.get).toHaveBeenCalledTimes(1);
    expect(modal).toHaveTextContent('1 BRL = 0.24 USD');
  })
});


/** Comentários
 *  usamos findByTestId pois ele aceita requisições assincronas, ja que o Axios retorna uma requisição assincrona.
 *  getByTestId não foi usado pos lidamos com uma requisição assincrona
 * 
 *  await = usado para indicar que a requisição é assincrona, e o sistema deve esperar por essa resposta.
 *  sync = usado na função com requisições assincronas, para indicar que nela, tem algo assincrono.
 */
 