import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  {
    name: "Assignment-1",

    number: 60,
  },
  {
    name: "Assignment-2",
    number: 55,
  },
  {
    name: "Assignment-3",
    number: 40,
  },
  {
    name: "Assignment-4",
    number: 58,
  },
  {
    name: "Assignment-5",
    number: 50,
  },
  {
    name: "Assignment-6",
    number: 58,
  },
  {
    name: "Assignment-7",
    number: 60,
  },
];

const Statistics = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center pt-16 pb-20 bg-purple-50">
        Statistics
      </h1>
      <div className="my-4 flex  justify-center ">
        <AreaChart
          width={850}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="number"
            stroke="#8884d8"
            fill="#8884d8"
          />
        </AreaChart>
      </div>
      <p className="text-center text-gray-600 mb-16">
        <span className="text-black">Note:</span> This area-chart represents
        demo assignment-marks
      </p>
    </div>
  );
};

export default Statistics;
