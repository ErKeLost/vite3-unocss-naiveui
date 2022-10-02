<template>
  <div class="flex items-center justify-around w-full">
    <ActionsIcon color="blue" @on-click="emits('onCommentClick')" :size="size">
      <template v-slot:icon="{ classes }">
        <ChatIcon :class="classes" />
      </template>

      <template v-if="showStats" v-slot:default>
        {{ props.tweet.repliesCount }}
      </template>
    </ActionsIcon>

    <ActionsIcon color="green" :size="size">
      <template v-slot:icon="{ classes }">
        <RefreshIcon :class="classes" />
      </template>

      <template v-if="showStats" v-slot:default>
        {{ generateRandomNumber() }}
      </template>
    </ActionsIcon>

    <ActionsIcon color="red" :size="size">
      <template v-slot:icon="{ classes }">
        <HeartIcon :class="classes" />
      </template>

      <template v-if="showStats" v-slot:default>
        {{ generateRandomNumber() }}
      </template>
    </ActionsIcon>

    <ActionsIcon color="blue" :size="size">
      <template v-slot:icon="{ classes }">
        <UploadIcon :class="classes" />
      </template>

      <template v-if="showStats" v-slot:default>
        {{ generateRandomNumber() }}
      </template>
    </ActionsIcon>
  </div>
</template>
<script setup>
const emits = defineEmits(['onCommentClick'])

const props = defineProps({
  tweet: {
    type: Object,
    required: true
  },
  compact: {
    type: Boolean,
    default: false
  }
})

const showStats = computed(() => props.compact)
const size = computed(() => (props.compact ? 5 : 8))

function generateRandomNumber() {
  return Math.floor(Math.random() * 100)
}
</script>
