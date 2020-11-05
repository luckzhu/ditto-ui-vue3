<template>
    <div>
        <router-link to="/">hello</router-link>
        |
        <router-link to="/test">test</router-link>
    </div>
    <router-view></router-view>
</template>

<script>
  export default {
    name: 'App',
  }
</script>
