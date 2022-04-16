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
 
.title {
  font-family: "Fugaz One";
  font-size: 2.5rem;
  font-weight: bold;
  color: black;
  text-align: left;
  margin-bottom: 2rem;
}

span {
  position: relative;
  padding-bottom: 9px;
}

span::after {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 50px;
  /* height: 2px; */
  border-bottom: 10px solid #c9050b;
  content: "";
  border-radius: 8px;
}
</style>
