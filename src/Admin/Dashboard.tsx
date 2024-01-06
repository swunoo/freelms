import { useEffect } from "react";
import ChatPanel from "../Common/ChatPanel";
import Navbar from "./_Navbar";
import { Chart } from "tw-elements";
import Layout from "./_Layout";

export default Dashboard;

/* Admin Dashboard */
function Dashboard() {

    return (
        <Layout active="dashboard">
            <Content />
        </Layout>
    )
}

/* Contents inside Admin Dashboard */
function Content() {

    const dataBar = {
        type: 'bar',
        data: {
          labels: ['Monday', 'Tuesday' , 'Wednesday' , 'Thursday' , 'Friday' , 'Saturday' , 'Sunday '],
          datasets: [
            {
              label: 'Old',
              data: [2112, 2343, 2545, 3423, 2365, 1985, 987],
              backgroundColor: ['#1ce23f']
            },
            {
              label: 'New',
              data: [2112, 2343, 2545, 3423, 2365, 1985, 987],
              backgroundColor: ['#e21c3f']
            },
          ],
        },
      };

      useEffect(()=> {
          
        new Chart(document.getElementById('bar-chart'), dataBar);

          return () => {
            const chartWrapper = document.getElementById('chart-wrapper');
            if(!chartWrapper) return;
            chartWrapper.innerHTML='<canvas id="bar-chart"></canvas>'
        };
      }, [])
      

    return (
        <div>
            <div className="mx-auto w-11/12 overflow-hidden md:w-3/5 mt-16 mb-8" id='chart-wrapper'>
                <canvas id="bar-chart"></canvas>
            </div>
            <hr className="my-8"></hr>
            <div className="flex flex-wrap gap-3 justify-center">
                <Stat cur="32" delta={30} title="teachers"/>
                <Stat cur="128" delta={-5} title="students"/>
                <Stat cur="8" delta={0} title="staff"/>
                <Stat cur="25" delta={10}title="completed courses"/>
                <Stat cur="10" delta={-20} title="current courses"/>
            </div>
        </div>
    )
}

/* Each stat for the chart */
function Stat({cur, delta, title}: {cur: string, delta: number, title: string}){
    return (
        <div className="flex items-center py-2">
            <div className="mx-3">
                <div className="flex items-center">
                    <div className="text-3xl font-bold text-gray-800 mr-2">{cur}</div>
                    <div className={"text-sm font-medium " + (delta < 0 ? "text-yellow-500" : "text-green-500")}>{delta < 0 ? delta : "+" + delta}</div>
                </div>
                <div className="text-sm text-gray-500">{title}</div>
            </div>
        </div>
    )
}