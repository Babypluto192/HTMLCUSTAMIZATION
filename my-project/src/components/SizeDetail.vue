<template>
  <details>

    <summary> Настройки размера</summary>
    <p class="inputText">Ширина </p>
    <input v-model="width"  type="text" class="input"  @change="setSize"/>

    <p class="inputText"> Длина</p>
    <input v-model="height"  type="text"  class="input" @change="setSize"/>
  </details>
</template>

<script>
export default {
  name: "SizeDetail",
  props: ['SizeChange'],
  data() {
    return{
      width: '80',
      height: '40'
    }
  },
  methods: {
    setSize() {
      this.SizeChange({
        width: this.width,
        height: this.height
      })
    }
  }
}
</script>

<style scoped>
.input {
  width: 7vw;
}
</style>