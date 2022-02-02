import React, {useEffect, useState} from 'react';
import axios from 'axios';
import LastUpdate from '../components/lastUpdate';

const ItemTemperature = ({device}) => {
    const [lastUpdate, setLastUpdate] = useState(new Date().toLocaleString());
    const [deviceInfo, setDeviceInfo] = useState({
        connected: false,
        temperature: 0
    })

    useEffect(() => {
        getDeviceDetails()
        setInterval(() => {
            getDeviceDetails()
        }, 10000);
    }, [])

    const getDeviceDetails = () => {
        axios.get('https://menagemyhome.sukces24.usermd.net/proxy/proxy.php?apiUrl='+device.apiUrl)
        .then(res => {
            setDeviceInfo(res.data)
            setLastUpdate(new Date().toLocaleString())
        })
        .catch(e => {
            console.log(e)
        })
    }
    return <div className="device">
        <div className="flex-sb">
            <div>
                <span className="device-name">{device.name}</span>
            </div>
            <div>
                <span className="device-status">Stan&nbsp;</span>
                {deviceInfo.connected ?
                    <span className="device-onof device-on">włączona</span> 
                    : <span className="device-onof device-off">wyłączona</span>
                }
            </div>
        </div>
        <div className="flex-sb">
            <div>
                <span className="device-stats">{deviceInfo.temperature.toFixed(2)}°C</span>
            </div>
            <div>
                <div className="icon-border">
                    <a href="device.html">
                        <img
                            src={require("../assets/img/edit.svg").default}                         
                            alt="" 
                            className="icon" />
                    </a> 
                </div>
            </div>
        </div>
        <LastUpdate lastUpdateDate={lastUpdate} />
    </div>;
}

export default ItemTemperature;