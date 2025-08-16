import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductPage from "./pages/ProductPage"; // Your main page
import PrivacyPolicy from "./pages/PrivacyPolicy";
import UserAgreement from "./pages/UserAgreement";
import NotFoundPage from "./pages/NotFoundPage"; // <-- IMPORT THE NEW 404 PAGE
import ForgotPasswordSupport from "./pages/ForgotPasswordSupport";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <Router>
      <Routes>
   
        {/* Your existing routes */}
        <Route path="/" element={<ProductPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/user-agreement" element={<UserAgreement />} />
        <Route
          path="/forgot-password-support"
          element={<ForgotPasswordSupport />}
        />

        {/* This is the catch-all 404 route. It MUST be the last route. */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
           <Toaster 
        position="top-center" // You can change the position
        reverseOrder={false}
        toastOptions={{
          // Define default options
          className: '',
          duration: 5000,
          style: {
            background: '#363636',
            color: '#fff',
          },
          // Default options for specific types
          success: {
            duration: 3000,
            theme: {
              primary: 'green',
              secondary: 'black',
            },
          },
        }}
      />
    </Router>
  );
}

export default App;
