import React, {useEffect, useState} from 'react';
import axios from 'axios';

const DevicesListItem = ({device}) => {
    const [deviceInfo, setDeviceInfo] = useState({})

    useEffect(() => {
        getDeviceDetails()
    }, [])

    const getDeviceDetails = () => {
        axios.get('https://localhost/apiproxy/proxy.php?apiUrl='+device.apiUrl)
        .then(res => {
            console.log(res)
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
                <span className="device-onof device-on">włączona</span>
            </div>
        </div>
        <div className="flex-sb">
            <div>
                <span className="device-temp">35°C</span>
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

export default DevicesListItem;