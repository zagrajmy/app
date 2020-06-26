export const getCurrentHash = () => {
  if (typeof window === "undefined") {
    return "";
  }
  return window.location ? decodeURI(window.location.hash) : "";
};
