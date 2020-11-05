<template>
    <div class="document">
        <TopNavigation/>
        <div class="main-container">
            <aside class="sidebar">
                <ul>
                    <li>
                        <router-link to="/doc/switch">Switch</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/button">Button</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/dialog">Dialog</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/tabs">Tabs</router-link>
                    </li>
                </ul>
            </aside>
            <main class="main">
                <router-view></router-view>
            </main>
        </div>

    </div>

</template>

<script lang="ts">
  import TopNavigation from '../shared/TopNavigation.vue'

  export default {
    components: {
      TopNavigation
    }
  }
</script>

<style lang="scss" scoped>
    .document {
        .main-container {
            height: 100%;
            .sidebar {
                position: fixed;
                top: 0;
                left: 0;
                width: 200px;
                height: 100%;
                padding-top: 80px;
                border: 1px solid #ddd;
                li {
                    list-style: none;
                    margin: 10px 0;
                }
            }
            .main {
                margin-left: 200px;
                padding: 20px;
                border: 1px solid #ddd;
                min-height: calc(100vh - 64px);
            }
        }
    }
</style>
