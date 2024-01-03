export default {
  name: "path2",

  lookup(options) {
    let found;
    if (typeof window !== "undefined") {
      const language = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
      if (language instanceof Array) {
        if (typeof options.lookupFromPathIndex === "number") {
          if (typeof language[options.lookupFromPathIndex] !== "string") {
            return undefined;
          }
          found = language[options.lookupFromPathIndex].replace("/", "");
        } else {
          found = language[0].replace("/", "");
        }
      }

      // If no language is found in the path, redirect to the language-specific path
      if (!found) {
        const cookieLanguage = document.cookie.replace(
          /(?:(?:^|.*;\s*)i18next=([^;]*).*$)|^.*$/,
          "$1"
        );
        const defaultLanguage = "en";
        const preferredLanguage = cookieLanguage || defaultLanguage;

        // Redirect to the language-specific path
        window.location.replace(`/myWeb/${preferredLanguage}`);
      }
    }
    return found;
  },
};
