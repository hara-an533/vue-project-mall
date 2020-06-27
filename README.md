# vue-project-mall

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

添加vue.config.js进行配置的修改
    .editconfig文件保留
    base.css
    normalize.css
滚动插件  better-scoll
    const scroll=new BScroll(el,{})
    监听滚动：
    probeType:0/1(不监听滚动)，2，3
    this.scroll.on('scroll',(position)=>{console.log(position)})
    上拉加载：
    pullUpLoad:true;
    this.scroll.on('pullingUp',()=>{})

要监听一个组件的原生事件时  必须要加上.native事件修饰符
如果在组件中使用ref属性 则获取到的是一个组件对象  如果ref在元素上使用，则获取到的是元素
回到顶部：
    scroll对象.scroll.scrollTo(x,y,time);
    this.$refs.scroll.scrollTo(0,0,500)

如何监听图片加载完成
原生js监听图片加载：img.onload=function(){}
vue中监听:@load='func'

解决无关系组件间的交互问题--$bus
在mian.js中：
Vue.prototype.$bus = new Vue()
在vue的原型对象身上注册一个$bus的属性，并且指向一个vue实例，所有的vue实例就都可以使用这个$bus了

