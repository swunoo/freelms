import { useEffect } from "react";
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
          labels: ['Maths', 'ComputerScience' , 'Business' , 'Politics' , 'Architecture' , 'Music' , 'Economics '],
          datasets: [
            {
              label: 'Old',
              data: [29, 100, 258, 159, 236, 235, 152],
              backgroundColor: ['#284B63']
            },
            {
              label: 'New',
              data: [23, 30, 10, 18, 15, 21, 28],
              backgroundColor: ['#E9B44C']
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