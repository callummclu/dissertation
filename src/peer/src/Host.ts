import Peer from 'peerjs';
import { classes } from './styles/modal';
var QRCode = require('qrcode');

export class Host {
  peer: any;
  otherDeviceDomain: string;
  constructor(otherDeviceDomain: string = window.location.origin + '/peer') {
    this.peer = new Peer();
    this.otherDeviceDomain = otherDeviceDomain;
    this.peer.on('open', () => {
      this.#initialiseQR(this.peer.id);
    });
  }

  /**
   *
   * @param func callback function to be used with remoteStream data
   * @param info should stream information be returned
   */

  getVideo(func: Function) {
    this.peer.on('call', function (call: any) {
      call.answer();
      call.on('stream', function (remoteStream: any) {
        func(remoteStream, remoteStream.getVideoTracks()[0].getSettings());
      });
    });
  }

  getData(func: Function) {
    this.peer.on('connection', (conn: any) => {
      conn.on('data', (data: any) => {
        if (data == 'connection-success-esp-tools') {
          this.#showNotification();
        } else {
          func(data);
        }
      });
    });
  }

  #initialiseQR(id: string) {
    let path = `${this.otherDeviceDomain}?id=${id}`;

    QRCode.toCanvas(
      path,
      { errorCorrectionLevel: 'H' },
      (err: Error, canvas: HTMLCanvasElement) => {
        if (err) throw err;
        var body = document.getElementsByTagName('body')[0];

        var qrcontainer = document.createElement('div');
        qrcontainer.className = classes['qr-container'];

        var open_modal_btn = document.createElement('button');
        open_modal_btn.className = 'open-modal';

        open_modal_btn.onclick = function () {
          let modal_back = document.createElement('div');
          modal_back.className = 'modal-back';

          let modal = document.createElement('div');
          modal.className = 'modal';

          let header = document.createElement('div');
          header.className = 'header';

          let title = document.createElement('p');
          title.innerText = 'Peer to peer';

          let closeIcon = document.createElement('div');
          closeIcon.className = 'close-icon';

          closeIcon.onclick = function () {
            qrcontainer.removeChild(modal_back);
          };

          header.appendChild(title);
          header.appendChild(closeIcon);

          modal.appendChild(header);

          let subTextContainer = document.createElement('div');
          subTextContainer.className = 'container';

          subTextContainer.innerHTML = '<p>Connect to a mobile device</p>';

          modal.appendChild(subTextContainer);

          let qr_container = document.createElement('div');
          qr_container.className = 'qr-container';

          qr_container.appendChild(canvas);

          modal.appendChild(qr_container);

          let anchor = document.createElement('a');
          anchor.href = path;
          anchor.innerText = 'Click here if the QR code isnt working';

          modal.appendChild(anchor);

          modal_back.appendChild(modal);

          qrcontainer.appendChild(modal_back);
        };

        qrcontainer.appendChild(open_modal_btn);

        body.appendChild(qrcontainer);
      },
    );
  }

  #showNotification() {
    let root = document.getElementsByTagName('body')[0];
    let statusPopup = document.createElement('div');
    statusPopup.className = classes['peer-connection-notification'];
    statusPopup.innerHTML = '<p>Successful connection</p>';
    root!.appendChild(statusPopup);
    setTimeout(function () {
      statusPopup!.parentElement!.removeChild(statusPopup);
    }, 2000);
  }
}
