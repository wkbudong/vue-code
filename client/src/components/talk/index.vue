<template>
  <div class="message" >
    {{message}}
    <button @click="add(1)">点我</button>
    {{addcomputed}}
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations, mapGetters} from 'vuex';
export default {
  data() {
    return {
      
    }
  },
  computed: Object.assign({} ,mapState({
    message : state => state.add.added
  }), mapGetters({
    addcomputed : "getComputed"
  })),
  
  methods: Object.assign({}, mapActions([
    "add"
  ]))
}
</script>

<style lang="scss">
  .message {
    color:red;
  }
</style>