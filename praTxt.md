2.3api接口
data.json
webpack中的devserver的字段
webpack本身就是基于express写的

3.1
v-header
注意props要有返回值否则会在引用的时候报错
深度的比如数组这些也要注意用v-if判断一下使用


3.2数据获取
const ERR_OK=0;
柯理化的封装api请求接口,将url放到函数的内层
promise的书写

3.3用户蒙层
star模块的制作，数组的思想

3.4header-detail的交互
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




