<template>
    <div class="home">
        <TopNavigation/>
        <main class="main">
            <h1>ditto-ui</h1>
            <h2>一个练习用的 Vue3 UI框架</h2>
            <div class="links">
                <a href="http://github.com" target="_blank">Github</a>
                <router-link to="/doc">Start</router-link>
            </div>
        </main>
    </div>
</template>


<script lang="ts">
  import TopNavigation from '../shared/TopNavigation.vue';

  export default {
    components: {
      TopNavigation,
    }
  }

</script>

<style lang="scss">
    .home {
        display: flex;
        flex-direction: column;
        .main {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .links {
                margin-top: 20px;
                > a {
                    border: 1px solid #42b983;
                    border-radius: 10px;
                    margin: 0 20px;
                    padding: 10px 20px;
                }
            }
        }
    }
</style>
