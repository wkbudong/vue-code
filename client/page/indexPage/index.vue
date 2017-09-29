<template>
  <div class="message">
    <span> {{banner}}</span>
    {{rank}}
    {{other}}
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations, mapGetters} from 'vuex';
import _isEmpty from 'lodash/isEmpty'
import axios from 'axios'
export default {
  data() {
    return {
      
    }
  },
  computed: {
    ...mapState({
      banner: state => state.indexPage.banner,
      rank: state => state.indexPage.rank,
      other: state => state.indexPage.other
    })
  },
  methods: {
    getStore(){
      console.log(this.$store)
    }
  },
  async beforeMount() {
    let Actions = [this.$store._actions.getIndexBanner[0](),
                    this.$store._actions.getIndexRank[0](),
                    this.$store._actions.getIndexOther[0]()]
    await Promise.all(Actions);
  }
}
</script>

<style lang="scss">
  
  .message {
    color:red;
  }
</style>