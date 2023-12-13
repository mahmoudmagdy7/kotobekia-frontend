const isMobile = function () {
  const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  if (screenWidth < 959) {
    return true;
  } else {
    return false;
  }
};
export default isMobile;
