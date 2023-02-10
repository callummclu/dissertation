---
sidebar_position: 2
---

# Host

The host object in the `peer` package is used on the device that is to receive the data, i.e. if you are using data from a phone to control a laptop, the laptop is the host

## Getting Started

To get started import the `peer` package and initialise a new `Host` object, _if your Connector object is running on a different web application/domain the host constructor takes a parameter of other device domain, if left blank we assume both devices run on the same domain with the connector being on /peer route_

```javascript
import { Host } from "@espruino-tools/peer";

let p = new Host("optional param for other device domain");
```

## Initialising for Data transfer

To easily receive data from the connector device we can do the following. Below we use example cases for the switch case this function can do whatever you want it to do.

```javascript
import { Host } from "@espruino-tools/peer";

let p = new Host("optional param for other device domain");

p.getData(function (data) {
  switch (data) {
    case "forward":
      // call forward function
      break;
    case "something else":
      // call something else function
      break;
    default:
      // log data or create a default function
      break;
  }
});
```

## Initialising for Video transfer

To easily receive video data from the connector device we can do the following. Below we use an example which creates a video element and passes the data into it.

```javascript
import { Host } from "@espruino-tools/peer";

let p = new Host("optional param for other device domain");

p.getVideo(function (data) {
  let body = document.getElementsByTagName("body")[0];
  let video = document.createElement("video");
  video.srcObject = data;
  video.play();
  body.appendChild(video);
});
```
