<template>
  <header>
    <img  src="../assets/logo.png" width="40" height="40"/>
    <p>
      HTML - кастомизатор
    </p>
    <div class="links">
    <router-link to="/"
    >Главная страница
    </router-link>
    <router-link to="/button"
    >Кнопка
    </router-link>
      <router-link to="/input"
      >Поле ввода
      </router-link>
      <router-link to="/text"
      >Текст
      </router-link>
      <router-link to="/zagolovok"
      >Заголовок
      </router-link>
      <router-link to="/ssilki"
      >Ссылки
      </router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header-menu"
}
</script>

<style scoped>
header {
  width: 100vw;
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  gap: 20px;
  border: solid 2px green;
  border-radius: 4%;
  background: green;
}
img {
  padding: 6px;
}
.links a {
  text-decoration: none;
  color: blue;
  padding-right: 1em;
}
.links {
  padding-top: 1em;
}


</style>