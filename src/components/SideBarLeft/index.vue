<script setup lang="ts">
import { NAvatar, NText } from 'naive-ui'
import Edit from '@/components/logo/Edit.vue'
import Logout from '@/components/logo/Logout.vue'
const emits = defineEmits(['onTweet', 'onLogout'])

const props = defineProps({
  user: {
    type: Object,
    required: true
  }
})
function renderCustomHeader() {
  return h(
    'div',
    {
      style:
        'display: flex; align-items: center; padding: 12px 20px; text-align: left'
    },
    [
      h(NAvatar, {
        size: 100,
        round: true,
        style: 'margin-right: 12px;',
        src: props.user?.profileImage
      }),
      h('div', null, [
        h('div', { style: 'text-align: left; ' }, [
          h(
            'div',
            { style: 'font-size: 20px; padding-bottom: 10px' },
            { default: () => props.user?.username }
          )
        ]),
        h('div', { style: 'display: flex; font-size: 25px' }, [
          h(Edit, { style: 'margin-right: 12px' }),
          h(Logout)
        ])
      ])
    ]
  )
}
function renderCustomText() {
  return h(
    'div',
    {
      style: 'display: flex; align-items: center; padding: 12px 20px;'
    },
    [
      h('div', null, [
        h('div', { style: 'font-size: 12px;' }, [
          h(
            NText,
            { depth: 3 },
            { default: () => '毫无疑问，你是办公室里最亮的星' }
          )
        ])
      ])
    ]
  )
}
const options = [
  {
    key: 'header',
    type: 'render',
    render: renderCustomHeader
  },
  {
    key: 'header',
    type: 'render',
    render: renderCustomText,
    props: {
      onClick: () => {
        message.success('Good!')
      }
    }
  }
  // {
  //   label: '退出登录',
  //   key: 'logout',
  //   props: {
  //     onClick: () => {
  //       message.success('Good!')
  //     }
  //   }
  // }
]
</script>

<template>
  <div class="h-screen flex flex-col mr-5 md:items-center xl:items-start">
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
          <div class="font-bold">
            <IconPhChatTeardropTextFill w-6 h-6 />
          </div>
        </UIButton>
      </div>
    </div>

    <n-dropdown
      border-rounded
      rounded-5
      w-80
      p-5
      h-50
      dark:bg-black
      text-center
      dark:color-white
      trigger="click"
      :options="options"
    >
      <div
        class="flex tran flex-row items-center justify-center px-2 py-2 mx-auto mt-auto mb-5 rounded-full cursor-pointer w-14 xl:w-full hover:bg-gray-100 dark:hover:bg-dim-800"
        @click="emits('onLogout')"
      >
        <div class="flex flex-row">
          <img
            :src="user?.profileImage"
            class="w-10 h-10 rounded-full object-cover"
          />
          <div class="flex-col hidden ml-2 xl:block">
            <h1 class="text-sm font-bold text-gray-800 dark:text-white">
              {{ user?.name }}
            </h1>
            <p class="text-sm text-gray-400">
              <n-ellipsis style="max-width: 100px">
                {{ user?.email }}
              </n-ellipsis>
            </p>
          </div>
        </div>

        <!-- ICON -->
        <div class="hidden ml-auto xl:block">
          <IconIcBaselineKeyboardArrowDown w-8 h-8 text-gray />
        </div>
      </div>
    </n-dropdown>
  </div>
</template>

<style lang="scss" scoped>
.setting {
  display: flex;
}
</style>
