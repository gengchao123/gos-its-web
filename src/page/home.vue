<template>
  <div id="home">
    <nav-header></nav-header>
  </div>
</template>

<script>
import navHeader from '../components/nav-header'
import * as vuex from 'vuex'
export default {
  data () {
    return {
    }
  },
  computed: {
    ...vuex.mapState({
    })
  },
  components: {
    navHeader
  },
  created () {
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style lang="scss">
  #home {
    font-size: 20px;
    background: red;
  }
</style>
