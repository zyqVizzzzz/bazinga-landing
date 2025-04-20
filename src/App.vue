<template>
	<div class="manual-container min-h-screen bg-[#f1f1f1] font-comic">
		<div class="manual-content max-w-4xl mx-auto px-4 py-8 pb-0">
			<!-- 说明书封面 -->
			<section
				class="manual-cover mb-16 bg-black text-white p-8 rounded-lg shadow-retro"
			>
				<div class="cover-header border-b-4 border-white pb-8 mb-8">
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
				<div class="cover-content text-white">
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
			</section>

			<section class="chapter">
				<div
					class="demo-section bg-white p-8 rounded-lg shadow-retro relative overflow-hidden"
				>
					<!-- 添加复古装饰条纹 -->
					<div class="absolute top-0 left-0 w-full h-2 bg-[#222]"></div>
					<div class="absolute bottom-0 left-0 w-full h-2 bg-[#222]"></div>
					<h2 class="text-3xl font-bold mb-8 text-center">DEMO</h2>

					<div class="demo-grid grid grid-cols-2 gap-8 mb-12">
						<!-- Demo 1: 文章学习 -->
						<div class="demo-card comic-card relative">
							<div
								class="card-inner border-2 border-black p-4 bg-white relative z-10"
							>
								<div class="card-header relative mb-4">
									<h3 class="text-xl font-bold">
										<span class="number-badge">01</span>
										精选内容学习
									</h3>
									<div
										class="dot-grid absolute right-2 top-2 grid grid-cols-3 gap-[3px]"
									>
										<div
											v-for="i in 9"
											:key="i"
											class="w-[3px] h-[3px] bg-black rounded-full"
										></div>
									</div>
								</div>
								<div
									class="demo-placeholder bg-gray-100 h-48 flex items-center justify-center relative overflow-hidden group"
									@click="openVideoModal(demoVideo1)"
								>
									<div class="comic-stripes"></div>
									<img
										:src="demo1"
										alt="Demo Preview"
										class="w-full h-full object-cover relative z-10"
									/>
									<!-- 添加遮罩和播放按钮 -->
									<div
										class="absolute inset-0 bg-black bg-opacity-40 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
									>
										<div
											class="transform transition-transform duration-300 group-hover:scale-110"
										>
											<i class="bi bi-play-circle-fill text-white text-5xl"></i>
										</div>
									</div>
								</div>
								<button
									class="demo-btn comic-btn mt-4 w-full py-2 px-4"
									@click="openVideoModal(demoVideo1)"
								>
									<span class="relative z-10">查看演示</span>
								</button>
							</div>
						</div>

						<!-- Demo 2: AI 对话 -->
						<div class="demo-card comic-card relative">
							<div
								class="card-inner border-2 border-black p-4 bg-white relative z-10"
							>
								<div class="card-header relative mb-4">
									<h3 class="text-xl font-bold">
										<span class="number-badge">02</span>
										任意内容生成笔记
									</h3>
									<div
										class="dot-grid absolute right-2 top-2 grid grid-cols-3 gap-[3px]"
									>
										<div
											v-for="i in 9"
											:key="i"
											class="w-[3px] h-[3px] bg-black rounded-full"
										></div>
									</div>
								</div>
								<div
									class="demo-placeholder bg-gray-100 h-48 flex items-center justify-center relative overflow-hidden group"
									@click="openVideoModal(demoVideo2)"
								>
									<div class="comic-stripes"></div>
									<img
										:src="demo2"
										alt="Demo Preview"
										class="w-full h-full object-cover relative z-10"
									/>
									<!-- 添加遮罩和播放按钮 -->
									<div
										class="absolute inset-0 bg-black bg-opacity-40 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
									>
										<div
											class="transform transition-transform duration-300 group-hover:scale-110"
										>
											<i class="bi bi-play-circle-fill text-white text-5xl"></i>
										</div>
									</div>
								</div>
								<button
									class="demo-btn comic-btn mt-4 w-full py-2 px-4"
									@click="openVideoModal(demoVideo2)"
								>
									<span class="relative z-10">查看演示</span>
								</button>
							</div>
						</div>

						<!-- Demo 3: 自动检索知识点 -->
						<div class="demo-card comic-card relative">
							<div
								class="card-inner border-2 border-black p-4 bg-white relative z-10"
							>
								<div class="card-header relative mb-4">
									<h3 class="text-xl font-bold">
										<span class="number-badge">03</span>
										智能检索知识点
									</h3>
									<div
										class="dot-grid absolute right-2 top-2 grid grid-cols-3 gap-[3px]"
									>
										<div
											v-for="i in 9"
											:key="i"
											class="w-[3px] h-[3px] bg-black rounded-full"
										></div>
									</div>
								</div>
								<div
									class="demo-placeholder bg-gray-100 h-48 flex items-center justify-center relative overflow-hidden group"
									@click="openVideoModal(demoVideo3)"
								>
									<div class="comic-stripes"></div>
									<img
										:src="demo3"
										alt="Demo Preview"
										class="w-full h-full object-cover relative z-10"
									/>
									<!-- 添加遮罩和播放按钮 -->
									<div
										class="absolute inset-0 bg-black bg-opacity-40 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
									>
										<div
											class="transform transition-transform duration-300 group-hover:scale-110"
										>
											<i class="bi bi-play-circle-fill text-white text-5xl"></i>
										</div>
									</div>
								</div>
								<button
									class="demo-btn comic-btn mt-4 w-full py-2 px-4"
									@click="openVideoModal(demoVideo3)"
								>
									<span class="relative z-10">查看演示</span>
								</button>
							</div>
						</div>

						<!-- Demo 4: 播客生成 -->
						<div class="demo-card comic-card relative">
							<div
								class="card-inner border-2 border-black p-4 bg-white relative z-10"
							>
								<div class="card-header relative mb-4">
									<h3 class="text-xl font-bold">
										<span class="number-badge">04</span>
										播客生成
									</h3>
									<div
										class="dot-grid absolute right-2 top-2 grid grid-cols-3 gap-[3px]"
									>
										<div
											v-for="i in 9"
											:key="i"
											class="w-[3px] h-[3px] bg-black rounded-full"
										></div>
									</div>
								</div>
								<div
									class="demo-placeholder bg-gray-100 h-48 flex items-center justify-center relative overflow-hidden group"
									@click="openVideoModal(demoVideo4)"
								>
									<div class="comic-stripes"></div>
									<img
										:src="demo4"
										alt="Demo Preview"
										class="w-full h-full object-cover relative z-10"
									/>
									<!-- 添加遮罩和播放按钮 -->
									<div
										class="absolute inset-0 bg-black bg-opacity-40 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
									>
										<div
											class="transform transition-transform duration-300 group-hover:scale-110"
										>
											<i class="bi bi-play-circle-fill text-white text-5xl"></i>
										</div>
									</div>
								</div>
								<button
									class="demo-btn comic-btn mt-4 w-full py-2 px-4"
									@click="openVideoModal(demoVideo4)"
								>
									<span class="relative z-10">查看演示</span>
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>

			<!-- 说明书内容 -->
			<section class="chapter !pb-0 !border-b-0">
				<FooterSection />
			</section>
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
import demoVideo1 from "./assets/demo1.mp4";
import demoVideo2 from "./assets/demo2.mp4";
import demoVideo3 from "./assets/demo3.mp4";
import demoVideo4 from "./assets/demo4.mp4";
import demo1 from "./assets/demo1.png";
import demo2 from "./assets/demo2.png";
import demo3 from "./assets/demo3.png";
import demo4 from "./assets/demo4.png";

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
			"AI 驱动，将任意文本转换为学习笔记 & 场景卡片合集",
			"复古漫画风格设计，更加沉浸式的学习体验",
			"智能分析文本，自动生成翻译、知识点、播客",
			"定期提供精选内容，所有功能均可免费使用",
		],
	},
	{
		title: "沉浸式学习体验",
		specs: [
			"AI 驱动，将任意文本转换为学习笔记 & 场景卡片合集",
			"复古漫画风格设计，更加沉浸式的学习体验",
			"智能分析文本，自动生成翻译、知识点、播客",
			"定期提供精选内容，所有功能均可免费使用",
		],
	},
	{
		title: "强大编辑功能",
		specs: [
			"AI 驱动，将任意文本转换为学习笔记 & 场景卡片合集",
			"复古漫画风格设计，更加沉浸式的学习体验",
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
	border: 2px solid #000;

	&::before {
		content: "";
		position: absolute;
		top: 2px;
		left: 2px;
		right: 2px;
		bottom: 2px;
		border: 1px dashed rgba(0, 0, 0, 0.2);
		pointer-events: none;
	}
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
</style>
