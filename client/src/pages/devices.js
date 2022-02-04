import React, {useEffect, useState} from "react";
import ItemPercent from "../components/itemPercent";
import ItemTemperature from '../components/itemTemperature';
import ItemStatus from '../components/itemStatus';
import { Link } from "react-router-dom";
import axiosConfig from '../utils/axiosConfig';

const Devices = () => {
    const [devicesList, setDevicesList] = useState([])
    useEffect(() => {
        axiosConfig.get('devices/list')
        .then(res => {
           setDevicesList(res.data)
        })
        .catch(e => {
            console.log(e)
        })
    },[])
    return <section>
        <div className="container">
            <div className="flex">
                <h1>Twoje urządzenia</h1> 
                {/* <span className="refresh">Odśwież Listę</span> */}
            </div>
            <div className="content">
                {devicesList.map((device,index) => {
                    switch (device.type) {
                        case 1:
                            return <ItemPercent key={index} device={device} />
                        case 2:
                            return <ItemTemperature key={index} device={device} />
                        case 3:
                            return <ItemStatus key={index} device={device} />
                        default:
                            return <div key={index}>BRAK DANYCH {device.name}</div>
                    }
                })}
                <Link to='/new'>
                    <button className='btn btn-success btn-block w-100'>Dodaj nowe urządzenie</button>
                </Link>
            </div>
        </div>
        </section>
        }

export default Devices;