import React from 'react';

const LastUpdate = ({lastUpdateDate}) => {
    return <div className="flex-sb">
        <div className="device-status">Last Update: {lastUpdateDate}</div>
    </div>
}

export default LastUpdate;