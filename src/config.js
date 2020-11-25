export const backendApi =
  process.env.REACT_BACKEND_URL ||
  (process.env.NODE_ENV == "development"
    ? "http://localhost:3000/"
    : "https://backend.martolex.com/");
