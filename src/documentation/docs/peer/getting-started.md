---
sidebar_position: 1
---

# Getting Started

This package is an extension on the peerjs package, the main differences are an over narrowing of functionality to what would possibly be used whilst using espruino devices.

This package consists of a Host and Connector object, each of which are to be used by different web applications or pages.

## NPX

To get started with the NPX Tool use the command below

```
npx create-espruino-app my-peer-test --peer
```

## NPM

To get started without the NPX Tool you can import the npm package like so

```
npm i @espruino-tools/peer
```

```javascript
import { Host, Connector } from "@espruino-tools/peer";
```

## CDN

To get started in a plain html page, you can use the unpkg link

just import as shown below

```html
<script src="https://unpkg.com/@espruino-tools/peer@latest/min/main.min.js"></script>
```

From here you are ready to use the package like so

```html
<script>
  let host = new ESPT_peer.Host();

  host.getData(function (data) {
    console.log(data);
  });
</script>
```
