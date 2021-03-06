export const clearUser = () => {
  localStorage.removeItem('userInfo');
};
export const clearCart = () => {
    localStorage.removeItem('cartItems');
}

export const getCartItems = () => {
  const cartItems = localStorage.getItem('cartItems')
    ? JSON.parse(localStorage.getItem('cartItems'))
    : [];
  return cartItems;
};

export const setCartItems = (cartItems) => {
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
};

export const setUserInfo = ({
  id = '',
  firstname = '',
  lastname = '',
  email = '',
  password = '',
  token = '',
  isAdmin = false,
}) => {
  localStorage.setItem(
    'userInfo',
    JSON.stringify({
      id,
      firstname,
      lastname,
      email,
      password,
      token,
      isAdmin,
    })
  );
};
export const getUserInfo = () =>
  localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : { email: '', password: '', firstname: '', lastname: '' };

export const getShipping = () => {
  const shipping = localStorage.getItem('shipping')?JSON.parse(localStorage.getItem('shipping')) : {
        address: '',
        city: '',
        state: '',
        postalCode: '',
        country: '',
      };
  return shipping;
};
export const setShipping = ({
  address = '',
  city = '',
  state = '',
  postalCode = '',
  country = '',
}) => {
  localStorage.setItem(
    'shipping',
    JSON.stringify({ address, city, state, postalCode, country})
  );
};

export const getPayment = () => {
    const payment = localStorage.getItem('payment')?JSON.parse(localStorage.getItem('payment')) : {
          paymentMethod: 'paypal',
        };
    return payment;
  };
  export const setPayment = ({ paymentMethod = 'paypal' }) => {
    localStorage.setItem('payment', JSON.stringify({ paymentMethod }));
  };