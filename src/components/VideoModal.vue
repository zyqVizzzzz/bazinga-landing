<template>
	<dialog :class="['modal', { 'modal-open': isOpen }]">
		<div class="modal-box max-w-4xl relative bg-white">
			<div class="w-full">
				<video
					ref="videoPlayer"
					class="w-full rounded-lg"
					controls
					:src="videoSrc"
				></video>
			</div>
		</div>
		<form method="dialog" class="modal-backdrop" @click="close">
			<button>关闭</button>
		</form>
	</dialog>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const props = defineProps({
	isOpen: Boolean,
	videoSrc: String,
});

const emit = defineEmits(["close"]);
const videoPlayer = ref(null);

const close = () => {
	if (videoPlayer.value) {
		videoPlayer.value.pause();
	}
	emit("close");
};

const handleEsc = (e) => {
	if (e.key === "Escape" && props.isOpen) {
		close();
	}
};

onMounted(() => {
	document.addEventListener("keydown", handleEsc);
});

onUnmounted(() => {
	document.removeEventListener("keydown", handleEsc);
});
</script>

<style scoped></style>
