import React, {useEffect, useState} from 'react';
import './index.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import api from '../../services/api'

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
    pan: {
        enabled: true,
        mode: 'x',
        },
        limits: {
        x: { min: 5, max: 7 },
        },
        zoom: {
        pan: {
            enabled: true,
        },
        },
    },
};

const Dashboard = () => {

    const [responseapi, setResponse] = useState([])
    const [labels, setLabels] = useState([])
    const [lamp1, setlamp1] = useState(0)
    const [lamp2, setlamp2] = useState(0)

    const [dataTemp, setDataTemp] = useState({
        labels: [],
        datasets: [{
          label: 'Temperatura',
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: [],
        }]
      })

    const [dataled1, setDataled1] = useState({
        labels: [],
        datasets: [{
          label: 'Led 1',
          backgroundColor: 'rgb(18, 117, 18)',
          borderColor: 'rgb(18, 117, 18)',
          data: [],
        }]
      })

    const [dataled2, setDataled2] = useState({
        labels: [],
        datasets: [{
          label: 'Led 2',
          backgroundColor: 'rgb(12, 22, 112)',
          borderColor: 'rgb(12, 22, 112)',
          data: [],
        }]
      })

    function getData(){
        api.get('/api/data').then((response) => {
            setResponse(response.data)
            setDataTemp({
                labels: response.data.map(a => new Date(a.timestamp).toLocaleTimeString()),
                datasets: [{
                  label: 'Temperatura',
                  backgroundColor: 'rgb(255, 99, 132)',
                  borderColor: 'rgb(255, 99, 132)',
                  data: response.data.map(a => a.temperature),
                }]
              })
            setDataled1({
                labels: response.data.map(a => new Date(a.timestamp).toLocaleTimeString()),
                datasets: [{
                  label: 'Led 1',
                  backgroundColor: 'rgb(18, 117, 18)',
                  borderColor: 'rgb(18, 117, 18)',
                  data: response.data.map(a => a.led1),
                }]
              })
            setDataled2({
                labels: response.data.map(a => new Date(a.timestamp).toLocaleTimeString()),
                datasets: [{
                  label: 'Led 2',
                  backgroundColor: 'rgb(12, 22, 112)',
                  borderColor: 'rgb(12, 22, 112)',
                  data: response.data.map(a => a.led2),
                }]
              })
            setlamp1(response.data[response.data.length - 1].led1)
            setlamp2(response.data[response.data.length - 1].led2)
        }, (error) => {
            console.log("Erro na Requisição")
        })
    }

    useEffect(() => {
        getData();
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
          getData();
        }, 1000);
        return () => clearInterval(interval);
      }, []);

    function changeLed1(e){
        e.preventDefault();
        api.post('/api/led/1');
    }

    function changeLed2(e){
        e.preventDefault();
        api.post('/api/led/2');
    }

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
                        <Line options={options} data={dataTemp} />
                    </Col>
                </Row>
                <Row>
                    <Col md={6} className="text-center">
                        <h3>Lâmpada do Quarto</h3>
                        <Button className={ lamp1 ? "btn-danger" : "btn-success" } onClick={changeLed1}>{lamp1 ? "Desligar" : "Ligar"}</Button>
                        <Line options={options} data={dataled1} />
                    </Col>
                    <Col md={6} className="text-center">
                        <h3>Lâmpada do Banheiro</h3>
                    <Button className={ lamp2 ? "btn-danger" : "btn-success" } onClick={changeLed2}>{lamp2 ? "Desligar" : "Ligar"}</Button>
                        <Line options={options} data={dataled2} />
                    </Col>
                </Row>
            </Container>
        </>
    )
}


export default Dashboard