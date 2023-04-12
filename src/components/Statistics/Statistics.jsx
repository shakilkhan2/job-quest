import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import InfoSection from "../infoSection/InfoSection";

const data = [
  {
    name: "Assig-1",

    number: 60,
  },
  {
    name: "Assig-2",
    number: 55,
  },
  {
    name: "Assig-3",
    number: 40,
  },
  {
    name: "Assig-4",
    number: 58,
  },
  {
    name: "Assig-5",
    number: 50,
  },
  {
    name: "Assig-6",
    number: 58,
  },
  {
    name: "Assig-7",
    number: 60,
  },
  {
    name: "Assig-8",
    number: 58,
  },
];

const Statistics = () => {
  return (
    <div>
      <InfoSection name={"Statistics"} />
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
        <span className="text-black">Note:</span> This Area-Chart Represents
        Assignment Marks
      </p>
    </div>
  );
};

export default Statistics;
