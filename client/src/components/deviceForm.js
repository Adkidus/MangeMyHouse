import axiosConfig from '../utils/axiosConfig';
import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

const DeviceForm = ({deviceData}) => {
    let navigate = useNavigate();
    const [device, setDevice] = useState({
        _id: 0,
        name: '',
        apiUrl: '',
        meesageSwitchOn: '',
        meesageSwitchOff: '',
        phones: [''],
        mails: [''],
        type: 1,
    })

    const handleChange = (k,v) => {
        setDevice({...device,...{[k]: v}});
    }

    const handlePhone = (i,v) => {
        let phones = [...device.phones];
        phones[i] = v;
        setDevice({...device,...{'phones': phones}});
    }

    const addPhone = () => {
        let phones = [...device.phones];
        phones.push('');
        setDevice({...device,...{'phones': phones}});
    }

    const deletePhone = i => {
        let phones = [...device.phones];
        phones.splice(i, 1);
        setDevice({...device,...{'phones': phones}});
    }

    const handleMail = (i,v) => {
        let mails = [...device.mails];
        mails[i] = v;
        setDevice({...device,...{'mails': mails}});
    }

    const addMail = () => {
        let mails = [...device.mails];
        mails.push('');
        setDevice({...device,...{'mails': mails}});
    }

    const deleteMail = i => {
        let mails = [...device.mails];
        mails.splice(i, 1);
        setDevice({...device,...{'mails': mails}});
    }

    const backToMain = () => {
        navigate("/", { replace: true });
    }

    useEffect(()=>{
        if(deviceData)
            setDevice(deviceData)
    },[deviceData]);

    const saveForm = e => {
        e.preventDefault();
        let dataToSave = {...device}
        let postUrl = 'update'
        if(device._id === 0){
            postUrl = 'new';
            delete dataToSave._id;
        }
        axiosConfig.post(`devices/${postUrl}`, dataToSave)
        .then(res => {
            backToMain()
         })
         .catch(e => {
            alert(e)
         })
    }
    
    return <form className="content" onSubmit={saveForm}>
        <label>Nazwa urz??dzenia (max 15 znak??w)</label>
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

        <label>Tre???? SMS gdy urz??dzenie si?? w????czy</label>
        <input 
            type="text" 
            placeholder="np. Urz??dzenie zosta??o w????czone"
            value={device.meesageSwitchOn}
            onChange={e=>handleChange('meesageSwitchOn',e.target.value)} />

        <label>Tre???? SMS gdy urz??dzenie si?? wy????czy</label>
        <input 
            type="text" 
            placeholder="np. Urz??dzenie zosta??o wy????czone" 
            value={device.meesageSwitchOff}
            onChange={e=>handleChange('meesageSwitchOff',e.target.value)} />
        {/* <div className="info">Pole nie mo??e by?? puste</div> */}
        
        <label>Numery na jakie zostanie wys??any SMS</label>
        {device.phones.map((phone,index) => <div key={index}>
                <div className="flex">
                    <input 
                        type="tel" 
                        placeholder="np. 534735670"
                        style={{flex: 1}}
                        value={phone}
                        onChange={e=>handlePhone(index,e.target.value)} />
                    <button 
                        type="button" 
                        className="btn btn-danger" 
                        style={{flex:'0 1 64px'}}
                        onClick={()=>deletePhone(index)}    
                    >x</button>
                </div>
        </div>)}
        <button type="button" className="btn btn-small btn-info" onClick={addPhone}>Dodaj nowy numer</button>

        <label for="mail">Wy??lij powiadomienie na adres email:</label>
        {device.mails.map((mail,index) => <div key={index}>
                <div className="flex">
                    <input 
                        type="email" 
                        placeholder="np. jan.kowalski@gmail.com"
                        style={{flex: 1}}
                        value={mail}
                        onChange={e=>handleMail(index,e.target.value)} />
                    <button 
                        type="button" 
                        className="btn btn-danger" 
                        style={{flex:'0 1 64px'}}
                        onClick={()=>deleteMail(index)}    
                    >x</button>
                </div>
        </div>)}
        <button type="button" className="btn btn-small btn-info" onClick={addMail}>Dodaj adres email</button>

        <label>Wybierz typ urz??dzenia</label>
        <select 
            id="types" 
            name="types" 
            value={device.type}
            onChange={e=>handleChange('type',Number(e.target.value))}
        >
            <option value="1">Procent</option>
            <option value="2">Temperatura</option>
            <option value="3">On/Off</option>
        </select>

        <div className="flex">
            <button type="button" className="btn btn-danger" onClick={backToMain}>Cofnij</button>
            <button className="btn btn-success" type="submit">Zatwierd??</button>
        </div>
    </form>
};

export default DeviceForm;