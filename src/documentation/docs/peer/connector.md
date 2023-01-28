---
sidebar_position: 3
---

# Connector

The Connector object in the `peer` package is used on the device that is to send the data, i.e. if you are using data from a phone to control a laptop, the phone is the connector.

## Getting Started

To get started import the `peer` package and initialise a new `Connector` object, _if you are hosting these on the same web app via a router place this under the /peer route if possible, if not make changes to the Host objects domain parameter_

```javascript
import { Connector } from "@espruino-tools/peer";

let p = new Connector();
```

## Initialising for Data transfer

To initialise the data connection we do the following

```javascript
import { Connector } from "@espruino-tools/peer";

let p = new Connector();

p.connectData();
```

## Sending Data

To easily send data from the connector device we can do the following.

```javascript
import { Connector } from "@espruino-tools/peer";

let p = new Connector();

p.connectData();

p.conn.send("my chosen data");
```

## Initialising for Video transfer

To easily send video data from the connector device we can do the following, _connectVideo takes 1 parameter which is the direction of camera chosen, by default this is "front" for front facing camera, but can also be "back" as shown below for use of the phones main camera_

```javascript
import { Host } from "@espruino-tools/peer";

let p = new Host("optional param for other device domain");

p.connectVideo("back");
```
