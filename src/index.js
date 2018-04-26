import './style.css';
import logo from './logo.gif';

import 'bootstrap-loader';

var div=document.createElement("div");
div.innerHTML="Hello Johnyu";
div.classList.add("hello");
document.body.appendChild(div);

var img=document.createElement("img");
img.setAttribute("src",logo);
document.body.appendChild(img);

$("<p>").text("这是一个段落啊")
.addClass("hello")
.appendTo('body');