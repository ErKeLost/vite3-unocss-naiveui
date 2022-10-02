<script setup lang="ts"></script>

<template>
  <div class="h-screen flex flex-col">
    <div p-2 my-2 rounded-full hover:bg-blue-50 w-min tran>
      <!-- <RouterLink> -->
      <Twitter w-8 h-8 />
      <!-- </RouterLink> -->
    </div>
    <div mt-2 space-y-3>
      <SideBarLeftTab active>
        <template #icon>
          <IconMdiHome dark:color-white />
        </template>
        <template #name> Home </template>
      </SideBarLeftTab>
      <SideBarLeftTab>
        <template #icon>
          <IconPhHashBold dark:color-white />
        </template>
        <template #name> Explore </template>
      </SideBarLeftTab>
      <SideBarLeftTab>
        <template #icon>
          <IconIcOutlineNotificationsNone dark:color-white />
        </template>
        <template #name> Notifications </template>
      </SideBarLeftTab>
      <SideBarLeftTab>
        <template #icon>
          <IconTablerMessageCircle2 dark:color-white />
        </template>
        <template #name> Messages </template>
      </SideBarLeftTab>
      <SideBarLeftTab>
        <template #icon>
          <IconMaterialSymbolsBookmarkOutline dark:color-white />
        </template>
        <template #name> Bookmarks </template>
      </SideBarLeftTab>
      <SideBarLeftTab>
        <template #icon>
          <IconMdiListBoxOutline dark:color-white />
        </template>
        <template #name> Lists </template>
      </SideBarLeftTab>
      <SideBarLeftTab>
        <template #icon>
          <IconIonPersonOutline dark:color-white />
        </template>
        <template #name> Profile </template>
      </SideBarLeftTab>
      <SideBarLeftTab>
        <template #icon>
          <IconIconoirMoreHorizCircledOutline dark:color-white />
        </template>
        <template #name> More </template>
      </SideBarLeftTab>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
