<template>

  <div class="side">
    <ul class="menu">
      <li>
        <span class="menu-text"><span class="addicon"><i class="icon icon-menu-function"/></span>创作</span>
        <ul class="menu-sub">
          <li :class="{active: isPublish}" class="articlePublish"><a href="/pcpages/article/publish.html" class="menu-sub-text ">内容发布</a>
          </li>
        </ul>
      </li>
      <li>
        <span href="#x" class="menu-text"><span class="addicon"><i class="icon icon-menu-manage"/></span>管理</span>
        <ul class="menu-sub">
          <li :class="{active: isArticleList}" class="articleManage">
            <a href="/pcpages/article/articleList.html" class="menu-sub-text ">我的内容</a>
          </li>
          <!-- <li class="matManage menu-item-tips">
            <a href="/article/resourceList.html" class="menu-sub-text ">我的素材</a>
          </li> -->
        </ul>
      </li>
    </ul>
  </div>
</template>
<style lang="scss">
@import "./tmenu.scss";
.icon-menu-function {
    width: 14px;
    height: 14px;
    background: url(~@/assets/images/tmenu/menu-function.png) no-repeat;
}
.icon-menu-manage {
    width: 14px;
    height: 14px;
    background: url(~@/assets/images/tmenu/menu-manage.png) no-repeat;
}
</style>
<script>
export default {
  name: 'Tmenu',
  data () {
    return {
      // tab内容
      panes: [],
      // tab标题
      path: location.pathname,
      // 当前tab索引
      isPublish: location.pathname.indexOf('publish') > 0,
      isArticleList: location.pathname.indexOf('articleList') > 0
    }
  },
  watch: {
  },
  created () {
  },
  mounted () {
  },
  methods: {
  }
}
</script>
