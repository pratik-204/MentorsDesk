import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";
import Typewriter from "../components/Typewriter";
import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
} from "recharts";

const data = [
    {name: "Productivity", value: 60 },
    {name: "Time Spent", value: 25 },
    {name: "Learning", value: 15 },
];

const COLORS = ["#12284bff", "#08533aff", "#bd7c0cff"]

function Dashboard(){
    const [secondVisible, setSecondVisible] = useState(false);

    return (
<div className="dashboard">
    <div className="dashboard-left">
      <div className="greetings">
                
                <Typewriter className="animated-text" 
                    onComplete={() => setSecondVisible(true)}>
                    How are you Prateek?
                    </Typewriter>

                {secondVisible && 
                <Typewriter className="animated-text"> 
                    What you did today!
                    </Typewriter>}
        </div>
<div className="cards">
    <Link to="/checkins" className="card-link">
    <div className="card">
       <h3>Check-ins</h3>
       <p> 5 completed</p>
    </div>
    </Link>
        
    <Link to="/notes" className="card-link">
    <div className="card">
        <h3>Notes</h3>
        <p>12 saved</p>
    </div>
    </Link>
    
    <Link to="/progress" className="card-link">
    <div className="card">
        <h3>Progress</h3>
        <p> 70% done</p>
    </div>
    </Link>
   </div>
</div>

    <div className="dashboard-right">
        <h2>Your Past Check-ins</h2>
        <h3> Week 1: Discussed study plan</h3>
        <p className="ai-review">
            <b> AI Review:</b>Great consistency! Try balancing time between practice
          and theory for better results.
        </p>     

        <div className="chart-container">
            <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                    <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius="50%"
                    outerRadius="80%"
                    paddingAngle={5}
                    dataKey="value"
                    >
                    {data.map((entry, index) => (
                        <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                        />
                    ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
            <div className="chart-center">
                <p>Progress</p>
                <h2>100%</h2>
            </div>
        </div>   
    </div>
</div>             
    );
}

export default Dashboard;