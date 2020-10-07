import { backendApi } from "../config";

export const adminApi = `${backendApi}admin`;

export const ordersApi = {
  getOrders: `${adminApi}/orders`,
  orderDetails: (id) => `${adminApi}/orders/${id}`,
};

export const notFoundBooks = `${adminApi}/not-found-books`;

export const returnsApi = {
  getReturnRequests: `${adminApi}/returns/requested`,
  getProcessedReturnRequests: `${adminApi}/returns/processed`,
  getReturnDetails: (id) => `${adminApi}/returns/${id}`,
  returnPaymentDetails: (id) =>
    `${adminApi}/returns/${id}/returnPaymentDetails`,
};

export const booksApi = {
  martolexBooks: `${adminApi}/books/martolex`,
  bookDetails: (id) => `${adminApi}/books/${id}`,
  thirdParty: {
    approved: `${adminApi}/books/thirdParty/approved`,
    notApproved: `${adminApi}/books/thirdParty/notApproved`,
    pendingApproval: `${adminApi}/books/thirdParty/pendingApproval`,
    changeApprovalState: `${adminApi}/books/thirdParty/approval`,
  },
};

export const categoriesApi = {
  getCategories: `${adminApi}/category`,
  getSubCategories: (catId) => `${adminApi}/category/subCategories/${catId}`,
};

export const subscribersApi = {
  getSubscribers: `${adminApi}/newsletter/getAllSubscribers`,
};

export const reviewsApi = {
  getReviews: `${adminApi}/reviews/latest`,
  delete: `${adminApi}/reviews/delete`,
};

export const UsersApi = {
  getUsers: `${adminApi}/users`,
  cartStats: `${adminApi}/users/cartStats`,
  getUserCart: (id) => `${adminApi}/users/${id}/cart`,
};

export const loginApi = `${backendApi}auth/adminSignIn`;
