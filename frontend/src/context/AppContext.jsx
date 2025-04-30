import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyProducts } from "../assets/assets";
import toast from "react-hot-toast";

export const AppContext = createContext();

// Create a context provider component
// This component will wrap the entire application and provide the context value to all components
export const AppContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const currency = import.meta.env.VITE_CURRENCY;
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showUserLogin, setShowUserLogin] = useState(false);
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState({});
  const [searchQuery, setSearchQuery] = useState({});

  // Function to fetch products from the server or API
  // In this case, we are using dummy data from the assets folder
  const fetchProducts = async () => {
    setProducts(dummyProducts);
  };

  //Add to cart function
  const addToCart = (productId) => {
    let cartData = structuredClone(cartItems);
    if (cartData[productId]) {
      cartData[productId] += 1;
    } else {
      cartData[productId] = 1;
    }
    setCartItems(cartData);
    toast.success("Added to cart successfully!", {
      style: {
        background: "#333",
        color: "#fff",
        fontSize: "16px",
      },
      duration: 2000,
      iconTheme: {
        primary: "#fff",
        secondary: "#000",
      },
    });
  };

  // Update the Cartitems
  const updateCartItems = (productId, quantity) => {
    let cartData = structuredClone(cartItems);
    cartData[productId] = quantity;
    setCartItems(cartData);
    toast.success("Cart updated successfully!", {
      style: {
        background: "#333",
        color: "#fff",
        fontSize: "16px",
      },
      duration: 2000,
      iconTheme: {
        primary: "#fff",
        secondary: "#000",
      },
    });
  }

  // Remove item from cart
  const removeFromCart = (productId) => {
    let cartData = structuredClone(cartItems);
    if (cartData[productId]) {
      cartData[productId] -= 1;
      if(cartData[productId]===0){
        delete cartData[productId];
      }
    }
    toast.success("Removed from cart successfully!", {
      style: {
        background: "#333",
        color: "#fff",
        fontSize: "16px",
      },
      duration: 2000,
      iconTheme: {
        primary: "#fff",
        secondary: "#000",
      },
    });
    setCartItems(cartData);
  }

  // Cart item count
  const getCartCount = ()=>{
    let totalCount = 0;
    for(const   item in cartItems){
      totalCount += cartItems[item];
    }
    return totalCount;
  }

  // Cart item total price
  const getCartTotal = ()=>{
    let totalPrice = 0;
    for(const item in cartItems){
      const productInfo = products.find((product)=>product._id === item);
      if(cartItems[item] > 0){
        totalPrice += productInfo.offerPrice * cartItems[item];
      }
    }
    return Math.floor(totalPrice * 100) / 100;
  }


  useEffect(() => {
    fetchProducts();
  }, []);

  const value = {
    navigate,
    user,
    setUser,
    isAdmin,
    setIsAdmin,
    showUserLogin,
    setShowUserLogin,
    products,
    currency,
    cartItems,
    addToCart,
    updateCartItems,
    removeFromCart,
    searchQuery,
    setSearchQuery,
    getCartCount,
    getCartTotal

   };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// Create a custom hook to use the AppContext
// This hook will allow us to easily access the context value in any component
export const useAppContext = () => {
  return useContext(AppContext);
};
