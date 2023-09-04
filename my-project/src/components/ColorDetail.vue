<template>

  <details  >
    <summary>Настройки цвета</summary>
    <p> Выберите цвет</p>
    <input v-model="color"  type="color" @change="setColor" />
    <p> Выберите цвет текста </p>
    <input v-model="textColor"  type="color"  @change="setColor"/>
  </details>

</template>

<script>
export default {
  name: "ColorDetail",
  props: ["ColorChange"],
  data() {
    return {
      color: '#ffffff',
      textColor: '#000000',
    }
  },
  methods: {
    setColor() {
      this.ColorChange({
        color: this.color,
        textColor: this.textColor
      })
    }
  }
}
</script>

<style scoped >
details {
  margin-top: 1em;
}


</style>