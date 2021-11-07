<template>
<div>
  <h1>Find your match!</h1>
  <p>Fill out this form and we will suggest a matches for you!</p>
  <div class="wrapper">
    <div class="search">
      <form class="pure-form">
        <h4>Favorite Color:</h4>
        <input v-model="color" />
      </form>
    </div>
  </div>
  <div class="wrapper">
    <div class="search">
      <form class="pure-form">
        <h4>Favorite Animal:</h4>
        <input v-model="animal" />
      </form>
    </div>
  </div>
  <div class="wrapper">
    <div class="search">
      <form class="pure-form">
        <h4>Favorite Word:</h4>
        <input v-model="word" />
      </form>
    </div>
  </div>
  <div class="wrapper">
    <div class="search">
      <form class="pure-form">
        <h4>Favorite Movie:</h4>
        <input v-model="movie" />
      </form>
    </div>
  </div>
  <p>Browse suggested matches below...</p>
  <RobotList :robots="robots" />
</div>
</template>

<script>
import RobotList from "../components/RobotList.vue"
export default {
  name: 'Home',
  components: {
    RobotList
  },
  data() {
    return {
        color: '',
        animal: '',
        word: '',
        movie: '',
    }
  },
  computed: {
    robots() {
        let color = this.$root.$data.robots.filter(robot => robot.color.toLowerCase().search(this.color.toLowerCase()) >= 0);
        if (color.length === 0) color = this.$root.$data.robots;
        let animal = color.filter(robot => robot.animal.toLowerCase().search(this.animal.toLowerCase()) >= 0);
        if (animal.length === 0) animal = color;
        let word = animal.filter(robot => robot.word.toLowerCase().search(this.word.toLowerCase()) >= 0);
        if (word.length === 0) word = animal;
        let movie = word.filter(robot => robot.movie.toLowerCase().search(this.movie.toLowerCase()) >= 0);
        if (movie.length === 0) movie = word;
      return movie;
  }
  },
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1em;
}

.search {
  /* border: 1px solid #ccc;
  border-radius: 4px; */
  width: 50%;
}

form {
  display: table;
  width: 100%;
}

form h4 {
    display: table-cell;
}

i {
  display: table-cell;
  padding-left: 10px;
  width: 1px;
}

input {
  display: table-cell;
  font-size: 20px;
  border: none !important;
  box-shadow: none !important;
  width: 100%;
  height: 40px;
}
</style>
