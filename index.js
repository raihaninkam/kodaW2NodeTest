import useIntlFormat from "./src/formatDate.js";

const date = Date.now();
console.log(date);
let formatDate = useIntlFormat(date);
console.log(formatDate);

formatDate = useIntlFormat(new Date(1999, 6, 6), "ar-eg");
console.log(formatDate);
