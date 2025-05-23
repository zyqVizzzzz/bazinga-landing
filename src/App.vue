<template>
	<div
		class="manual-container min-h-screen bg-[#f1f1f1] font-comic flex items-center justify-center"
	>
		<div
			class="manual-content max-w-4xl mx-auto py-8 pb-0 h-[100vh] relative flex items-center justify-center"
		>
			<!-- 说明书封面 -->
			<section
				class="manual-cover mb-16 bg-black text-white p-8 pb-2 rounded-lg shadow-retro"
			>
				<div class="cover-header border-b-4 border-white pb-12 mb-8">
					<div class="text-white text-center">
						<div class="sg-logo mb-4">
							<div
								class="text-xs tracking-[0.5em] mb-2 relative"
								:class="{
									'animate-slide-down': isLoaded,
									'tv-flicker': isLoaded,
								}"
							>
								KEEP FUN
								<span class="tv-scanlines"></span>
							</div>
							<h1
								class="text-6xl font-bold tracking-wider mb-2 opacity-0"
								:class="{
									'animate-comic-pop': isLoaded,
									'text-comic-red': isLoaded,
									'tv-flicker-delayed': isLoaded,
								}"
								style="--delay: 0.3s"
							>
								BAZINGA!!
								<span class="tv-scanlines"></span>
							</h1>
							<div
								class="text-xs tracking-[0.5em] mb-2 relative"
								:class="{
									'animate-slide-down': isLoaded,
									'tv-flicker': isLoaded,
								}"
							>
								MOLIDOKI LANGUAGE SYSTEM
							</div>
						</div>
						<div
							class="model-number mt-4 inline-block border border-white px-4 py-1 relative"
						>
							<button
								@click="handleEnterApp"
								class="text-sm hover:text-secondary transition-colors duration-300 relative top-[-1px]"
							>
								进入应用
							</button>
						</div>
					</div>
				</div>
				<div class="cover-content text-white mt-12">
					<div class="grid grid-cols-2 gap-8">
						<!-- 左侧产品图 -->
						<div class="product-image border-2 border-white p-1">
							<Swiper v-bind="swiperOptions" class="h-full" @swiper="onSwiper">
								<SwiperSlide v-for="(slide, index) in slides" :key="index">
									<img
										:src="slide.src"
										:alt="slide.alt"
										class="w-full h-auto"
									/>
								</SwiperSlide>
							</Swiper>
						</div>
						<!-- 右侧产品说明 -->
						<div class="product-info h-full flex flex-col justify-between">
							<div class="tech-specs relative">
								<div
									v-for="(spec, index) in features[activeIndex].specs"
									:key="`${activeIndex}-${spec}`"
									class="spec-item mb-4 last:mb-0 text-sm"
								>
									<span class="text-[#e8447a]">▶</span> {{ spec }}
								</div>
							</div>
							<div class="warning-text text-xs border border-white p-3">
								<p>
									WARNING: This system may cause sudden improvements in English
									proficiency and unexpected bursts of confidence.
								</p>
							</div>
						</div>
					</div>
				</div>
				<FooterSection />
			</section>

			<!-- 说明书内容 -->
			<!-- <section class="chapter !pb-0 !border-b-0"> -->

			<!-- </section> -->
		</div>
	</div>
	<VideoModal
		:is-open="isVideoModalOpen"
		:video-src="currentVideo"
		@close="isVideoModalOpen = false"
	/>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Autoplay, Pagination } from "swiper/modules";
import FooterSection from "./components/footer/FooterSection.vue";
import VideoModal from "./components/VideoModal.vue";

import card from "./assets/003_card.png";
import podcast from "./assets/004_podcast.png";
import editorCard from "./assets/005_editor_card.png";

const slides = [
	{ src: card, alt: "Card System" },
	{ src: podcast, alt: "Podcast Feature" },
	{ src: editorCard, alt: "Editor Card" },
];

const activeIndex = ref(0);
const features = [
	{
		title: "智能卡片系统",
		specs: [
			"一键将任意文本转换为学习笔记 & 场景卡片合集",
			"复古漫画&街机风格设计，更加沉浸的学习体验",
			"智能分析文本，自动生成翻译、知识点、播客",
			"定期提供精选内容，所有功能均可免费使用",
		],
	},
	{
		title: "沉浸式学习体验",
		specs: [
			"一键将任意文本转换为学习笔记 & 场景卡片合集",
			"复古漫画&街机风格设计，更加沉浸的学习体验",
			"智能分析文本，自动生成翻译、知识点、播客",
			"定期提供精选内容，所有功能均可免费使用",
		],
	},
	{
		title: "强大编辑功能",
		specs: [
			"一键将任意文本转换为学习笔记 & 场景卡片合集",
			"复古漫画&街机风格设计，更加沉浸的学习体验",
			"智能分析文本，自动生成翻译、知识点、播客",
			"定期提供精选内容，所有功能均可免费使用",
		],
	},
];

const isVideoModalOpen = ref(false);
const currentVideo = ref("");

const isLoaded = ref(false);
onMounted(() => {
	setTimeout(() => {
		isLoaded.value = true;
	}, 100);
});

const swiperOptions = {
	modules: [Autoplay, Pagination],
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	pagination: {
		clickable: true,
	},
};

const handleEnterApp = () => {
	window.location.href = "https://bazinga.molidoki.com";
	// window.location.href = "http://localhost:5173/";
};

const onSwiper = (swiper) => {
	swiper.on("slideChange", () => {
		activeIndex.value = swiper.realIndex;
	});
};

const openVideoModal = (videoSrc) => {
	currentVideo.value = videoSrc;
	isVideoModalOpen.value = true;
};
</script>

