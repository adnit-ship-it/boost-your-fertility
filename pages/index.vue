<template>
  <div class="pt-[83px] lg:pt-[68px] bg-backgroundColor">
    <SectionsHero />
    <SectionsDiscover />
    <SectionsTrustedBy center />
    <SectionsJourney />
    <SectionsCTA />
    <SectionsBeforeAfter />
    <SectionsProducts />
    <SectionsFAQ />
    <SectionsIntakeForm />
  </div>
</template>

<script setup lang="ts">
// CRM data is already loaded in app.vue during SSR
// No need to fetch it again here
</script>

<style scoped>
/* Custom styles if needed */
</style>
