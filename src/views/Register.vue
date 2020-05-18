<template>
    <div>
        <img class="headerimg" src="https://timgsa.baidu.com/timg?image&amp;quality=80&amp;size=b9999_10000&amp;sec=1587200907273&amp;di=281ba95c6f0ebca3e4a7f157a64beb9e&amp;imgtype=0&amp;src=http%3A%2F%2Fku.90sjimg.com%2Felement_origin_min_pic%2F17%2F08%2F11%2F4563e2d916083363316c10747465fe8b.jpg%2521%2Ffwfh%2F804x785%2Fquality%2F90%2Funsharp%2Ftrue%2Fcompress%2Ftrue" alt="">

        <cube-form
            :model="model"
            :schema="schema"
            @submit="submitHandler">
       </cube-form>
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
                        modelKey:'username',
                        label:'用户名',
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
                        label:'注册'
                    }
                ]
            }
        }
    },
    methods:{
        submitHandler(e){
            e.preventDefault()
            this.$http.get('/api/register',{params:this.model}).then(res=>{
                if(window.confirm('注册成功！')){
                    this.$router.replace('/login')
                    window.localStorage.setItem(params.username,params.password)

                }
            }).catch(err=>{
                console.log(err)
            })
        }
    }
}
</script>

<style lang="stylus" scoped>
    .headerimg
        height  170px
        width  100%
</style>


