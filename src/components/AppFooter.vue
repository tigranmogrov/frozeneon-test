<script setup lang="ts"></script>

<template>
  <footer :class="$style['footer']">
    <div class="container">
      <div :class="$style['footer-content']">
        <h3>Tihran Mohrovian</h3>
        <a target="_blank" href="https://github.com/tigranmogrov/frozeneon-test"> GitHub</a>
      </div>
    </div>
  </footer>
</template>

<style module lang="scss">
.footer {
  margin-top: auto;
  padding-top: 30px;
  padding-bottom: 30px;
  background-color: #bbb4b4;
}

.footer-content {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  a {
    border: 1px solid #e4e4e4;
    border-radius: 4px;
    padding: 6px 18px;
    color: #10213f;
    @media (hover: hover) {
      transition: 0.4s;
      &:hover {
        opacity: 0.7;
      }
    }
  }
}
</style>