<style lang="scss">
.manual-container {
	background-size: 16px 16px;
	background-color: #f1f1f1;
	background-blend-mode: soft-light;
}

.manual-content {
	position: relative;
	filter: contrast(95%);
}

.comic-border {
	border: 2px solid #000;
	position: relative;

	&::before {
		content: "";
		position: absolute;
		inset: -8px;
		border: 2px solid #000;
		z-index: -1;
	}
}

.shadow-retro {
	box-shadow: 4px 4px 0 rgba(var(--primary-color-rgb), 0.2);
}

.chapter {
	position: relative;
	border-bottom: 4px solid #000;
	padding-bottom: 3rem;
	margin-bottom: 3rem;

	&:last-child {
		border-bottom: none;
		margin-bottom: 0;
	}
}

.swiper {
	.swiper-pagination-bullet {
		background: white;
		opacity: 0.5;

		&-active {
			background: var(--secondary-color);
			opacity: 1;
		}
	}
}

.demo-section {
	// border: 2px solid #000;

	// &::before {
	// 	content: "";
	// 	position: absolute;
	// 	top: 2px;
	// 	left: 2px;
	// 	right: 2px;
	// 	bottom: 2px;
	// 	border: 1px dashed rgba(0, 0, 0, 0.2);
	// 	pointer-events: none;
	// }
}

.comic-card {
	transition: transform 0.3s ease;

	&:hover {
		transform: rotate(0) scale(1.02);
	}

	&::before {
		content: "";
		position: absolute;
		inset: 4px;
		background: #000;
		z-index: 0;
	}
}

.card-inner {
	position: relative;
	background: repeating-linear-gradient(
		45deg,
		transparent,
		transparent 2px,
		rgba(0, 0, 0, 0.05) 2px,
		rgba(0, 0, 0, 0.05) 4px
	);
}

.number-badge {
	display: inline-block;
	background: #222;
	color: white;
	padding: 2px 8px;
	margin-right: 8px;
	clip-path: polygon(0 0, 100% 0, 90% 100%, 10% 100%);
	font-size: 1rem;
	font-weight: normal;
}

.comic-dots {
	width: 30px;
	height: 100%;
	background-image: radial-gradient(#000 1px, transparent 2px);
	background-size: 8px 8px;
}

.comic-stripes {
	position: absolute;
	inset: 0;
	background: repeating-linear-gradient(
		45deg,
		rgba(0, 0, 0, 0.05),
		rgba(0, 0, 0, 0.05) 2px,
		transparent 2px,
		transparent 8px
	);
}

.comic-btn {
	background: black;
	color: white;
	border: none;
	position: relative;
	transition: all 0.3s ease;
	overflow: hidden;

	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: -100%;
		width: 100%;
		height: 100%;
		background: #e8447a;
		transition: all 0.3s ease;
	}

	&:hover {
		&::before {
			left: 0;
		}
	}

	span {
		position: relative;
		z-index: 1;
	}
}
.dot-grid {
	opacity: 0.5;
	transition: opacity 0.3s ease;

	&:hover {
		opacity: 1;
	}
}

@keyframes slideDown {
	from {
		transform: translateY(-20px);
		opacity: 0;
	}
	to {
		transform: translateY(0);
		opacity: 1;
	}
}

@keyframes popIn {
	0% {
		transform: scale(0.8);
		opacity: 0;
	}
	50% {
		transform: scale(1.1);
	}
	100% {
		transform: scale(1);
		opacity: 1;
	}
}

.animate-slide-down {
	animation: slideDown 0.8s ease forwards;
}

.animate-pop-in {
	animation: popIn 1s ease 0.3s forwards;
}

@keyframes comicPop {
	0% {
		transform: scale(0.5) rotate(-5deg);
		opacity: 0;
		text-shadow: 0 0 0 rgba(232, 68, 122, 0);
	}
	20% {
		transform: scale(1.2) rotate(5deg);
		text-shadow: 0 0 20px rgba(232, 68, 122, 0.8);
	}
	40% {
		transform: scale(0.9) rotate(-3deg);
	}
	60% {
		transform: scale(1.1) rotate(2deg);
		text-shadow: 0 0 30px rgba(232, 68, 122, 0.9);
	}
	80% {
		transform: scale(0.95) rotate(-1deg);
	}
	100% {
		transform: scale(1) rotate(0);
		opacity: 1;
		text-shadow: 0 0 10px rgba(232, 68, 122, 0.6);
	}
}

.animate-comic-pop {
	animation: comicPop 1.2s cubic-bezier(0.68, -0.6, 0.32, 1.6) var(--delay)
		forwards;
}

.text-comic-red {
	color: #fff;
	transition: color 0.5s ease 0.8s;
}

.tv-flicker {
	animation: tvFlicker 2s linear 1.5s infinite alternate;
}

.tv-scanlines {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-size: 100% 4px;
	pointer-events: none;
}

@keyframes tvFlicker {
	0%,
	19%,
	21%,
	23%,
	25%,
	54%,
	56%,
	100% {
		opacity: 1;
		text-shadow: 0 0 10px rgba(232, 68, 122, 0.6);
	}
	20%,
	22%,
	24%,
	55% {
		opacity: 0.7;
		text-shadow: 0 0 10px rgba(232, 68, 122, 0.6);
	}
}

.tv-flicker-delayed {
	animation: comicPop 1.2s cubic-bezier(0.68, -0.6, 0.32, 1.6) var(--delay)
			forwards,
		tvFlicker 2s linear 1.5s infinite alternate;
}
.video-container {
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

	video {
		transition: transform 0.3s ease;

		&:hover {
			transform: scale(1.01);
		}
	}
}
</style>
