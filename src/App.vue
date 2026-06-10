<script lang="ts" setup>
	import { FwbA, FwbNavbar, FwbNavbarCollapse, FwbNavbarLink } from "flowbite-vue";
</script>

<template>
	<div class="dark">
		<fwb-navbar>
			<template #default="{ isShowMenu }">
				<fwb-navbar-collapse :is-show-menu="isShowMenu">
					<fwb-navbar-link>
						<RouterLink to="/"><fwb-a>Home</fwb-a></RouterLink>
					</fwb-navbar-link>
					<fwb-navbar-link>
						<RouterLink to="/servers"><fwb-a>Servers</fwb-a></RouterLink>
					</fwb-navbar-link>
					<fwb-navbar-link>
						<RouterLink to="/about"><fwb-a>About</fwb-a></RouterLink>
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
