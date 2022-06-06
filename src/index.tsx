import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {createServer, Model} from 'miragejs';
import { Provider } from 'react-redux';
import store from './store';


function delay(delayInms: number) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(2);
    }, delayInms);
  });
}

async function sample() {
  console.log('waiting...')
  let delayres = await delay(1200);
  console.log('Finish delay!');
}

createServer({

  models: {
    company: Model,
  },

  seeds(server){
    server.db.loadData({
      company: [
        {
          id:1,
          context: "Dummy context 1",
          questions: "Question 1? Question 2?",
          companies: "Google.com",
          onlySearchWebsiteTitles: false,
          selectMarket: "IT",
        },
        {
          id:2,
          context: "Dummy context 2",
          questions: "Question 3? Question 4?",
          companies: "JPMorgan.com",
          onlySearchWebsiteTitles: false,
          selectMarket: "Bank",
        },
      ]
    })
  },

  routes(){
    this.namespace = 'api';

    this.get('/companies', async (schema, request) => {
      let {page, pageSize} = request.queryParams ? request.queryParams : {page:1, pageSize:10}
      await sample()
      return {
        data: schema.db.company.slice((page-1)*pageSize,page*pageSize),
        page, pageSize, count: schema.db.company.length
      }
    })

    this.post('/companies', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      return schema.db.company.insert(data)
    })
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
