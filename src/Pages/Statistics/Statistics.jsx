import { green } from "@mui/material/colors";
import { useLoaderData } from "react-router-dom";

import { PieChart, Pie, Sector, Cell, ResponsiveContainer,Tooltip } from 'recharts';




const Statistics = () => {
    const donation = useLoaderData();
    const totalDonation = donation.length;

    
    const donationItems = JSON.parse(localStorage.getItem("donations")? localStorage.getItem("donations"): "" )
    const yourDonation = donationItems.length;


const data = [
    { name: 'Total Donation', value: totalDonation },
    { name: 'Your Donation', value: yourDonation },
   
  ];   
  const COLORS = ['#FF444A', '#00C49F'];


  const RADIAN = Math.PI / 180;

  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };


    return (
    <div>
        <div className="flex justify-center items-center">
                 
                 <PieChart width={300} height={300} className="" >
                   <Pie className="w-[500px] h-[500px] bg-green-400 "
                     data={data}
                     cx="50%"
                     cy="50%"
                     labelLine={false}
                     label={renderCustomizedLabel}
                     outerRadius={100}
                     fill="#8884d8"
                     dataKey="value"
                   >
                     {data.map((entry, index) => (
                       <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                     ))}
                   </Pie>
                   <Tooltip/>
                 </PieChart>
        
             </div>

             <div className=" lg:flex md:flex  justify-center items-center mx-auto  gap-8 text-lg font-normal ">
         
                 <div className="flex gap-3">
                     <h2>Total Donation</h2>
                     <div className="w-[100px] h-[12px] bg-[#FF444A] mt-2"></div>
                 </div>
         
                 <div className="flex gap-3">
                     <h2>Your Donation</h2>
                     <div className="w-[100px] h-[12px] bg-[#00C49F] mt-2"></div>
                 </div>
         
                </div>
    </div>
    );


};
      
     

export default Statistics;


