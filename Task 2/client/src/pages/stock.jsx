import React, { useState, useEffect } from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { stockCode } from "./data";
import axios  from "axios";

axios.defaults.headers.common = { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQ3MDM0MDY0LCJpYXQiOjE3NDcwMzM3NjQsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6Ijc3NzMwMmQxLTkzN2YtNDc4Zi04MWQyLTVlMjI4OTZhZGUxYSIsInN1YiI6InJhZ3VsYW5kaXJhbm0uMjJjc2VAa29uZ3UuZWR1In0sImVtYWlsIjoicmFndWxhbmRpcmFubS4yMmNzZUBrb25ndS5lZHUiLCJuYW1lIjoicmFndWxhbmRpcmFuIG0iLCJyb2xsTm8iOiIyMmNzcjE1NyIsImFjY2Vzc0NvZGUiOiJqbXBaYUYiLCJjbGllbnRJRCI6Ijc3NzMwMmQxLTkzN2YtNDc4Zi04MWQyLTVlMjI4OTZhZGUxYSIsImNsaWVudFNlY3JldCI6IkpCeFp0UkdoVlZFTmVGRUQifQ.FeLL1nS_Mz3p9R81W5L4Nq6Jnwi8mtudK6FUwyZ2aTs` };

const Stock = () => {
  const [stockData, SetStockData] = useState([]);

  const getStock = async (code) => {
    const response = await axios.get(
      `http://20.244.56.144/evaluation-service/stocks/${code}`
    );
    console.log(response.data);
  };
  useEffect(() => {
    stockCode.map((code) => {
      getStock(code);
    });
  });
  return (
    <>
      <h1>Stock Data (Latest)</h1>
      <BarChart
        xAxis={[{ data: stockCode }]}
        series={[{ data: [4, 3] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
        height={300}
      />
    </>
  );
};

export default Stock;
