<template>
  <div class="home">
    <img id="main-logo" alt="heart" src="../assets/heart.jpg">
    <h1>Welcome to <em>The Spark</em></h1>
    <p>The Spark is the place where you can finally find that special someone to fill the empty void in your robot heart.</p>
    <p>Ranked as the top dating site for robots, we guarantee that we can find a match for you.</p>
    <img id="robot-love" alt="robot love" src="../assets/robot_love.jpg">
    <h3><em><a href="/match">Click here to get started!</a></em></h3>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {

  }
}
</script>

<style scoped>
.home {
  padding: 10px;
}

.home a {
  text-decoration: none;
  color: #2c3d51;
}

.home a:hover {
  color: #fcd4d7;
}

#main-logo {
  max-height: 350px;
  max-width: 350px;
}

#robot-love {
  width: 50%;
  height: auto;
}
</style>