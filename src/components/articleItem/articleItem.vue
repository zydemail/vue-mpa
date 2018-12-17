<template>
  <ul v-if="doclist&&doclist.length>0" class="article-list">
    <li v-for="item in doclist" :key="item.textid" data-type="NORMAL" class="article-item" data-id="20181121A0Q55U" data-source="0" data-pushed-flag="0" sch-pub-time="" @click="goToH5(item)">
      <div class="media article-media media-4-3">
        <div class="media-inner clearfix">
          <a v-if = "item.thumb.piclist.length > 0" href="javascript:;" target="_blank" class="pic " title="item.title">
            <img :src="item.thumb.piclist[0]" alt="item.title">
            <div class="media-mask" title=""/>
          </a>
          <div :class="{withoutImg: item.thumb.piclist.length === 0}" class="content">
            <h4> <a href="javascript:;" target="_blank" class="link-title ellipsis">{{ item.title }}</a> </h4>
            <div class="media-infos clearfix">
              <div class="pull-left">
                <span class="text text-date">{{ item.updatetime }}</span>
                <span v-if="item.status == 3" class="text text-status pubStatus">已发布</span>
                <span v-else-if="item.status == 2 || item.status == 1" class="text text-status pubStatus">审核中</span>
                <span v-else-if="item.status == 4 || item.status == 0" class="text text-status pubStatus">未发布</span>
              </div>
            </div>
            <div class="media-action clearfix">
              <div class="pull-left">
                <!-- 原创 -->
                <!-- <span class="text">评论和回复</span>
                <a href="/interactive/comment/#/!/view:detail?articleid=20181121A0Q55U&amp;commentid=3473784252&amp;from=artmgr" target="_blank" class="link link-comment"><em>0</em></a>
                <span class="text">手动发布</span> -->
              </div>
              <div v-if="item.status == 4 || item.status == 0" class="pull-right">
                <!-- 已发布：无操作 未发布：编辑，删除 -->
                <a :href="'/pcpages/article/publish.html?articleid='+ item.textid" class="delete link">编辑</a>
                <a class="delete link" @click="deleteArticle(item.textid)">删除</a>
              </div>
            </div>
            <div class="lables"/>
          </div>
        </div>
      </div>
    </li>
    <div class="loading-more more-end">
      <span class="m-line">——————</span>已显示全部内容
      <span class="m-line">——————</span>
    </div>
  </ul>
</template>
<style lang="scss">
@import "./articleItem.scss";
</style>
<script>
import { accessPost } from '@/utils/core/http.js'
export default {
  name: 'ArticleItem',
  props: ['doclist'],
  created () {
  },
  methods: {
    goToH5 (item) {
      // 已发布去H5页面
      if (item.status === 3) {
        location.href = '/mobile/article.html?docid=' + item.docid + '&name=&vType=0&VNK=8a0cd6c7'
      }
    },
    deleteArticle (id) {
      // 删除文章，remove dom节点
      accessPost('OPEditor_DeleteMyDoc', {
        textid: id
      }).then((data) => {
        if (data.retcode === 0) {
          location.reload()
        }
        // 发布成功跳转到articleList.html
      }, () => {
        console.log('接口异常，请稍后再试')
      })
    }
  }
}
</script>
