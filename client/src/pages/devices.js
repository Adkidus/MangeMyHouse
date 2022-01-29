import React from "react";
import ItemPercent from "../components/itemPercent";
import ItemTemperature from '../components/itemTemperature';
import ItemStatus from '../components/itemStatus';

const devicesList = [
    {
        name: 'Roleta Gabinet',
        apiUrl: 'https://svr51.supla.org/direct/622/HZZuSnkW3c4EhKot/read?format=json',
        type: 1
    },
    {
        name: 'Temperatura w kominie',
        apiUrl: 'https://svr3.supla.org/direct/1428/bB4a486kebkFymRc/read?format=json',
        type: 2
    },
    {
        name: 'Sterownik Pompy',
        apiUrl: 'https://svr51.supla.org/direct/623/UKZSktvHJo/read?format=json',
        type: 3
    },
]


const Devices = () => {

    return <section>
        <div className="container">
            <div className="flex">
                <h1>Twoje urządzenia</h1> 
                {/* <a href=""><span className="refresh">Odśwież</span></a> */}
            </div>
            {devicesList.map((device,index) => {
                switch (device.type) {
                    case 1:
                        return <ItemPercent key={index} device={device} />
                        break;
                    case 2:
                        return <ItemTemperature key={index} device={device} />
                        break;
                    case 3:
                        return <ItemStatus key={index} device={device} />
                        break;
                    default:
                        return <div key={index}>BRAK DANYCH {device.name}</div>
                        break;
                }
            })}
            {/* <a href="device.html" className="btn btn-success btn-block">Dodaj nowe urządzenie</a> */}
        </div>
        </section>
        }

export default Devices;