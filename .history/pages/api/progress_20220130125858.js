const data = require("./progressData.json");
const fs = require("fs");
const path = require("path");

const handleUpdateData = (body) => {
  const { id, approved } = body.progress;
  const newData = {};
  newData.progress = data.progress.map((p) => {
    if (p.id === id) {
      p.completed = approved;
    }
    return p;
  });
  return newData;
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
      res.status(201).json({
        message: "Success",
        data: handleUpdateData(req.body),
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
