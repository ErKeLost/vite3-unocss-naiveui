<script setup lang="ts"></script>

<template>
  <div flex h-screen>
    <div relative flex-1 hidden w-0 lg:block>
      <img
        absolute
        inset-0
        object-cover
        w-full
        h-full
        src="https://w.wallhaven.cc/full/d6/wallhaven-d6xwqj.jpg"
        alt=""
      />
    </div>
    <div
      flex
      flex-col
      justify-center
      flex-1
      px-4
      py-12
      sm:px-6
      lg:flex-none
      lg:px-20
      xl:px-24
    >
      <div flex items-center w-full h-full max-w-sm mx-auto lg:w-96>
        <LoginForm></LoginForm>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
