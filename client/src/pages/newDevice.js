import React from "react";
import DeviceForm from "../components/deviceForm";

const NewDevice = () => {
    return <section>
        <div className="container"> 
            <div className="flex">
                <h1>Dodaj urządzenie</h1>
            </div>
            <DeviceForm />
        </div>
    </section>;
}

export default NewDevice;