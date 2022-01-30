const data = require("./progressData.json");
const fs = require("fs");
console.log(fs);
console.log(data);
const handler = (req, res) => {
  console.log(req.method);
  try {
    if (req.method === "GEdT") {
      res.status(200).json({
        message: "Success",
        data: data,
      });
    }
  } catch (err) {
    res.status(500).json({
      message: "error",
      error: err,
    });
  }
};
export default handler;
