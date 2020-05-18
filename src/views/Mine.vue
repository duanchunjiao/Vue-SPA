<template>
    <div>
        <img class="headerimg" src="https://timgsa.baidu.com/timg?image&amp;quality=80&amp;size=b9999_10000&amp;sec=1587200907273&amp;di=281ba95c6f0ebca3e4a7f157a64beb9e&amp;imgtype=0&amp;src=http%3A%2F%2Fku.90sjimg.com%2Felement_origin_min_pic%2F17%2F08%2F11%2F4563e2d916083363316c10747465fe8b.jpg%2521%2Ffwfh%2F804x785%2Fquality%2F90%2Funsharp%2Ftrue%2Fcompress%2Ftrue" alt="">
        <ul>
            <li v-for="item in minearry" class="mineitem" @click="itemclick(item)" :key="item.label">
                <span class="minetitle">{{item.label}}</span>
                <i class="cubeic-arrow"></i>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            minearry:[
                {label:'商品收藏'},
                {label:'我的足迹'},
                {label:'店铺收藏'},
                {label:'我的订单'},
                {label:'退出',type:'exit'},
            ]
        }
    },
    methods:{
        itemclick(item){
            if(item.type=='exit'){
                /*q清除token*/
                this.$store.commit('settoken','')
                localStorage.removeItem('token')
                /*定位到登录页面*/
                this.$router.push({path:'/login'})
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
    .mineitem
        font-size  14px
        text-align left
        height  50px
        line-height 50px
        padding-left 5%
        border-bottom 1px solid #eee
        .minetitle
            display inline-block
            width 90%
    .headerimg
        height  170px
        width  100%
</style>