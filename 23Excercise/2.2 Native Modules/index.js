const fs = require("fs");

fs.writeFile("text.txt", "are you nodeJs developer", (err) => {
  if (err) throw err;

  console.log("this file has been saved");
});

fs.writeFile("text.txt", "Yes im nodeJs developer", (err) => {
  if (err) throw err;
  console.log("file saved");
});

fs.readFile("text.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
