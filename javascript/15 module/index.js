// import { data } from "./admin.js"

import { data as a1, calc } from "./modules/admin.js"

import { data as a2, calc as fun } from "./modules/user.js"


console.log(a1);
console.log(a2);

console.log(calc());

console.log(fun());




// Uncaught SyntaxError: Identifier 'data' has already been declared

// Uncaught SyntaxError: Cannot use import statement outside a module

// from origin 'null' has been blocked by CORS policy: Cross origin requests are only supported for protocol schemes: chrome, chrome-extension, chrome-untrusted, data, http, https, isolated-app.

