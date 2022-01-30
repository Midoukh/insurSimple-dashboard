import data from "./progressData.json";
console.log(data);
const handler = (req, res) => {
  try {
    res.status(200).json({
      message: "Success",
      data: list,
    });
  } catch (err) {
    res.status(500).json({
      message: "error",
      error: err,
    });
  }
};
