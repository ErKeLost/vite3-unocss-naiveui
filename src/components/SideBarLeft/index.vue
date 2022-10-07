<script setup lang="ts">
const emits = defineEmits(['onTweet', 'onLogout'])

const props = defineProps({
  user: {
    type: Object,
    required: true
  }
})
</script>

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

      <div class="hidden xl:block">
        <UIButton liquid size="lg" @on-click="emits('onTweet')">
          <span class="font-bold"> Tweet </span>
        </UIButton>
      </div>

      <div class="block xl:hidden">
        <UIButton @on-click="emits('onTweet')">
          <div class="w-6 h-6 font-bold">
            <PencilIcon />
          </div>
        </UIButton>
      </div>
    </div>
    <div
      class="flex tran flex-row items-center justify-center px-2 py-2 mx-auto mt-auto mb-5 rounded-full cursor-pointer w-14 xl:w-full hover:bg-gray-100 dark:hover:bg-dim-800"
      @click="emits('onLogout')"
    >
      <div class="flex flex-row">
        <img
          :src="props.user?.profileImage"
          class="w-10 h-10 rounded-full object-cover"
        />
        <div class="flex-col hidden ml-2 xl:block">
          <h1 class="text-sm font-bold text-gray-800 dark:text-white">
            {{ user?.name }}
          </h1>
          <p class="text-sm text-gray-400">
            {{ user?.email }}
          </p>
        </div>
      </div>

      <!-- ICON -->
      <div class="hidden ml-auto xl:block">
        <div class="w-6 h-6">
          <ChevronDownIcon />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
