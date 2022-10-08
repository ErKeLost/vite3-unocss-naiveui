<template>
  <div>
    <MainSection title="Home" :loading="loading">
      <!-- <Head>
        <Title>Home / Twitter</Title>
      </Head> -->

      <div class="border-b dark:border-gray-600">
        <ChatForm :user="user" @on-success="handleFormSuccess" />
      </div>
      <ListFeed :tweets="dynamicList" />
    </MainSection>
  </div>
</template>
<script setup>
import { useDynamicStore } from '@/store'
const loading = ref(false)
const { getAllDynamicList, releaseDynamic } = useDynamicStore()
const { dynamicList } = storeToRefs(useDynamicStore())
async function handleFormSuccess(data) {
  const form = new FormData()

  form.append('text', data.text)
  form.append('replyTo', data.replyTo)

  data.mediaFiles.forEach((mediaFile, index) => {
    form.append('file', mediaFile)
  })
  await releaseDynamic(form)
  await getAllDynamicListFn()
}
async function getAllDynamicListFn() {
  loading.value = true
  await getAllDynamicList()
  loading.value = false
  console.log(dynamicList)
}
getAllDynamicListFn()
</script>
