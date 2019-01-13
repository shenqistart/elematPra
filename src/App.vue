<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <header-detail></header-detail>
  </div>
</template>

<script>
import VHeader from "components/v-header/v-header";
import HeaderDetail from "components/header-detail/header-detail";
import { getSeller } from "api";

export default {
  name: "app",
  data() {
    return {
      seller: {}
    };
  },
  methods: {
    _getSeller() {
      getSeller().then(res => {
        this.seller = res;
      });
    }
  },
  created() {
    this._getSeller();
  },
  components: {
    VHeader,
    HeaderDetail
  }
};
</script>
<style lang="stylus">
</style>
