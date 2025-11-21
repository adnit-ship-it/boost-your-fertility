<template>
  <div :class="[
    'h-[88px] relative md:h-[128px] w-[276px] md:w-[500px] transition-all duration-300 lg:h-[176px] lg:w-[352px] flex flex-row lg:flex-col items-start lg:items-center justify-start lg:justify-center gap-5 px-5 py-2 md:py-4 lg:px-0 lg:py-0',
    isActive ? 'bg-[#E7DFDD]' : 'bg-accentColor2/20 lg:bg-[#E7DFDD]'
  ]">
    <img :src="img" :alt="title"
      class="h-7 w-7 md:w-[44px] md:h-[44px] lg:mt-0 absolute top-2 left-2 md:left-4 journey-icon" />
    <div class="flex justify-center flex-col gap-0.5 lg:gap-2 pl-8 md:pl-16 lg:pl-2 leading-tight ">
      <p class="text-[16px] md:text-[20px] font-semibold text-left lg:text-center">
        {{ title }}
      </p>
      <p class="text-black text-[14px] md:text-[20px] font-normal text-left lg:text-center">
        <span v-html="subtext"></span>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  img: string
  title: string
  subtext: string
  isActive?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  isActive: false
})
</script>

<style scoped>
/* Apply color filter to journey icons */
.journey-icon {
  /* Changes icon color to blue (#0471F6) */
  filter: brightness(0) saturate(100%) invert(27%) sepia(99%) saturate(2275%) hue-rotate(203deg) brightness(96%) contrast(96%);
}
</style>