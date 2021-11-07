<template>
<div>
<div class="robot">
    <div class="card">
        <div class="info">
            <h1>"{{this.$root.$data.previous.human_name}}"</h1>
            <p>{{this.$root.$data.previous.name}}</p>
        </div>
        <div class="image" v-bind:style="{ backgroundColor: this.$root.$data.previous.color }">
            <img :src="this.$root.$data.previous.avatar">
        </div>
    </div>
    <div class="extra">
        <p>Hi! My name is {{this.$root.$data.previous.name}}, but you can call me 
            {{this.$root.$data.previous.human_name}}. I was created by {{this.$root.$data.previous.manufacturer}}
            on {{this.$root.$data.previous.manufacture_date}}. My favorite color is
            the color {{this.$root.$data.previous.color}}. I really love the movie "{{this.$root.$data.previous.movie}}".
            I also recently learned the meaning of the word "{{this.$root.$data.previous.word}}". 
            Oh and my favorite animal...definitely the {{this.$root.$data.previous.animal}}.
        </p>
    </div>
</div>
</div>
</template>

<script>

</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.robot {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.card {
  margin: 10px;
  margin-top: 50px;
  width: 200px;
  border: 2px solid #333;
  background-color: rgb(14, 36, 97);
}

.card img {
  border: 2px solid #333;
  height: 250px;
  width: 200px;
  object-fit: cover;
}

.card .image {
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

.extra {
    font-size: 24px;
    padding: 3em;
}

.auto {
  margin-left: auto;
}
</style>
