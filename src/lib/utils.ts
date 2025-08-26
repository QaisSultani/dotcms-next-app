const BASE_URL = "https://demo.dotcms.com";

export const generateUrl = (path: string) => {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${BASE_URL}${normalizedPath}`;
};
