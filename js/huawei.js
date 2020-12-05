// 查找触发事件元素
var btns=document.getElementsByTagName("button");
console.log(btns)
// 绑定事件处理函数
for(var btn of btns){
  btn.onclick=function(){
    // 查找修改元素
    var span=this.parentElement.children[0];
    var n=parseInt(span.innerHTML);
    console.log(n)
    // 修改元素
    if(this.innerHTML=="+"){
      n++;
    }else if(n>1){
      n--
    }
    span.innerHTML=n
  }
}