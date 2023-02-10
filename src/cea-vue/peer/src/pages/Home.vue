<template>
    <div id="page-root">
      <div class='image-container'></div>
        <h1 class='title-container'>Espruino Tools</h1>
        <p class='subtext-container'>Get started quick by looking at the docs  <a id="documentation-link" href="https://documentation-xi-liard.vercel.app">here</a></p>
          <button v-if="!this.connected" v-on:click="this.connect()" class="esp-btn green">Connect</button>
          <button v-if="this.connected" v-on:click="this.disconnect()" class='esp-btn red'>Disconnect</button>
        <div v-if="showNotificationPopup" class="connection-notification">
          <p>{{this.notificationData}}</p>
        </div>
        <video id="remote-video"></video>
    </div>
  </template>
  
  <script>
  import {DeviceController} from '@espruino-tools/core'
  import {Host} from '@espruino-tools/peer'
  import '../styles/espruino-splash-styles.css'
  const device = new DeviceController()
  const p = new Host()

  p.getVideo(function(stream){
    let video = document.getElementById("remote-video")
    video.srcObject = stream;
    video.play();
  })

  p.getData(function(data){
    alert(data)
  })
  
  export default {
    name: 'Home-page',
    data(){
      return {
        connected: false,
        showNotificationPopup: false,
        notificationData:""
      }
    },
    methods: {
      connect(){
        device.connect().then(()=>{
          if(device.connected){
            this.connected = true;
            this.showNotificationPopup = true;
            this.notificationData = "Connected Successfully"
            setTimeout(()=>{
              this.showNotificationPopup = false;
            },2000)
          }
        })
      },
      disconnect(){
        device.disconnect().then(()=>{
          this.connected = false;
          this.showNotificationPopup = true;
          this.notificationData = "Disconnected Successfully"
          setTimeout(()=>{
              this.showNotificationPopup = false;
            },2000)
        })
      },
      showNotification(){
  
      }
    }
  }
  </script>
  