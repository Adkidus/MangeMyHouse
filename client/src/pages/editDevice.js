import React, {useState, useEffect} from "react";
import DeviceForm from "../components/deviceForm";
import { useParams, useNavigate } from 'react-router-dom';
import axiosConfig from '../utils/axiosConfig';

const EditDevice = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [device, setDevice] = useState(null)
    useEffect(() => {
        axiosConfig.get(`devices/byId/${params.deviceID}`)
        .then(res => {
            setDevice(res.data)
         })
         .catch(e => {
            alert(e)
            navigate("/", { replace: true });
         })
    },[])
    const deleteDevice = () => {
        if (window.confirm("Czy napewno chcesz usunac?") == true) {
            axiosConfig.delete(`devices/${params.deviceID}`)
            .then(res => {
                setDevice(res.data)
            })
            .catch(e => {
                alert(e)
            })
        }
    }
    return <section>
        {device ? <div className="container"> 
            <div className="flex">
                <h1>Edytuj urządzenie</h1>
                <span className="delete-device" onClick={deleteDevice}>Usuń to urządzenie</span>
            </div>
            <DeviceForm deviceData={device} />
        </div> : ''}
    </section>;
}

export default EditDevice;