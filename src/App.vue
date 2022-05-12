<script setup>
import Header from "./components/Header.vue";
import Staking from "./components/Staking.vue";
import Bridge from "./components/Bridge.vue";
import MainContent from "./components/MainContent.vue";
import ModalContainer from "./components/ModalContainer.vue";
</script>

<template>
  <div class="App">
    <Header />
    <MainContent />
    <ModalContainer />
  </div>
</template>

<style>
@import "./assets/base.css";

.App {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: rgba(243, 186, 47, 0.15);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: "Noto-Sans" sans-serif;
  color: #343840;
  overflow-x: hidden;
}

.loader {
  width: 25px;
  height: 25px;
  border: 5px solid #fff;
  margin-top: auto;
  margin-bottom: auto;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
