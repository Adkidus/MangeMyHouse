import React, {useEffect, useState} from 'react';
import axios from 'axios';

const ItemPercent = ({device}) => {
    const [deviceInfo, setDeviceInfo] = useState({
        connected: false,
        shut: 0
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
        })
        .catch(e => {
            console.log(e)
        })
    }
    return <div className="device">
        <div className="flex-sb">
            <div>
                <span className="device-name">Rolety</span>
            </div>
            <div>
                <span className="device-status">Stan</span>
                {deviceInfo.connected ?
                    <span className="device-onof device-on">włączona</span> 
                    : <span className="device-onof device-off">wyłączona</span>
                }
            </div>
        </div>
        <div className="flex-sb">
            <div>
                <span className="device-stats">{deviceInfo.shut}%</span>
                <span className="device-stats-name">Procent zamknięcia</span>
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
    </div>;
}

export default ItemPercent;