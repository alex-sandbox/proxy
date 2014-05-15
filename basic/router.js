function route(pathname) {
  if (pathname != "/favicon.ico") console.log("About to route a request for " + pathname);
}

exports.route = route;