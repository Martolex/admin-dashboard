import { backendApi } from "../config";

export const adminApi = `${backendApi}admin`;

export const ordersApi = {
  getOrders: `${adminApi}/orders`,
  orderDetails: (id) => `${adminApi}/orders/${id}`,
};
