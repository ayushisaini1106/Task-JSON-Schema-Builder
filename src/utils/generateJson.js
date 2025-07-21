// export default function generateJson(fields) {
//   const result = {};
//   fields.forEach(({ key, type, notify, children }) => {
//     if (!key) return;
//     if (type === "nested") {
//       result[key] = generateJson(children);
//     } else {
//       result[key] = type;
//     }
//   });
//   return result;
// }
