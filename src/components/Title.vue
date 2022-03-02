<template>
  <div>
    <h1 class="title"><span>{{ text }}</span></h1>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    } 
  }
}
</script>


<style scoped>
/* TODO: Undestand this pls */
 
span {
  position: relative;
  padding-bottom: 9px;
}

span::after {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1px;
  border-bottom: 10px solid #c9050b;
  content: "";
}
</style>
