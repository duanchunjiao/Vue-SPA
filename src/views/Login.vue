<template>
    <div>
        <img class="headerimg" src="https://timgsa.baidu.com/timg?image&amp;quality=80&amp;size=b9999_10000&amp;sec=1587200907273&amp;di=281ba95c6f0ebca3e4a7f157a64beb9e&amp;imgtype=0&amp;src=http%3A%2F%2Fku.90sjimg.com%2Felement_origin_min_pic%2F17%2F08%2F11%2F4563e2d916083363316c10747465fe8b.jpg%2521%2Ffwfh%2F804x785%2Fquality%2F90%2Funsharp%2Ftrue%2Fcompress%2Ftrue" alt="">
       <cube-form
            :model="model"
            :schema="schema"
            @submit="submitHandler"><!--submitHandler是一个方法，写在data的methods里面-->
       </cube-form>
        <cube-button  :outline="true" type="submit" @click="regist">没有用户名？去注册</cube-button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            model:{
                username:'',
                password:''
            },
            schema:{
                fields:[
                    //用户名配置
                    {
                        type:'input',
                        modelKey:'username',/*在model中所对应的数据源的名字*/
                        label:'用户名',/*字段*/
                        props:{
                            placeholder:'请输入用户名',
                        },
                        rules:{
                            //校验规则
                            required:true,
                            type:'string',
                            min:3,
                            max:15,
                        },
                        trigger: 'blur',
                        messages:{
                            required:'用户名不能为空',
                            min:'用户名不能少于3个字符',
                            max:'用户名不能大于15个字符'
                        }
                    },
                    //密码配置
                    {
                        type:'input',
                        modelKey:'password',
                        label:'密码',
                        props:{
                            placeholder:'请输入密码',
                            type:'password',
                            eye:{
                                open:false,
                            }
                        },
                        rules:{
                            required:true,
                        },
                        trigger:'blur',
                    },
                    {
                        type:'submit',
                        label:'登录'
                    },

                ]
            }
        }
    },
    methods:{
       async submitHandler(e){
            e.preventDefault()/*没有这个的话注册之后会刷新界面，会阻止表单提交的时候 重新加载页面。
            不阻击事件冒泡，但阻击默认行为
            */
            try{
                const result=await this.$http.get('/api/login',{params:this.model})
                if(result.code=='0'){
                    this.$store.commit('settoken',result.token)/*把token存进vuex中*/
                    window.localStorage.setItem('token',result.token)
                    /*页面不可以直接登录就带到首页去，带参的路由就去到带参的路由哪里*/

                    //判断路由是否带参，带参就去到重定向参数地址，否则就去首页
                    if(this.$route.query.redirect){
                        this.$router.replace({path:this.$route.query.redirect})
                    }else{
                        this.$router.replace({path:'/botnav/index'})
                    }
                }else{
                     alert(result.message)
                }
            }catch(err){
                console.log(err)
            }
        },
        regist(){
            this.$router.push('/register')
        }
    }
}
</script>

<style lang="stylus" scoped>
    .headerimg
        height  170px
        width  100%
</style>


