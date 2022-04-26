<template>
  <b-button @click="increment">+1</b-button>
</template>

<script>
  export default {
    methods: {
      increment(){
        // $storeとする事でどこからでも呼べるようになる
        this.$store.state.number++;
      },
    },
  }
</script>