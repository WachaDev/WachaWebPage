<template>
    <h1 class="title"><span>Why me?</span></h1>
</template>

<style scoped>
span {
    position: relative;
    padding-bottom: 5px;
}
span::after{
    position: absolute; 
    left: 0; 
    bottom: 0; 
    width: 100%; 
    height: 1px; 
    border-bottom: 1px solid #000; 
    content: ""
}

</style>