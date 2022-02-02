import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";



const DeviceForm = ({deviceData}) => {
    let navigate = useNavigate();
    const [device, setDevice] = useState({
        deviceId: 0,
        name: '',
        apiUrl: '',
        meesageSwitchOn: '',
        meesageSwitchOff: '',
        phones: [''],
    })

    const handleChange = (k,v) => {
        setDevice({...device,...{[k]: v}});
    }

    const handlePhone = (i,v) => {
        let phones = [...device.phones];
        phones[i] = v;
        setDevice({...device,...{'phones': phones}});
    }

    const backToMain = () => {
        navigate("/", { replace: true });
    }

    useEffect(()=>{
        if(deviceData)
            setDevice(deviceData)
    },[deviceData]);
    

    return <form>
        <label>Nazwa urządzenia (max 15 znaków)</label>
        <input 
            type="text" 
            placeholder="np. Rolety - salon"
            value={device.name}
            onChange={e=>handleChange('name',e.target.value)}
            required />

        <label>Link do JSON</label>
        <input 
            type="text" 
            placeholder="link do JSON"
            value={device.apiUrl}
            onChange={e=>handleChange('apiUrl',e.target.value)}
            required />

        <label>Treść SMS gdy urządzenie się włączy</label>
        <input 
            type="text" 
            placeholder="np. Urządzenie zostało włączone"
            value={device.meesageSwitchOn}
            onChange={e=>handleChange('meesageSwitchOn',e.target.value)} />

        <label>Treść SMS gdy urządzenie się wyłączy</label>
        <input 
            type="text" 
            placeholder="np. Urządzenie zostało wyłączone" 
            value={device.meesageSwitchOff}
            onChange={e=>handleChange('meesageSwitchOff',e.target.value)} />
        {/* <div className="info">Pole nie może być puste</div> */}
        
        <label>Numery na jakie zostanie wysłany SMS</label>
        {device.phones.map((phone,index) => <div key={index}>
            <input 
                type="tel" 
                placeholder="np. 534735670"
                value={phone}
                onChange={e=>handlePhone(index,e.target.value)} />
        </div>)}

        <div className="flex">
            <button className="btn btn-danger" onClick={backToMain}>Cofnij</button>
            <button className="btn btn-success" onClick={()=>console.log(device)}>Zatwierdź</button>
        </div>
    </form>
};

export default DeviceForm;