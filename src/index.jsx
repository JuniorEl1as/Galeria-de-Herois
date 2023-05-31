import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PaginaHerois from './paginas/paginaInicial';
import SobreHeroi from './componentes/SobreHeroi';

const Routes = createBrowserRouter([
  {
    path: '/',
    element: <PaginaHerois />
  },
  {
    path: '/descricao/Angela',
    element: <SobreHeroi id={1} />
  },
  {
    path: '/descricao/Arhtur',
    element: <SobreHeroi id={2} />
  },
  {
    path: '/descricao/Ata',
    element: <SobreHeroi id={3} />
  },
  {
    path: '/descricao/Athena',
    element: <SobreHeroi id={4} />
  },
  {
    path: '/descricao/Athena',
    element: <SobreHeroi id={4} />
  },
  {
    path: '/descricao/Bai Qi',
    element: <SobreHeroi id={5} />
  },
  {
    path: '/descricao/Bian Que',
    element: <SobreHeroi id={6} />
  },
  {
    path: '/descricao/Cai Yan',
    element: <SobreHeroi id={7} />
  },
  {
    path: '/descricao/Cao Cao',
    element: <SobreHeroi id={8} />
  },
  {
    path: '/descricao/Consorte Yu',
    element: <SobreHeroi id={9} />
  },
  {
    path: '/descricao/Daji',
    element: <SobreHeroi id={10} />
  },
  {
    path: '/descricao/Jing',
    element: <SobreHeroi id={13} />
  },
  {
    path: '/descricao/Han-Xin',
    element: <SobreHeroi id={14} />
  },
  {
    path: '/descricao/Di-Renjie',
    element: <SobreHeroi id={11} />
  },
  {
    path: '/descricao/Diaochan',
    element: <SobreHeroi id={15} />
  },
  {
    path: '/descricao/Dian-Wei',
    element: <SobreHeroi id={12} />
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={Routes} />
  </React.StrictMode>
);
reportWebVitals();
