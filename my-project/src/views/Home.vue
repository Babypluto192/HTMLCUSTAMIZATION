<template>
  <HeaderMenu>

  </HeaderMenu>
  <h2>
    ПРИМЕЧАНИЕ ПЕРЕД ИСПОЛЬЗОВАНИЕМ!
  </h2>
  <p>HTML-костамизатор - это не конструктор сайта или справочник по HTML CSS. Этот сайт создан для кастомизации простых Html элементов и быстрой их настройки без использования староних библеотек</p>
</template>

<script>
import HeaderMenu from "@/components/Header-menu";
export default {
  name: "HomePage",
  components: {
    HeaderMenu
  }
}
</script>

<style scoped>
*{
  padding-left: 1rem;
}
p{
  font-size: 1.5em;
}
</style>