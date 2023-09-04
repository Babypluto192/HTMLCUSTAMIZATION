<template>
  <details>
    <summary> Настройки текста</summary>
    <p class="inputText"> Напишите текст </p>
    <input v-model="text"  type="text" class="input" @change="setText" />
    <p class="inputText"> Размер шрифта </p>
    <p>
      примечание: шрифт указывается в em
    </p>
    <input v-model="font"  type="text" class="input" @change="setText"/>
  </details>
</template>

<script>
export default {
  name: "TextDetail",
  props: ['TextChange'],
  data() {
    return{
      text: '',
      font: '1'
    }
  },
  methods: {
    setText() {
      this.TextChange({
        text: this.text,
        font: this.font
      })
    }
  }
}
</script>

<style scoped lang="scss">
.input {
  width: 7vw;
}
</style>