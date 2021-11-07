<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/match">Match</router-link> 
      <div v-if="this.$root.$data.last === 1"><router-link to="/last-viewed">Last Viewed</router-link></div>
    </div>
    <router-view/>
    <div id="footer">
      <a href="https://github.com/Speakman610/the-spark">https://github.com/Speakman610/the-spark</a>
    </div>
  </div>
</template>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #5599fe;
  min-height: 100vh;
  margin: 0;
  margin-bottom: 50px;
}

#nav {
  padding: 30px;
  font-size: 24px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #fcd4d7;
}

#footer {
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(14, 36, 97);
  position: fixed;
  bottom: 0;
}

#footer a {
  color: aliceblue;
  text-decoration: none;
}

#footer a:hover {
  color: rgb(173, 195, 255);
}
</style>
