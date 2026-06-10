<script lang="ts" setup>
	import { FwbCard, FwbHeading, FwbP } from "flowbite-vue";
	import RadialProgressBar from "@/components/RadialProgressBar.vue";
</script>

<template>
	<fwb-card>
		<fwb-heading tag="h2">Overview</fwb-heading>
		<div class="grid grid-cols-3 gap-2 items-baseline">
			<div class="flex items-center">
				<!--				<fwb-p class="">CPU</fwb-p>-->
				<!--				<fwb-progress-->
				<!--					:progress="45"-->
				<!--					class="min-w-64"-->
				<!--				/>-->
				<RadialProgressBar
					:diameter="100"
					:max="8"
					:min="0"
					:value="7"
					center-text="CPU"
				/>
			</div>
			<div>
				<fwb-p>Memory</fwb-p>
			</div>
			<div>
				<fwb-p>Disk</fwb-p>
			</div>
		</div>
	</fwb-card>
	<!--	<fwb-card>-->
	<!--		<fwb-heading tag="h2">Servers</fwb-heading>-->
	<!--		<div>-->
	<!--			<fwb-heading tag="h4">Server 1</fwb-heading>-->
	<!--			<div class="grid grid-cols-4">-->
	<!--				<fwb-p>Status</fwb-p>-->
	<!--				<fwb-p>CPU</fwb-p>-->
	<!--				<fwb-p>Memory</fwb-p>-->
	<!--				<fwb-p>Disk</fwb-p>-->
	<!--			</div>-->
	<!--		</div>-->
	<!--	</fwb-card>-->
</template>

<style scoped></style>
