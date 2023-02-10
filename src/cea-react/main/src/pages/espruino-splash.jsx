import {DeviceController} from '@espruino-tools/core'
import '../styles/espruino-splash-styles.css'
import {useState} from 'react'
export const EspruinoSplashPage = () => {
    const [device] = useState(new DeviceController())
    const [connected, setConnected] = useState(false)

    const [notificationData,setNotificationData] = useState("")
    const [showNotificationPopup,setShowNotificationPopup] = useState(false)

    const showNotification = (data,timeout=2000) => {
        setNotificationData(data)
        setShowNotificationPopup(true)
        setTimeout(()=>{
            setShowNotificationPopup(false)
        },timeout)
    }

    const connect = () => {
        device.connect().then(()=>{
            if(device.connected){
                setConnected(device.connected)
                showNotification("Connected Successfully")
            }
        })
    }
    const disconnect = () => {
        device.disconnect().then(()=>{
            setConnected(false)
            showNotification("Disconnected Successfully")
        })
    }

    return(
        <div id="page-root">
            <div className='image-container'></div>
            <h1 className='title-container'>Espruino Tools</h1>
            <p className='subtext-container'>Get started quick by looking at the docs  <a id="documentation-link" href="https://documentation-xi-liard.vercel.app">here</a>
            </p>
            {!connected ? 
            <button onClick={connect} className="esp-btn green">Connect</button> :
            <button onClick={disconnect} className='esp-btn red'>Disconnect</button>
            }
            {showNotificationPopup && <Notification data={notificationData}/>}
        </div>
    )
}

const Notification = ({data}) => <div className='connection-notification'><p>{data}</p></div>
