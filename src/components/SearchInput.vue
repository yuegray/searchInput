<template>
    <div class="input-box">
        <div class="tags-input">
            <span v-for="tag in value" :key="tag" class="tags-input-tag">
                <span>{{ tag }}</span>
                <button type="button" class="tags-input-remove" @click="removeTag(tag)">&times;</button>
            </span>
            <input class="tags-input-text" placeholder="Add tag..."
                @keydown.enter.prevent="addTag"
                v-model="newTag"
                maxlength="20"
            >
        </div>
    </div>
</template>

<script>
export default {
  props: ['value'],
  data () {
    return {
      newTag: ''
    }
  },
  methods: {
    addTag () {
      if (this.newTag.trim().length === 0 || this.value.includes(this.newTag.trim())) {
        return
      }
      this.$emit('input', [...this.value, this.newTag.trim()])
      this.newTag = ''
    },
    removeTag (tag) {
      this.$emit('input', this.value.filter(t => t !== tag))
    }
  }
}
</script>
<style>
.input-box {
    width: 100%;
    height: 200px;
    background: rgb(255, 255, 255);
    /* padding: 10px 10px; */
    padding-top: 10px;

}
.tags-input {
  display: flex;
  flex-wrap: wrap;
  background-color: rgb(255, 255, 255);
  border-width: 1px;
  padding-left: .5rem;
  padding-right: 1rem;
  padding-top: .25rem;
  border: 1px solid grey;
}

.tags-input-tag {
  display: inline-flex;
  line-height: 1;
  align-items: center;
  font-size: .875rem;
  background-color: #dbdef8;
  color: #7d8f74;
  border-radius: .25rem;
  user-select: none;
  padding: .25rem;
  margin-right: .5rem;
  margin-bottom: .25rem;
  height: 20px;
}

.tags-input-tag:last-of-type {
  margin-right: 0;
}

.tags-input-remove {
  color: #6bd408;
  font-size: 1rem;
  line-height: 1;
  border: 0;
  background: transparent
}

.tags-input-remove:first-child {
  margin-right: .25rem;
}

.tags-input-remove:last-child {
  margin-left: .25rem;
}

.tags-input-remove:focus {
  outline: 0;
}

.tags-input-text {
  flex: 1;
  outline: 0;
  padding-top: .25rem;
  padding-bottom: .25rem;
  margin-left: .5rem;
  margin-bottom: .25rem;
  min-width: 3rem;
  border: 0;
}

.text-input {
  background-color: #fff;
  border-width: 1px;
  border-radius: .25rem;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: .5rem;
  padding-bottom: .5rem;
  width: 100%;
}

.text-input:focus {
  outline: 0;
}

.btn {
  font-weight: 600;
  border-radius: .25rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: .5rem;
  padding-bottom: .5rem;
}

.btn-primary {
  color: #fff;
  background-color: #6574cd;
}

.btn-primary:hover {
  background-color: #7886d7;
}

.py-16 {
  padding-top: 4rem;
  padding-bottom: 4rem;
}
</style>
