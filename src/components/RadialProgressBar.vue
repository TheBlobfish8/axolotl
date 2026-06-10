<script lang="ts" setup>
	import { computed } from "vue";

	const props = defineProps<{ diameter: number; value: number; min: number; max: number }>();

	const radius = computed(() => props.diameter / 2 - 10);
	const center = computed(() => props.diameter / 2);
	const circumference = computed(() => radius.value * 2 * Math.PI);

	const strokeWidth = 10;
	const strokeLinecap = "round";
	const fillColor = "turqoise";
	const backgroundColor = "gray";
</script>

<template>
	<svg
		:height="diameter"
		:width="diameter"
		xmlns="http://www.w3.org/2000/svg"
	>
		<!--		Outline Circle-->
		<circle
			:cx="center"
			:cy="center"
			:r="radius"
			:stroke-dasharray="circumference"
			:stroke-dashoffset="0"
			:stroke-width="strokeWidth"
			fill="none"
			stroke="gray"
			stroke-linecap="round"
		></circle>

		<!--		Progress Circle-->
		<circle
			:cx="center"
			:cy="center"
			:r="radius"
			:stroke-dasharray="circumference"
			:stroke-dashoffset="circumference * (1 - value / (max - min))"
			:stroke-width="strokeWidth"
			:transform="'rotate(270, ' + center + ',' + center + ')'"
			fill="none"
			stroke="turquoise"
			stroke-linecap="round"
		/>

		<!--		Center Text-->
	</svg>
</template>

<style scoped></style>
