import React from 'react';
import './index.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Line } from 'react-chartjs-2';

import faker from 'faker'

ChartJS.register(
CategoryScale,
LinearScale,
PointElement,
LineElement,
Title,
Tooltip,
Legend
);

export const options = {
responsive: true,
plugins: {
    legend: {
    position: 'top',
    },
    title: {
    display: true,
    text: 'Gráfico de Linhas',
    },
},
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data1 = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

export const data2 = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

export const data3 = {
labels,
datasets: [
    {
    label: 'Dataset 1',
    data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
    borderColor: 'rgb(255, 99, 132)',
    backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
    label: 'Dataset 2',
    data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
    borderColor: 'rgb(53, 162, 235)',
    backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
],
};

export const data4 = {
labels,
datasets: [
    {
    label: 'Dataset 1',
    data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
    borderColor: 'rgb(255, 99, 132)',
    backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
    label: 'Dataset 2',
    data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
    borderColor: 'rgb(53, 162, 235)',
    backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
],
};

const Dashboard = () => {
    return(
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>
                        Dashboard SmartHome
                    </Navbar.Brand>
                </Container>
            </Navbar>
            <Container className="mt-5">
                <Row>
                    <Col md={6}>
                        <Line options={options} data={data1} />
                    </Col>
                    <Col md={6}>
                        <Line options={options} data={data2} />
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <Line options={options} data={data3} />
                    </Col>
                    <Col md={6}>
                        <Line options={options} data={data4} />
                    </Col>
                </Row>
            </Container>
        </>
    )
}


export default Dashboard