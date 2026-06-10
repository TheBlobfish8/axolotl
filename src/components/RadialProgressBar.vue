<script lang="ts" setup>
	import { computed } from "vue";
	import { FwbP } from "flowbite-vue";

	interface Props {
		diameter?: number;
		value?: number;
		min?: number;
		max?: number;
		lineWidth?: number;
		fillColor?: string;
		backgroundFill?: string;
		centerText?: string;
	}

	const {
		diameter = 100,
		value = 50,
		min = 0,
		max = 100,
		fillColor = "turquoise",
		backgroundFill = "gray",
	} = defineProps<Props>();

	const radius = computed(() => diameter / 2 - 10);
	const center = computed(() => diameter / 2);
	const circumference = computed(() => radius.value * 2 * Math.PI);

	const strokeWidth = 10;
	const strokeLinecap = "round";
	// const fillColor = "turquoise";
	// const backgroundColor = "gray";
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
			:stroke="backgroundFill"
			:stroke-dasharray="circumference"
			:stroke-dashoffset="0"
			:stroke-linecap="strokeLinecap"
			:stroke-width="strokeWidth"
			fill="none"
		></circle>

		<!--		Progress Circle-->
		<circle
			:cx="center"
			:cy="center"
			:r="radius"
			:stroke="fillColor"
			:stroke-dasharray="circumference"
			:stroke-dashoffset="circumference * (1 - value / (max - min))"
			:stroke-linecap="strokeLinecap"
			:stroke-width="strokeWidth"
			:transform="'rotate(270, ' + center + ',' + center + ')'"
			fill="none"
		/>

		<!--		Center Text-->
		<fwb-p>{{ centerText }}</fwb-p>
	</svg>
</template>

<style scoped></style>
