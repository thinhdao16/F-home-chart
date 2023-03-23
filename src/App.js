import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { AuthContextProvider } from './components/context/AuthContext';
import Protected from './components/context/Protected';
import Product from './pages/product/Product';


function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route path='home' >
                <Route index element={<Protected><Home /></Protected>}/>
                <Route path='product' element={<Product />} />
              </Route>

              <Route exact path="" element={<Login />} />

              <Route path="users">
                <Route index element={<Protected>
                  <List /></Protected>} />
                <Route path=":userId" element={<Single />} />
                <Route path="new" element={<New />} />
              </Route>

              <Route path="products">
                <Route index element={<List />} />
                <Route path=":productId" element={<Single />} />
                <Route path="new" element={<New />} />
              </Route>

            </Route>
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </div>
  );
}

export default App;
