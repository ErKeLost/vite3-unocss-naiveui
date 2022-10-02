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
function handleFormSuccess() {}
</script>
