<template>
  <div class="param-info">
    <table class="info-table">
      <tr v-for="(item, index) in paramInfo.infos" :key="index">
        <td>{{ item.key }}</td>
        <td class="item-value">{{ item.value }}</td>
      </tr>
    </table>
    <div class="info-img" v-if="paramInfo.image !== ''">
      <img :src="paramInfo.image" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailParamInfo',
  props: {
    paramInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped lang="less">
.info-table {
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 0 1vh;

  tr {
    display: flex;
    line-height: 4vh;
    flex-wrap: wrap;
    align-items: center;
    border-bottom: 0.1vh solid rgba(28, 26, 28, 0.1);
    td {
      flex: 1;
    }
  }
  .item-value {
    color: var(--color-high-text);
  }
}
.info-img {
  img {
    width: 100%;
  }
}
</style>
