2.2 support-ico组件
入参：size，type
返回一个span
整个的icon是span的背景图

2.3api接口
data.json（这里面是返回的值）
vue.config.js(这里面简化的别名，可以直接走'components/support-ico/support-ico')
webpack中的devserver的字段
webpack本身就是基于express写的(进入路由之后是返回值)


resolve()这个函数就是找到根目录（绝对路径）下的路径

3.1 v-header
可以将App.vue看为一个根组件，只要注册到这个div中的内容都可以渲染出来看到
注意props要有返回值否则会在引用的时候报错，是一个对象
他所有的数据就是seller。根据售卖商家的不同展示不同
深度的比如数组这些也要注意用v-if判断一下使用
<div v-if="seller.supports" class="support">
  <support-ico :size="1" :type="seller.supports[0].type"></support-ico>
  <span class="text">{{seller.supports[0].description}}</span>
</div>
单独的div做背景使用下方的css:
position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  filter: blur(10px);//滤镜https://developer.mozilla.org/zh-CN/docs/Web/CSS/filter
  https://www.w3cplus.com/css3/ten-effects-with-css3-filter

3.2数据获取
helper.js
const ERR_OK=0;
柯理化的封装api请求接口,将url放到函数的内层
这个axios执行返回一个promise的实例（promise在创建的时候是同步的，回调是异步的（todo运行机制））
promise的书写:practice文件夹中的内容

3.3用户蒙层
star模块的制作，数组的思想
入参：size，score
div的大小，每个span作为变化的一个点，匹配星的大小为图片
怎么来展示评分组件

3.4header-detail的交互
蒙层类的组件，
入参：seller对象
难点：
1.展示时候的动画，
2.动态的插入的body下 
vue-create-api，挂载到body的下面
npm的一个包里的内容register.js
全局的fix最好在body下创建
这种类似插件的使用的组件功能

4.1tab
.tab {
  display: flex;
  flex-direction: column;
  height: 100%;

  >>>.cube-tab {
    padding: 10px 0;
  }

  .slide-wrapper {
    flex: 1;
    overflow: hidden;
  }
}
https://vue-loader.vuejs.org/zh/guide/scoped-css.html#%E5%AD%90%E7%BB%84%E4%BB%B6%E7%9A%84%E6%A0%B9%E5%85%83%E7%B4%A0
在scoped中修改引入组件的样式

4.2
tab的滑动和缓动效果

4.3就是将tab放在了外边app.vue下面

5.1scrollNav组件
scrollNav:数据边界的问题
      <cube-scroll-nav
        :side=true
        :data="goods"
        :options="scrollOptions"
        v-if="goods.length"
      >
scrollOptions中的click为false
goods的数据什么时候渲染？
在tab组件onChange的时候再去获取数据
tabonChange方法中获取组件的数据和实例
5.2shopCart组件
就是下边的一个结算的购物车组件
注意stylus一定要空格，尤其在import的时候


5.3 cartControl




