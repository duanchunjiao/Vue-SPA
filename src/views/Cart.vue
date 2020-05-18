<template>
    <div>
        <div class="goods" v-for="(item,index) in cartarr" :key="index">
            {{item.title}}
            <div class="goodsright">
                <i class="cubeic-remove" @click="removeCart(index)"></i>
                <span>{{item.cartCount}}</span>
                <i class="cubeic-add" @click="addCart(index)"></i>
            </div>
        </div>
        <cube-button style="margin:10px 0;">下单</cube-button>
        <cube-button @click="clearcart">清空购物车</cube-button>
    </div>
</template>

<script>
    /*mapGetters 辅助函数仅仅
    是将 store 中的 getter 映射到局部计算属性：
    在一般情况下子组件中获取store中属性的方式如下：
    */
    import {mapState} from 'vuex'
export default {
    data(){
        return{
            //cartarr:[]
        }
    },
    computed:{
        /*购物车里面的添加功能与state里面的修改数据功能进行对应
        * 这两个功能产生关系
        * 我再这里添加功能，状态中去判断是否有这个商品
        * 这样就把两个方法关联起来
        * 为组件创建计算属性以返回 Vuex store 中的状态*/
        ...mapState({
            cartarr:state=>state.cartarry/*拿到state里面的数据*/
        })
    },
    methods:{
        //减少商品
        removeCart(index){
            //两个方法都是传值给vuex的mutation改变state
            this.$store.commit('cartremove',index)
        },
        //增加商品
        addCart(index){
            this.$store.commit('cartadd',index)
        },
        //清空购物车
        clearcart(){
            this.$store.commit('clearcart')
        }
    }
}
</script>

<style lang="stylus" scoped>
    .goods
        padding 10px
        text-align left
    .goodsright
        float  right
    i
        font-size 18px
</style>