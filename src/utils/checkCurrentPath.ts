export default function checkCurrentPath(
  location,
  path: any,
  contains = false
) {
  if (location?.pathname) {
    if (contains) {
      return location.pathname.includes(path);
    }
    return location?.pathname === path;
  }

  return false;
}
