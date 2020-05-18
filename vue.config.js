module.exports = {
    configureWebpack:{
        devServer:{
            /*mock数据编写*/
            before(app){/*基于express编写*/
                //注册接口，用户信息
                let userpoor=[
                    {username:'dcj',password:'123456'},
                    {username:'dcp',password:'123456'},
                    {username:'lzb',password:'123456'}
                ]
                app.get('/api/register',(req,res)=>{/*调用 get 方法，传入 seller 接口，发送请求，
                服务端接受请求，返回给客户端一个json类型的数据（包括 errno 及数据）*/
                    /*ES6解构赋值语法*/
                    const {username,password}=req.query /*这是从网页获得的username,获取URL的查询参数串*/
                    /*如果存在就会返回true*/
                    const userlength = userpoor.filter(v=>v.username == username).length/*过滤数组中的username*/
                    if (userlength>0){
                        res.json({/*传送JSON响应，返回给客户端json信息*/
                            success:false,
                            message:'用户名已存在'
                        })
                    }else {
                        res.json({

                            success:true,
                            message:'注册成功'
                        })
                    }

                })
                /*登录接口*/
                let tokenkey = 'kaley'/*先创建一个token*/
                app.get('/api/login',(req,res)=>{
                    const {username,password}=req.query
                    if(username == 'dcj' && password=='123456'||username == 'dcp' && password=='123456'){
                        res.json({
                            code:0,
                            message:'登录成功',
                            token:tokenkey+'-'+username+'-'+(new Date().getTime()+60*60*1000)/*登录成功后返回一个token*/
                        })
                    }else {
                        res.json({
                            code: 1,
                            message:'账号或密码错误'
                        })
                    }

                })

                /*轮播接口*/
                app.get('/api/banner',(req,res)=>{
                    res.json({
                        data:[
                            {
                                url: 'https://www.taobao.com',
                                image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587202472155&di=58596bd8288bf713bd2c7b0e47e7e28d&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201610%2F06%2F20161006183759_2drku.jpeg'
                            },
                            {
                                url: 'https://www.taobao.com',
                                image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587202991600&di=ed6e55b72eb4530321b4f7807feac962&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fdesign%2F00%2F12%2F24%2F27%2F0924d5fa986801a8645b5f072ebc3c8b.jpg'
                            },
                            {
                                url: 'https://www.taobao.com',
                                image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587202889290&di=528cc3f292551c867b7b69cb2af0b4de&imgtype=0&src=http%3A%2F%2Fimg3.imgtn.bdimg.com%2Fit%2Fu%3D913030733%2C2603201403%26fm%3D214%26gp%3D0.jpg'
                            }
                        ]
                    })
                })
                //滚动分类接口
                /* app.get('/api/rollinglist',(req,res)=>{

                 })*/
                app.get('/api/rollinglist',(req,res)=>{
                    res.json({
                        data:[
                            [
                                {
                                    url: 'https://www.taobao.com',
                                    image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587202472155&di=58596bd8288bf713bd2c7b0e47e7e28d&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201610%2F06%2F20161006183759_2drku.jpeg',

                                    label:'分类一'
                                },
                                {
                                    url: 'https://www.taobao.com',
                                    image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587202472155&di=58596bd8288bf713bd2c7b0e47e7e28d&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201610%2F06%2F20161006183759_2drku.jpeg',

                                    label:'分类二'
                                },
                                {
                                    url: 'https://www.taobao.com',
                                    image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587202472155&di=58596bd8288bf713bd2c7b0e47e7e28d&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201610%2F06%2F20161006183759_2drku.jpeg',

                                    label:'分类三'
                                },
                                {
                                    url: 'https://www.taobao.com',
                                    image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587202472155&di=58596bd8288bf713bd2c7b0e47e7e28d&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201610%2F06%2F20161006183759_2drku.jpeg',

                                    label:'分类四'
                                },
                                {
                                    url: 'https://www.taobao.com',
                                    image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587202472155&di=58596bd8288bf713bd2c7b0e47e7e28d&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201610%2F06%2F20161006183759_2drku.jpeg',

                                    label:'分类五'
                                },
                                {
                                    url: 'https://www.taobao.com',
                                    image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587202472155&di=58596bd8288bf713bd2c7b0e47e7e28d&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201610%2F06%2F20161006183759_2drku.jpeg',

                                    label:'分类六'
                                },
                                {
                                    url: 'https://www.taobao.com',
                                    image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587202472155&di=58596bd8288bf713bd2c7b0e47e7e28d&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201610%2F06%2F20161006183759_2drku.jpeg',

                                    label:'分类七'
                                },
                                {
                                    url: 'https://www.taobao.com',
                                    image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587202472155&di=58596bd8288bf713bd2c7b0e47e7e28d&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201610%2F06%2F20161006183759_2drku.jpeg',

                                    label:'分类八'
                                },
                                {
                                    url: 'https://www.taobao.com',
                                    image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587202472155&di=58596bd8288bf713bd2c7b0e47e7e28d&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201610%2F06%2F20161006183759_2drku.jpeg',

                                    label:'分类九'
                                },
                                {
                                    url: 'https://www.taobao.com',
                                    image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587202472155&di=58596bd8288bf713bd2c7b0e47e7e28d&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201610%2F06%2F20161006183759_2drku.jpeg',
                                    label:'分类十'
                                },
                            ],
                            [
                                {
                                    url: 'https://m.xdclass.net',
                                    image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/bat.png',
                                    label:'分类一'
                                },
                                {
                                    url: 'https://m.xdclass.net',
                                    image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/bat.png',
                                    label:'分类一'
                                },
                                {
                                    url: 'https://m.xdclass.net',
                                    image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/bat.png',
                                    label:'分类一'
                                },
                                {
                                    url: 'https://m.xdclass.net',
                                    image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/bat.png',
                                    label:'分类一'
                                },
                                {
                                    url: 'https://m.xdclass.net',
                                    image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/bat.png',
                                    label:'分类一'
                                },
                                {
                                    url: 'https://m.xdclass.net',
                                    image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/bat.png',
                                    label:'分类一'
                                },
                                {
                                    url: 'https://m.xdclass.net',
                                    image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/bat.png',
                                    label:'分类一'
                                },
                                {
                                    url: 'https://m.xdclass.net',
                                    image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/bat.png',
                                    label:'分类一'
                                },
                                {
                                    url: 'https://m.xdclass.net',
                                    image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/bat.png',
                                    label:'分类一'
                                },
                                {
                                    url: 'https://m.xdclass.net',
                                    image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/bat.png',
                                    label:'分类一'
                                },
                            ],
                        ]
                    })
                })
                //获取分类页的分类接口
                app.get('/api/classify',(req,res)=>{
                    switch(req.query.type){
                        case '0':
                            res.json({
                                data:[
                                    {
                                        image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                        label:'小米'
                                    },
                                    {
                                        image:'//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                                        label:'华为'
                                    },
                                    {
                                        image:'//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                                        label:'荣耀'
                                    },
                                    {
                                        image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                                        label:'雪梨手机'
                                    },
                                    {
                                        image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                        label:'小米'
                                    },
                                    {
                                        image:'//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                                        label:'华为'
                                    },
                                    {
                                        image:'//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                                        label:'荣耀'
                                    },
                                    {
                                        image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                                        label:'雪梨手机'
                                    },
                                    {
                                        image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                        label:'小米'
                                    },
                                    {
                                        image:'//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                                        label:'华为'
                                    },
                                    {
                                        image:'//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                                        label:'荣耀'
                                    },
                                    {
                                        image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                                        label:'雪梨手机'
                                    },
                                    {
                                        image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                        label:'小米'
                                    },
                                    {
                                        image:'//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                                        label:'华为'
                                    },
                                    {
                                        image:'//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                                        label:'荣耀'
                                    },
                                    {
                                        image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                                        label:'雪梨手机'
                                    },
                                    {
                                        image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                        label:'小米'
                                    },
                                    {
                                        image:'//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                                        label:'华为'
                                    },
                                    {
                                        image:'//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                                        label:'荣耀'
                                    },
                                    {
                                        image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                                        label:'雪梨手机'
                                    },

                                ]
                            });
                            break;
                        case '1':
                            res.json({
                                data: [
                                    {
                                        image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                        label:'小米'
                                    },
                                    {
                                        image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                        label:'小米'
                                    },
                                    {
                                        image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                        label:'小米'
                                    },
                                    {
                                        image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                        label:'小米'
                                    },
                                ]
                            });
                            break;
                        case '2':
                            res.json({
                                data: [
                                    {
                                        image:'//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                                        label:'华为'
                                    },
                                    {
                                        image:'//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                                        label:'华为'
                                    },
                                    {
                                        image:'//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                                        label:'华为'
                                    },
                                    {
                                        image:'//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                                        label:'华为'
                                    }
                                ]
                            });
                            break;
                        case '3':
                            res.json({
                                data: [
                                    {
                                        image:'//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                                        label:'荣耀'
                                    },
                                    {
                                        image:'//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                                        label:'荣耀'
                                    },
                                    {
                                        image:'//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                                        label:'荣耀'
                                    },
                                    {
                                        image:'//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                                        label:'荣耀'
                                    },
                                ]
                            });
                            break;
                        case '4':
                            res.json({
                                data: [
                                    {
                                        image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                        label:'小米'
                                    },
                                    {
                                        image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                        label:'小米'
                                    },
                                    {
                                        image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                        label:'小米'
                                    },
                                    {
                                        image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                        label:'小米'
                                    },
                                ]
                            });
                            break;
                        case '5':
                            res.json({
                                data: [
                                    {
                                        image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                                        label:'雪梨手机'
                                    },
                                    {
                                        image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                                        label:'雪梨手机'
                                    },
                                    {
                                        image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                                        label:'雪梨手机'
                                    },
                                    {
                                        image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                                        label:'雪梨手机'
                                    },
                                ]
                            });
                            break;
                        case '6':
                            res.json({
                                data: [
                                    {
                                        image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                        label:'小米'
                                    },
                                    {
                                        image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                        label:'小米'
                                    },
                                    {
                                        image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                        label:'小米'
                                    },
                                    {
                                        image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                        label:'小米'
                                    },
                                ]
                            });
                            break;
                    }
                })
            }



        }
    },
    css: {
        loaderOptions: {
            stylus: {
                'resolve url': true,
                'import': [
                    './src/theme'
                ]
            }
        }
    },

    pluginOptions: {
        'cube-ui': {
            postCompile: true,
            theme: true
        }
    }
}
