



import Chart from 'react-apexcharts'

import { useSelector } from 'react-redux'

import StatusCard from '../components/status-card/StatusCard'

import Table from '../components/table/Table'



import statusCards from '../assets/JsonData/status-card-data.json'

var chartOptions = {
    series: [{
        name: 'New Ticket',
        type: 'column',
        data: [40,70,20,90,36,80,30,91,60]
    }, {
        name: 'Open Ticket',
        type: 'column',
        data: [40, 30, 70, 80, 40, 16, 40, 20, 51, 10]
    },
    {
        name: 'Pending',
        type: 'column',
        data: [3,6,13,60,32,4,6,12,41,13]
    },
    {
        name: 'Total Resolved',
        type: 'column',
        data: [17,17,18,51,31,41,61,22,33,44]
    },
    {
        name: 'Ticket Expired',
        type: 'column',
        data: [33,22,66,12,41,36,43,23,67,12]
    }],
    options: {
        color: ['#6ab04c', '#2980b9'],
        },
        chart: {
            height: 400,
            type: 'line',
            stacked: false
          },
        dataLabels: {
            enabled: false
        },
        stroke: {
            width: [1,1,4]
        },
        title: {
            text: 'Ticket Status',
            align: 'left',
            offsetX: 1200
          },
          legend: {
            horizontalAlign: 'left',
            offsetX: 40
          },
          xaxis: {
            categories: ["2May", "4May", "6May", "8May", "10may","12May","14May","16May"],
          },
          yaxis: [
            {
              axisTicks: {
                show: true,
              },
              axisBorder: {
                show: true,
                color: '#008FFB'
              },
              labels: {
                style: {
                  colors: '#008FFB',
                }
              }
            }
        ]

            
    }


const topCustomers = {
    head: [
        
    ],
    body: [
        {
            "username": <b>John Doe</b> ,
            
            
        },
        {
            "username": <b>Niya Yansee</b>,
            
        },
        {
            "username": <b>Priya Jolankar</b>,
           
        },
        {
            "username": <b>Priti Oberoi</b>,
            
        },
        {
            "username": <b>Ayushi Hira</b>,
            
        }
    ]
}

const renderCusomerHead = (item, index) => (
    <th key={index}>{item}</th>
)

const renderCusomerBody = (item, index) => (
    <tr key={index}>
        <td>{item.username}</td>
        <td>{item.order}</td>
        <td>{item.price}</td>
    </tr>
)

const Dashboard = () => {

    const themeReducer = useSelector(state => state.ThemeReducer.mode)

    return (
        <div>
            <h2 className="page-header">Hi, Octavia!</h2>
            <div className="row">
                <div className="row-2">
                    <div className="row">
                        {
                            statusCards.map((item, index) => (
                                <div className="row-1" key={index}>
                                    <StatusCard
                                        icon={item.icon}
                                        count={item.count}
                                        title={item.title}
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="col-6">
                    <div className="card full-height">
                        {/* chart */}
                        <Chart
                            options={themeReducer === 'theme-mode-dark' ? {
                                ...chartOptions.options,
                                theme: { mode: 'dark'}
                            } : {
                                ...chartOptions.options,
                                theme: { mode: 'light'}
                            }}
                            series={chartOptions.series}
                            type='line'
                            height='200%'
                        />
                    </div>
                </div>
                <div className="col-6">
                    <div className="card">
                        <div className="card__header">
                            <h3>Top Agents</h3>
                        </div>
                        <div className="card__body">
                            <Table
                                headData={topCustomers.head}
                                renderHead={(item, index) => renderCusomerHead(item, index)}
                                bodyData={topCustomers.body}
                                renderBody={(item, index) => renderCusomerBody(item, index)}
                            />
                        </div>
                        
                    </div>
                </div>
                
                </div>
            </div>
        
    )
}

export default Dashboard
