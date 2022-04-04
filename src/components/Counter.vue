<template>
    <div class="counter">
        <p>Count is: {{ count }}</p>
        <button class="btn btn-success" @click="$emit('input', count++)">+</button>
        <button class="btn btn-danger" @click="$emit('input', count--)">-</button>
    </div>
</template>
<script>
export default {
    props: {
        value: {
            type: Number,
            default: 0
        }
    },
    mounted() {
        this.count = this.value
    },
    data() {
        return {
            count: this.value
        }
    }
}
</script>
