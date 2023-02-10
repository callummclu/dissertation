import { showTemplate } from "./espruino-template";
import { Host } from "@espruino-tools/peer";
import "./styles/app.scss";

window.onload = function () {
  let p = new Host(window.location.origin + "/peer.html");

  p.getData(function (data) {
    alert(data);
  });

  p.getVideo(function (data) {
    let body = document.getElementsByTagName("body")[0];
    let video = document.createElement("video");
    video.srcObject = data;
    video.play();
    body.appendChild(video);
  });
  showTemplate();
};
