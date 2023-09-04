<template>
  <details>
    <summary> Настройки рамки</summary>
    <p class="inputText"> Цвет рамки </p>
    <input v-model="borderColor"  type="color" @change="setBorder" />
    <p class="inputText"> Размер рамки </p>
    <input v-model="borderSize"  type="text" class="input" @change="setBorder"/>
    <select v-model="border" class="select" @change="setBorder">
      <option>
        none
      </option>
      <option>
        solid
      </option>
      <option>
        dashed
      </option>
      <option>
        dotted
      </option>
      <option>
        double
      </option>
      <option>
        groove
      </option>
      <option>
        ridge
      </option>
      <option>
        inset
      </option>
      <option>
        outset
      </option>
    </select>
  </details>

</template>

<script>
export default {
  name: "BorderDetail",
  props: ['BorderChange'],
  data() {
    return {
      border: 'solid',
      borderColor: '#000000',
      borderSize: '1'
    }
  },
  methods: {
    setBorder() {
      this.BorderChange({
        border: this.border,
        borderSize: this.borderSize,
        borderColor: this.borderColor
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