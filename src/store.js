import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store= new Vuex.Store({
  state: {
    user:[],
    token:'',/*存储token*/
    //读取之后要将JSON字符串转换成为JSON对象，使用JSON.parse()方法
    /*
    * 一般我们会将JSON存入localStorage中，
    * 但是在localStorage会自动将localStorage转换成为字符串形式
     这个时候我们可以使用JSON.stringify()这个方法，
     来将JSON转换成为JSON字符串*/
    cartarry:JSON.parse(localStorage.getItem('cartarry')) || [],//存储购物车商品的数组
  },
  mutations: {
    //设置vuex的token
    settoken(state,token){/*修改token的状态*/
      state.token=token
    },
    //添加商品到购物车
    //更新数据
    tocart(state,tag){
      let goods=state.cartarry.find(v=>v.title==tag.label)/*carr.title ?= tag.bable*/
      if(goods){
        goods.cartCount+=1
      }else{
        state.cartarry.push({title:tag.label,cartCount:1})
      }
    },
//购物车商品数量加一
    cartadd(state,index){
      state.cartarry[index].cartCount++
    },
    //购物车商品数量减一
    cartremove(state,index){
      if(state.cartarry[index].cartCount>1){
        state.cartarry[index].cartCount--
      }else{
        if(window.confirm('确定从购物车移除商品吗？')){
          state.cartarry.splice(index,1)
        }
      }
    },
    //清空购物车
    clearcart(state){
      state.cartarry=[]
    }
  },
  actions: {

  },
  //Vuex 允许我们在store中定义getter属性（可以认为是 store 的计算属性）。
  // 就像计算属性一样，getter 的返回值会根据它的依赖被缓存起来，
  // 且只有当它的依赖值发生了改变才会被重新计算。


  getters:{
    countsum:state=>{
      let num=0
      state.cartarry.forEach(v=>{
        num+=v.cartCount
      })
      return num
    }
  }
})
//监听每次调用mutations的时候,都会进这个方法，然后我们可以做一些自己想做的-处理
///*监听哪一个mutaion 被调用了*/
//localStorage.setItem(key,value)：将value存储到key字段
//设置指定key的数据（JSON格式）
//们会将JSON存入localStorage中，但是在localStorage会自动将localStorage转换成为字符串形式
//
// 这个时候我们可以使用JSON.stringify()这个方法，来将JSON转换成为JSON字符串
store.subscribe((mutations,state)=>{
  localStorage.setItem('cartarry',JSON.stringify(state.cartarry))
})
export default store