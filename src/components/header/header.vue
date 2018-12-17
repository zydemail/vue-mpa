<template>
  <div class="header">
    <div class="bd">
      <img class="logo" src="@/assets/images/header/logo.png">
      <div class="right-part">
        <span data-id="spUsername">{{ username }}</span>
        <span>
          <a class="link" href="javascript:void(0)">注销</a>
        </span>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.header {
  border-bottom: solid 2px #458aff;
}
.header .bd {
  overflow: hidden;
  width: 1000px;
  margin: 30px auto;
}

.header .logo {
  height: 40px;
  float: left;
}

.header .project {
  font-size: 40px;
}

.header .right-part {
  float: right;
}
</style>
<script>
export default {
  name: 'Header',
  data () {
    return {
      username: '匿名'
    }
  },
  created () {
  },
  methods: {
  }
}
</script>
