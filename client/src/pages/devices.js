import React from "react";
import DevicesListItem from '../components/devicesListItem';

const devicesList = [
    {
        name: 'Roleta Gabinet',
        apiUrl: 'https://svr51.supla.org/direct/622/HZZuSnkW3c4EhKot/read?format=json'
    },
    {
        name: 'Sterownik Pompy',
        apiUrl: 'https://svr3.supla.org/direct/1428/bB4a486kebkFymRc/read?format=json'
    },
    {
        name: 'Temperatura w kominie',
        apiUrl: 'https://svr51.supla.org/direct/623/UKZSktvHJo/read?format=json'
    }
]


const Devices = () => {

    return <section>
        <div className="container">
            <div className="flex"><h1>Twoje urządzenia</h1> <a href=""><span className="refresh">Odśwież</span></a></div>
            {devicesList.map((device,index) => <DevicesListItem device={device} key={index} />)}
            <a href="device.html" className="btn btn-success btn-block">Dodaj nowe urządzenie</a>
        </div>
        </section>
        }

export default Devices;