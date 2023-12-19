function useDirection() {
  if (localStorage.getItem("i18nextLng") == "en") {
    return "ltr";
  } else {
    return "rtl";
  }
}
function useLanguage() {
  if (localStorage.getItem("i18nextLng") == "en") {
    return "en";
  } else {
    return "ar";
  }
}
export function changeSiteLang() {
  if (localStorage.getItem("i18nextLng") == "en") {
    localStorage.setItem("i18nextLng", "ar");
    window.location.reload();
    document.body.dir = "rtl";
  } else {
    localStorage.setItem("i18nextLng", "en");
    window.location.reload();
    document.body.dir = "ltr";
  }
}

export const siteDirection = useDirection();
export const siteLanguage = useLanguage();
