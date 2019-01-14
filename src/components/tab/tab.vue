<template>
  <div class="tab">
    <cube-tab-bar
      :useTransition="false"
      :showSlider="true"
      v-model="selectedLabel"
      :data="tabs"
      ref="tabBar"
      class="border-bottom-1px"
    ></cube-tab-bar>
    <div class="slide-wrapper">
      <cube-slide
        :loop="false"
        :auto-play="false"
        :show-dots="false"
        :initial-index="index"
        ref="slide"
        :options="slideOptions"
        @scroll="onScroll"
        @change="onChange"
      >
        <cube-slide-item v-for="(tab,index) in tabs" :key="index">
          <!-- 通过动态组件 -->
          <component ref="component" :is="tab.component" :data="tab.data"></component>
        </cube-slide-item>
      </cube-slide>
    </div>
  </div>
</template>

<script>
export default {
  name: "tab",
  props: {
    tabs: {
      type: Array,
      default() {
        return [];
      }
    },
    initialIndex: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      index: this.initialIndex,
      slideOptions: {
        listenScroll: true,
        probeType: 3,
        // 防止斜着滚动
        directionLockThreshold: 0
      }
    };
  },
  computed: {
    selectedLabel: {
      get() {
        return this.tabs[this.index].label;
      },
      // 点击之后可以切换
      set(newVal) {
        this.index = this.tabs.findIndex(value => {
          return value.label === newVal;
        });
      }
    }
  },
  mounted() {
    // 第一次父组件渲染子组件的时候，先渲染一次
    this.onChange(this.index);
  },
  methods: {
    onScroll(pos) {
      const tabBarWidth = this.$refs.tabBar.$el.clientWidth;
      const slideWidth = this.$refs.slide.slide.scrollerWidth;
      // 下划线滚动的位置
      const transform = (-pos.x / slideWidth) * tabBarWidth;
      this.$refs.tabBar.setSliderTransform(transform);
    },
    // 点击切换
    onChange(current) {
      this.index = current;
      // 获取到组件的实例，看书否调用组件的fetch方法
      const instance = this.$refs.component[current];
      if (instance && instance.fetch) {
        instance.fetch();
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~common/stylus/variable';

.tab {
  // 上面是固定高度的布局，下面是flex=1,从而将其他的内容都分配到
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
</style>
