let html = document.querySelector("#html");
let style = document.querySelector("#style");
let n = -1;
let string = `
/*你好，我是csg
 *接下来我展示一下我的前端功底
 *首先我需要准备一个div
 */
#div1{
  border:1px solid red;
  width:300px;
  height:300px;
}
/*接下来要把这个div变成太极
 *看好了
 *先把div变为圆形
 */
#div1{
  border-radius:50%;
  box-shadow:0 0 3px rgba(0,0,0,0.5);
  border:none;
}
/*在使用颜色渐变填充背景
 *使它变成黑白两色
 */
#div1{
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,0,0,1) 50%, rgba(255,255,255,1) 50%);
}
/*接下来使用css的伪元素使他们成勾玉状*/
#div1::before{
  content:'';
  width:150px;
  height:150px;
  border-radius:50%;
  position:absolute;
  display:block;
  top:0px;
  transform:translate(50%);
  background: radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%);
}
#div1::after{
  content:'';
  width:150px;
  height:150px;
  bottom:0px;
  border-radius:50%;
  position:absolute;
  display:block;
  transform:translate(50%);
  background: radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(255,255,255,1) 0%, rgba(231,231,231,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
/*这样一个太极就出来了*/
`;
let string2 = "";

let add = () => {
  setTimeout(() => {
    n++;

    if (string[n] === "\n") {
      string2 = string2 + "<br>";
    } else if (string[n] === " ") {
      string2 = string2 + "&nbsp;";
    } else {
      string2 = string2 + string[n];
    }

    if (n < string.length) {
      html.innerHTML = string2;
      style.innerHTML = string.substring(0, n + 1);
      window.scrollTo(0, 99999);
      html.scrollTo(0, 99999);
      add();
    }
  }, 50);
};
add();
