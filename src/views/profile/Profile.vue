<template>
  <div>
    <nav-bar class="nav-bar">
      <template #center>我的档案</template>
    </nav-bar>
    <user-info />
    <list-view class="list"></list-view>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar';
import UserInfo from './childComps/UserInfo';
import ListView from './childComps/ListView';
export default {
  name: 'Profile',
  components: {
    NavBar,
    UserInfo,
    ListView,
  },
};
</script>

<style scoped>
.nav-bar {
  background: var(--color-tint);
  color: #fff;
  font-weight: bold;
}
.list {
  height: calc(100vh - 49px - 130px);
}
</style>
