<script lang="ts" setup>
	import { FwbNavbar, FwbNavbarCollapse, FwbNavbarLink } from "flowbite-vue";
</script>

<template>
	<div class="dark">
		<fwb-navbar>
			<template #default="{ isShowMenu }">
				<fwb-navbar-collapse :is-show-menu="isShowMenu">
					<fwb-navbar-link>
						<RouterLink to="/">Home</RouterLink>
					</fwb-navbar-link>
					<fwb-navbar-link>
						<RouterLink to="/servers">Servers</RouterLink>
					</fwb-navbar-link>
					<fwb-navbar-link>
						<RouterLink to="/about">About</RouterLink>
					</fwb-navbar-link>
				</fwb-navbar-collapse>
			</template>
		</fwb-navbar>
		<main>
			<RouterView />
		</main>
	</div>
</template>

<style scoped></style>
