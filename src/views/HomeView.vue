<script setup lang="ts">
	import { ref } from "vue";

	const count = ref(0);
</script>

<template>
	<h1>Home</h1>
	<p>Count: {{ count }}</p>
	<button @click="count++">Increase Count</button>
</template>

<style scoped></style>
