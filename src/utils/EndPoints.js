import { backendApi } from "../config";

export const adminApi = `${backendApi}admin`;

export const ordersApi = {
  getOrders: `${adminApi}/orders`,
  orderDetails: (id) => `${adminApi}/orders/${id}`,
};

export const returnsApi = {
  getReturnRequests: `${adminApi}/returns/requested`,
  getReturnDetails: (id) => `${adminApi}/returns/${id}`,
  returnPaymentDetails: (id) =>
    `${adminApi}/returns/${id}/returnPaymentDetails`,
};
