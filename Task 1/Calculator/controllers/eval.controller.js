//supporting fuctions
const calculateSum = (values) => {
  let sum = 0;
  for (let index = 0; index < values.length; index++) {
    if (values[index] === null) return null;
    sum += values[index];
  }
  return sum;
};

const calculateAvg = (sum, size) => {
  return sum / size;
};

//handler
const Calculate = (req, res) => {
  try {
    const { values } = req.body;
    if (values.length === 0)
      res.json({
        message: "Provide atleast 1 number to perform calculation",
        status: false,
      });
    const sum = calculateSum(values);
    const response = calculateAvg(sum, values.length);
    if (!response) {
      res.json({
        message: "Provide valid numbers to perform calculation",
        status: false,
      });
    }
    res.status(200).json({
      message: "Average for the given number is evaluated successfully",
      status: true,
      data: {
        response,
      },
    });
  } catch (error) {
    res.json({
      message: "Error Occured During Calculation, So try again later",
      status: false,
    });
  }
};

module.exports = { Calculate };
