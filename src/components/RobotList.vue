<template>
<div class="wrapper">
<div class="robots">
    <div class="robot" v-for="robot in robots" :key="robot.id">
    <div class="info">
        <h1>"{{robot.human_name}}"</h1>
        <p>{{robot.name}}</p>
    </div>
    <div class="image" v-bind:style="{ backgroundColor: robot.color }">
        <img :src="robot.avatar">
    </div>
    <div class="love">
        <button class="auto" v-on:click.prevent="select(robot)">Look at Profile</button>
    </div>
    </div>
</div>
</div>
</template>

<script>
export default {
  name: 'RobotList',
  props: {
    robots: Array
  },
  methods: {
      select(robot) {
          this.$root.$data.previous = robot;
          this.$root.$data.last = 1;
          this.$router.push('/last-viewed')
      }
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.robots {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.robot {
  margin: 10px;
  margin-top: 50px;
  width: 200px;
  border: 2px solid #333;
  background-color: rgb(24, 56, 124);
}

.robot img {
  border: 2px solid #333;
  height: 250px;
  width: 200px;
  object-fit: cover;
}

.robot .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.info {
  background: #fcd4d7;
  color: #000;
  padding: 10px 30px;
  height: 80px;
}

.info h1 {
  font-size: 16px;
}

.info h2 {
  font-size: 14px;
}

.info p {
  margin: 0px;
  font-size: 10px;
}

button {
  height: 50px;
  background: rgb(24, 56, 124);
  color: white;
  border: none;
}

.auto {
  margin-left: auto;
}
</style>
