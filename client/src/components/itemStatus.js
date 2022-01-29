import React, {useEffect, useState} from 'react';
import axios from 'axios';

const ItemStatus = ({device}) => {
    const [deviceInfo, setDeviceInfo] = useState({
        connected: false,
        on: false
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
            console.log('stauts')
            setDeviceInfo(res.data)
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
                {deviceInfo.connected && deviceInfo.on?
                    <span className="device-onof device-on">włączona</span> 
                    : <span className="device-onof device-off">wyłączona</span>
                }
            </div>
        </div>
        <div className="flex-sb">
            <div>
                
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

export default ItemStatus;