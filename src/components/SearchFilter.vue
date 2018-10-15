<template>
    <div id="app">
        <div class="max-w-sm w-full mx-auto">
            <tags-input v-model="tags"></tags-input>
        </div>
    </div>
</template>

<script>
import tagsInput from './SearchInput'
export default {
  components: {
    tagsInput
  },
  data () {
    return {
      tags: [
        'Design',
        'Testing'
      ]
    }
  }
}
</script>

<style>

</style>
