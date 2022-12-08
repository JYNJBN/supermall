<template>
    <div class="tab-bar">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'TabBar'
}
</script>

<style lang="less" scoped>
.tab-bar {
    /*固定定位*/
    position: fixed;
    display: flex;
    align-items: flex-end;
    background-color: #f6f6f6;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0 -1px 1px rgb(100, 100, 100, 0.1);
}
</style>
