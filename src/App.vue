<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body {
  margin: 0px;
  padding: 0px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

::-webkit-scrollbar {
  /* 外框 */
    width: 6px;
    height: 6px;
    background-color: #06183a;
    border-left: 1px solid #4a7deb;
}

::-webkit-scrollbar-track {
 /* 内框 */
  box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
}
::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #165296;
}

* {
    scrollbar-face-color: #165296;
    scrollbar-arrow-color: #165296;
    scrollbar-shadow-color:#06183a;
    scrollbar-track-color:#06183a;
}
@font-face {
  font-family: dinproRegular;
  src: url('../static/DINPro-Regular.otf');
}

@font-face {
  font-family: dinproLight;
  src: url('../static/DINPro-Light.otf');
}
@font-face {
  font-family: dinproMedium;
  src: url('../static/DINPro-Medium.otf');
}
@font-face {
  font-family: dinproBold;
  src: url('../static/DINPro-Bold.otf');
}
</style>
