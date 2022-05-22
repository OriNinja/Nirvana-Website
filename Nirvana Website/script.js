var mobile = document.getElementById("mobile-view")
var desktop = document.getElementById("desktop-view")
if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
  desktop.style = "display: none"
}else{
  mobile.style = "display: none"
}
