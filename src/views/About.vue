<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Counter v-model="count" />
  </div>
</template>
<script>
import Counter from '@/components/Counter';

export default {
    name: "About",
    components: {
        Counter
    },
    data() {
        return {
            count: 1
        }
    }
}
</script>
