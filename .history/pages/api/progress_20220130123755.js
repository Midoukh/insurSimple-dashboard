const data = require("./progressData.json");
const fs = require("fs");

const handlePatchData = (arr) => {
  console.log(arr);
};

const handler = (req, res) => {
  console.log(req.method);
  try {
    if (req.method === "GET") {
      res.status(200).json({
        message: "Success",
        data: data,
      });
    } else if (req.method === "PATCH") {
      handlePatchData(req.body);
      res.status(201).json({
        message: "Success",
        data: req.body,
      });
    }
    handlePatchData(req.body);
  } catch (err) {
    res.status(500).json({
      message: "error",
      error: err,
    });
  }
};
export default handler;
