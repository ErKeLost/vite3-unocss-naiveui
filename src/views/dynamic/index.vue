<template>
  <div>
    <MainSection title="Home" :loading="loading">
      <!-- <Head>
        <Title>Home / Twitter</Title>
      </Head> -->

      <div class="border-b">
        <ChatForm :user="user" @on-success="handleFormSuccess" />
      </div>

      <ListFeed :tweets="homeTweets" />
    </MainSection>
  </div>
</template>
<script setup>
import { useDynamicStore } from '@/store'
const { releaseDynamic } = useDynamicStore()
async function handleFormSuccess(data) {
  const form = new FormData()

  form.append('text', data.text)
  form.append('replyTo', data.replyTo)

  data.mediaFiles.forEach((mediaFile, index) => {
    form.append('file', mediaFile)
  })
  await releaseDynamic(form)
}
</script>
