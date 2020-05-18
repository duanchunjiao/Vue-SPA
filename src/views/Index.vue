<template>
    <div id="index">
        <!-- 轮播图 -->
        <cube-slide ref="slide" :data="items" @change="changePage">
            <!--1.我们可以用 v-for 指令基于一个数组来渲染一个列表。v-for
            指令需要使用 item in items 形式的特殊语法，
            其中 items 是源数据数组，而 item 则是被迭代的数组元素的别名
           2. 在 v-for 块中，我们可以访问所有父作用域的属性。
            v-for 还支持一个可选的第二个参数，即当前项的索引。
            3.为了给 Vue 一个提示，以便它能跟踪每个节点的身份，从而重用和重新排序现有元素，
            你需要为每项提供一个唯一 key 属性：-->
            <cube-slide-item v-for="(item, index) in items" :key="index" @click.native="clickHandler(item, index)">
                <a :href="item.url">
                <img class="banner" :src="item.image">
                </a>
            </cube-slide-item>
        </cube-slide>
        <!-- 滚动分类 -->
        <cube-slide ref="slidelists"  :data="lists">
            <cube-slide-item v-for="(list, index) in lists" :key="index">
               <ul class="listul">
                   <li class="listli" v-for="(item,index1) in list" :key="index1">
                       <a :href="item.url">
                           <img :src="item.image" alt="">
                           <p>{{item.label}}</p>
                       </a>
                   </li>
               </ul>
            </cube-slide-item>
        </cube-slide>
    </div>
</template>

<script>
export default {
  data() {
    return {
      items: [],//轮播图数组
      lists:[],//滚动分类数组
    }
  },
  methods: {
    changePage(current) {
    //   console.log('当前轮播图序号为:' + current)
    },
    clickHandler(item, index) {
      console.log(item, index)
    }
  },
    /*数组是空的要给数据做初始化，取得数据
    * creadted钩子函数主要是用来初始化数据。
    * mounted钩子函数一般是用来向后端发起请求拿到数据以后做一些业务处理。
    * created函数中调用ajax获取页面初始化所需的数据。*/
 async created(){
     try{
         //获取轮播图数据
         const items=await this.$http.get('/api/banner')
         this.items=items.data
         //获取滚动分类数据
         const lists=await this.$http.get('/api/rollinglist')
         this.lists=lists.data
     }catch(err){
         console.log(err)
     }
  }
}
</script>

<style lang="stylus" scoped>
    #index
        a
            .banner
                display block
                width 100%
                height  175px
        .listul
            display flex
            flex-wrap   wrap
        .listli
            width 20%
            justify-content center
            img
                width 35px
                height  35px
                border-radius  50%
                padding 5px 0
            p
                font-size  14px
                padding-bottom  10px
</style>

