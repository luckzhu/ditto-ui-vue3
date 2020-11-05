<template>
    <div class="topNav">
        <div class="logo">logo</div>

        <ul class="menuList">
            <li>文档</li>
            <li>GitHub</li>
        </ul>

    </div>
</template>

<style lang="scss">
    .topNav {
        background: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        z-index: 10;
        overflow: hidden;
        padding: 0 50px;
        height: 64px;
        color: rgba(0, 0, 0, .85);
        box-shadow: 0 1px 4px rgba(0, 21, 41, 0.2);
        .menuList {
            display: flex;
            > li {
                list-style: none;
                margin: 0 10px;
                cursor: pointer;
                &:hover {
                    margin-bottom: -2px;
                    border-bottom: 2px solid #42b983;
                }
            }
        }
    }
</style>
