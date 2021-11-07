<template>
<div>
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
    }
  },
  computed: {
    robots() {
      return this.$root.$data.robots;
    }
  },
}
</script>
