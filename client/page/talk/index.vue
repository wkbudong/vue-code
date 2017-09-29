<template>
  <div class="message" >
    {{message}}
    <button @click="add(1)">点我</button>
    {{addcomputed}}
    <button @click="getData()">点我</button>
    {{data}}
    <button @click="getMusic()">点我</button>
    </div>
</template>

<script>
import { mapState, mapActions, mapMutations, mapGetters} from 'vuex';

export default {
  data() {
    return {
      
    }
  },
  computed: {
    ...mapState({
      message: state => state.add.added,
      data: state => state.add.data
    }), 
    ...mapGetters({
      addcomputed : "getComputed"
    })
  },
  methods: {...mapActions(['add', 'getData', 'getMusic'])}
}
</script>

<style lang="scss">
  .message {
    color:red;
  }
</style>