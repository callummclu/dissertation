import Peer from 'peerjs';

export class Connector {
  peer: any;
  conn: any;

  constructor() {
    this.peer = new Peer();
  }

  connectData(cb: Function = (data: any) => alert(data)) {
    this.conn = this.peer.connect(this.#getPeerId(), (data: any) => cb(data));
    this.conn.on('open', () => {
      this.conn.send('connection-success-esp-tools');
    });
  }

  connectVideo(direction: string = 'front') {
    var getUserMedia =
      (navigator as any).getUserMedia ||
      (navigator as any).webkitGetUserMedia ||
      (navigator as any).mozGetUserMedia;
    getUserMedia(
      {
        video: {
          facingMode: {
            exact: direction == 'front' ? 'user' : 'environment',
          },
        },
        audio: false,
      },
      (stream: any) => {
        var call = this.peer.call(this.#getPeerId(), stream);

        let body = document.getElementsByTagName('body')[0];
        let btn = document.createElement('button');
        btn.id = 'close-btn-esp-tools';
        btn.innerText = 'close connection';

        btn.onclick = function () {
          call.close();
        };
        body.appendChild(btn);
      },
    );
  }

  #getPeerId(): string {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    return params.id;
  }
}
