import React, {useEffect, useState} from 'react';
import './index.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
CategoryScale,
LinearScale,
PointElement,
LineElement,
BarElement,
Title,
Tooltip,
Legend
);

const options = {
    responsive: true,
    plugins: {
        legend: {
        position: 'top',
        },
    },
};

const Dashboard = () => {

    const responseapi = [
        {
            "timestamp": "00:00:10",
            "temperature":50,
            "humidity":80,
            "statusLed1": 0,
            "statusLed2": 1
        },
        {
            "timestamp": "00:00:30",
            "temperature":60,
            "humidity":85,
            "statusLed1": 1,
            "statusLed2": 1
        },
        {
            "timestamp": "00:00:50",
            "temperature":55,
            "humidity": 90,
            "statusLed1": 1,
            "statusLed2": 0
        }
    ]

    const labels = responseapi.map(a => a.timestamp);

    const [lamp1, setlamp1] = useState(0)
    const [lamp2, setlamp2] = useState(0)

    const [data1, setData1] = useState({
        labels,
        datasets: [
            {
                label: 'Temperatura',
                data: responseapi.map(a => a.temperature),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            }
        ],
      })

    const [data2, setData2] = useState({
        labels,
        datasets: [
            {
                label: 'Umidade',
                data: responseapi.map(a => a.humidity),
                borderColor: 'rgb(30, 166, 66)',
                backgroundColor: 'rgba(30, 166, 66, 0.5)',
            }
        ],
    })

    const [data4, setData4] = useState({
        labels,
        datasets: [
            {
                label: 'Lampada 1',
                data: responseapi.map(a => a.statusLed1),
                borderColor: 'rgb(20, 20, 219)',
                backgroundColor: 'rgba(20, 20, 219, 0.5)',
            }
        ],
        })

    const [data5, setData5] = useState({
        labels,
        datasets: [
            {
                label: 'Lampada 2',
                data: responseapi.map(a => a.statusLed2),
                borderColor: 'rgb(153, 20, 219)',
                backgroundColor: 'rgba(153, 20, 219, 0.5)',
            }
        ],
        })
  
    useEffect(() => {
        setlamp1(responseapi[responseapi.length - 1].statusLed1)
        setlamp2(responseapi[responseapi.length - 1].statusLed2)
        setInterval(() => {
            setData1({
            labels,
            datasets: [
                {
                label: 'Temperatura',
                data: responseapi.map(a => a.temperature),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                },
            ],
            })
            setData2({
            labels,
            datasets: [
                {
                    label: 'Umidade',
                    data: responseapi.map(a => a.humidity),
                    borderColor: 'rgb(30, 166, 66)',
                    backgroundColor: 'rgba(30, 166, 66, 0.5)',
                }
            ],
            })
            setData4({
            labels,
            datasets: [
                {
                    label: 'Lampada 1',
                    data: responseapi.map(a => a.statusLed1),
                    borderColor: 'rgb(20, 20, 219)',
                    backgroundColor: 'rgba(20, 20, 219, 0.5)',
                }
            ],
            })
            setData5({
            labels,
            datasets: [
                {
                    label: 'Lampada 2',
                    data: responseapi.map(a => a.statusLed2),
                    borderColor: 'rgb(153, 20, 219)',
                    backgroundColor: 'rgba(153, 20, 219, 0.5)',
                }
            ],
            })
            setlamp1(responseapi[responseapi.length - 1].statusLed1)
            setlamp2(responseapi[responseapi.length - 1].statusLed2)
            console.log(new Date())
        }, 300000);
    })

    return(
        <>
            <Navbar bg="dark" variant="dark" sticky="top">
                <Container>
                    <Navbar.Brand>
                        SmartHome
                    </Navbar.Brand>
                </Container>
            </Navbar>
            <Container className="mt-5">
                <Row >
                    <h1>Dashboard</h1>
                </Row>
                <Row>
                    <Col className="text-center">
                        <h3>Temperatura</h3>
                        <Line options={options} data={data1} />
                    </Col>
                    <Col className="text-center">
                        <h3>Umidade</h3>
                        <Line options={options} data={data2} />
                    </Col>
                </Row>
                <Row>
                    <Col md={6} className="text-center">
                        <h3>Lâmpada do Quarto</h3>
                        <Button className={ lamp1 ? "btn-danger" : "btn-success" } onClick={() => {lamp1 ? setlamp1(0) : setlamp1(1)}}>{lamp1 ? "Desligar" : "Ligar"}</Button>
                        <Bar options={options} data={data4} />
                    </Col>
                    <Col md={6} className="text-center">
                        <h3>Lâmpada do Banheiro</h3>
                    <Button className={ lamp2 ? "btn-danger" : "btn-success" } onClick={() => {lamp2 ? setlamp2(0) : setlamp2(1)}}>{lamp2 ? "Desligar" : "Ligar"}</Button>
                        <Bar options={options} data={data5} />
                    </Col>
                </Row>
            </Container>
        </>
    )
}


export default Dashboard