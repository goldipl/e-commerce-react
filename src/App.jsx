import "./App.css";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { Toast } from "./components/toast/Toast";
import { ScrollToTop } from "./components/common/ScrollToTop";
import { Home } from "./pages/home/Home";
import { CategoryPage, SalePage } from "./pages/category/CategoryPage";
import { SearchPage } from "./pages/search/SearchPage";
import { Product } from "./pages/product/Product";
import { Cart } from "./pages/cart/Cart";
import { Checkout } from "./pages/checkout/Checkout";
import { OrderConfirmation } from "./pages/order/OrderConfirmation";
import { Wishlist } from "./pages/wishlist/Wishlist";
import { Help } from "./pages/help/Help";
import { NotFound } from "./pages/notfound/NotFound";
import { ShopContextProvider } from "./context/ShopContext";
import { BASE_PATH } from "./data/catalog";

function App() {
  return (
    <div className="app-container">
      <ShopContextProvider>
        <HashRouter>
          <ScrollToTop />
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Navigate to={`${BASE_PATH}/`} replace />} />
              <Route path={`${BASE_PATH}/`} element={<Home />} />
              <Route path={`${BASE_PATH}/books`} element={<CategoryPage categoryKey="books" />} />
              <Route path={`${BASE_PATH}/games`} element={<CategoryPage categoryKey="games" />} />
              <Route path={`${BASE_PATH}/t-shirts`} element={<CategoryPage categoryKey="tshirts" />} />
              <Route path={`${BASE_PATH}/sale`} element={<SalePage />} />
              <Route path={`${BASE_PATH}/search`} element={<SearchPage />} />
              <Route path={`${BASE_PATH}/product/:id`} element={<Product />} />
              <Route path={`${BASE_PATH}/cart`} element={<Cart />} />
              <Route path={`${BASE_PATH}/checkout`} element={<Checkout />} />
              <Route path={`${BASE_PATH}/order/:number`} element={<OrderConfirmation />} />
              <Route path={`${BASE_PATH}/wishlist`} element={<Wishlist />} />
              <Route path={`${BASE_PATH}/help/:topic`} element={<Help />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <Toast />
        </HashRouter>
      </ShopContextProvider>
    </div>
  );
}

export default App;
