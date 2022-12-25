import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routerConfig from './config/routerConfig'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          {
            routerConfig.map((router, index) => {
              const Layout = router.layout;
              const Page = router.component;

              return (
                <Route 
                  key={index}
                  path={router.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                />
              )
            })
          }
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
