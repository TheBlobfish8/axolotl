<script lang="ts" setup>
	import { FwbCard, FwbHeading, FwbP } from "flowbite-vue";
</script>

<template>
	<fwb-card>
		<fwb-heading tag="h2">Overview</fwb-heading>
		<fwb-p>CPU</fwb-p>
		<fwb-p>Memory</fwb-p>
		<fwb-p>Disk</fwb-p>
	</fwb-card>
	<fwb-card>
		<fwb-heading tag="h2">Servers</fwb-heading>
		<fwb-heading tag="h4">Server 1</fwb-heading>
		<fwb-p>Status</fwb-p>
		<fwb-p>CPU</fwb-p>
		<fwb-p>Memory</fwb-p>
		<fwb-p>Disk</fwb-p>
	</fwb-card>
</template>

<style scoped></style>
