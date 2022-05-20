<template>
  <div id="app">
    <nav>
    <p class="name2">258922</p>
    <p class="name3">264616</p>
    <button class="button-report">369</button>
    <button class="button-submit">963</button>
    <button class="b1">basic</button>
      <ul>
        <li></li>
        <li><a href="">west</a></li>
        <li><a href="">south</a></li>
      </ul>
      <ol>
        <li><a href="">esat</a></li>
        <li><a href="">top</a></li>
      </ol>
      <h1>aaaaaaaaa</h1>
      <p>pppppppp</p>
    </nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <router-view />
  </div>
</template>
<script>
</script>


<style lang="scss">
@import"/assets/reset";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
@mixin myType($color, $width, $backgroud ){
    border:$width 
    solid
    $color;
    background: $backgroud;
}
@mixin isMyType{
  color: rgb(144, 0, 255);
  background:red;
}
.name2{
  @include isMyType;
}
.name3{
  @include myType(blue,2px,rgb(9, 255, 0))
}
.b1{
  border: none;
  padding: 15px 30px;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
}
.button-report  {
  @extend .b1;
  background-color: red;
}
.button-submit  {
  @extend .b1;
  background-color: green;
  color: white;
}
</style>
