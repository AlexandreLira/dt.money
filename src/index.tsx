import React from 'react';
import ReactDOM from 'react-dom/client';
import { createServer, Model } from 'miragejs'
import { App } from './App';

createServer({
  models: {
    transaction: Model
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Comprar de mouse',
          amount: 400,
          type: 'deposit', 
          category: 'Food',
          createdAt: new Date('2022-02-02')
        },
        {
          id: 2,
          title: 'Comprar de mouse',
          amount: 400,
          type: 'withdraw', 
          category: 'Food',
          createdAt: new Date('2022-02-02')
        },
      ]
    })
  },

  routes(){
    this.namespace = 'api'

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      return schema.create('transaction', data)
    })
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
