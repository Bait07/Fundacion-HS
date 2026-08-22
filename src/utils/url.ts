export const withBase = (path: string): string => {
  const base = import.meta.env.BASE_URL;
  return path === '/' ? base : `${base}${path.replace(/^\//, '')}`;
};
