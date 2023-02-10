<template>
    <h1>Peer Connector</h1>
    <button v-on:click="sendData()"></button>
</template>
  
  <script>
  import {Connector} from '@espruino-tools/peer'
 
  let p = new Connector()

  p.connectData();
  p.connectVideo();

  export default {
    name: 'Peer-page',
    methods: {
      sendData(){
        p.conn.send("Data Works!!")
      }
    }
  }
  </script>
  