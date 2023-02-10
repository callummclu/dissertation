import { Connector } from "@espruino-tools/peer"
import { useEffect, useState } from "react"

export const PeerPage = () => {

    const [p] = useState(new Connector())

    useEffect(()=>{
        p.connectVideo()
        p.connectData()
    },[p])

    const sendData = () => {
        p.conn.send("test")
    }

    return(
        <>
            <h1>Peer Connection Page</h1>
            <button onClick={sendData}>send data</button>
        </>
    )
}