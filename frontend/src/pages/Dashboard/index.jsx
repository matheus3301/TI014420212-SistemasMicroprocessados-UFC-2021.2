import React, {useEffect, useState} from 'react';
import './index.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

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

const Dashboard = () => {
    const options = {
        responsive: true,
        plugins: {
            legend: {
            position: 'top',
            },
        },
    };

    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    const [data1, setData1] = useState({
        labels,
        datasets: [
            {
                label: 'Temperatura',
                data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Umidade',
                data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
                borderColor: 'rgb(30, 166, 66)',
                backgroundColor: 'rgba(30, 166, 66, 0.5)',
            },
            {
                label: 'Luminosidade',
                data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
                borderColor: 'rgb(20, 20, 219)',
                backgroundColor: 'rgba(20, 20, 219, 0.5)',
            },
            {
                label: 'Pressão',
                data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
                borderColor: 'rgb(153, 20, 219)',
                backgroundColor: 'rgba(153, 20, 219, 0.5)',
            }
        ],
      })

    const [data2, setData2] = useState({
    labels,
    datasets: [
        {
        label: 'Temperatura',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
    ],
    })

    const [data3, setData3] = useState({
        labels,
        datasets: [
            {
                label: 'Umidade',
                data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
                borderColor: 'rgb(30, 166, 66)',
                backgroundColor: 'rgba(30, 166, 66, 0.5)',
            },
        ],
        })

    const [data4, setData4] = useState({
        labels,
        datasets: [
            {
                label: 'Luminosidade',
                data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
                borderColor: 'rgb(20, 20, 219)',
                backgroundColor: 'rgba(20, 20, 219, 0.5)',
            }
        ],
        })

    const [data5, setData5] = useState({
        labels,
        datasets: [
            {
                label: 'Pressão',
                data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
                borderColor: 'rgb(153, 20, 219)',
                backgroundColor: 'rgba(153, 20, 219, 0.5)',
            }
        ],
        })
  
    useEffect(() => {
        console.log(new Date())
        setInterval(() => {
            setData1({
                labels,
                datasets: [
                  {
                    label: 'Temperatura',
                    data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
                    borderColor: 'rgb(255, 99, 132)',
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                  },
                  {
                    label: 'Umidade',
                    data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
                    borderColor: 'rgb(30, 166, 66)',
                    backgroundColor: 'rgba(30, 166, 66, 0.5)',
                  },
                  {
                    label: 'Luminosidade',
                    data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
                    borderColor: 'rgb(20, 20, 219)',
                    backgroundColor: 'rgba(20, 20, 219, 0.5)',
                  },
                  {
                    label: 'Pressão',
                    data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
                    borderColor: 'rgb(153, 20, 219)',
                    backgroundColor: 'rgba(153, 20, 219, 0.5)',
                  }
                ],
              })
              console.log(new Date())
        }, 60000);
    })

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
                    <Col>
                        <Line options={options} data={data1} />
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <Form className="form">
                            <Form.Group>
                                <Form.Control type="time"/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Control type="time"/>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Filtrar
                            </Button>
                        </Form>
                        <Line options={options} data={data2} />
                    </Col>
                    <Col md={6}>
                        <Form className="form">
                            <Form.Group>
                                <Form.Control type="time"/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Control type="time"/>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Filtrar
                            </Button>
                        </Form>
                        <Line options={options} data={data3} />
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <Form className="form">
                            <Form.Group>
                                <Form.Control type="time"/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Control type="time"/>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Filtrar
                            </Button>
                        </Form>
                        <Line options={options} data={data4} />
                    </Col>
                    <Col md={6}>
                        <Form className="form">
                            <Form.Group>
                                <Form.Control type="time"/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Control type="time"/>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Filtrar
                            </Button>
                        </Form>
                        <Line options={options} data={data5} />
                    </Col>
                </Row>
            </Container>
        </>
    )
}


export default Dashboard