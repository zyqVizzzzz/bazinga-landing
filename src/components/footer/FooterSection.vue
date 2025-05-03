<template>
	<div
		class="footer-section bg-black text-white p-8 pb-4 rounded-lg shadow-retro"
		style="border-bottom-right-radius: 0; border-bottom-left-radius: 0"
	>
		<div class="grid grid-cols-3 gap-8">
			<!-- 品牌信息 -->
			<div class="brand-info">
				<h3 class="text-xl font-bold mb-4">魔力多奇实验室</h3>
				<p class="text-sm opacity-70">Today's vibe is SUPER cool</p>
			</div>

			<!-- 快速链接 -->
			<div class="quick-links">
				<h4 class="text-lg font-bold mb-4">快速链接</h4>
				<ul class="space-y-2 text-sm">
					<li>
						<a
							href="https://bazinga.molidoki.com"
							class="hover:text-[#e8447a] transition-colors"
							>Bazinga</a
						>
					</li>
					<li>
						<a href="#" class="hover:text-[#e8447a] transition-colors"
							>Bankai（开发中）</a
						>
					</li>
				</ul>
			</div>

			<!-- 联系方式 -->
			<div class="contact-info">
				<h4 class="text-lg font-bold mb-4">关注我们</h4>
				<div class="social-links flex space-x-4">
					<a href="#" class="hover:text-[#e8447a] transition-colors">
						<i class="bi bi-twitter text-xl"></i>
					</a>
					<a
						href="#"
						class="hover:text-[#e8447a] transition-colors flex items-center relative top-[1px]"
					>
						<RednoteIcon class="w-5 h-5" />
					</a>
					<a
						@click="handleWechatClick"
						class="hover:text-[#e8447a] transition-colors cursor-pointer"
					>
						<i class="bi bi-wechat text-xl"></i>
					</a>
					<a href="#" class="hover:text-[#e8447a] transition-colors">
						<i class="bi bi-envelope text-xl"></i>
					</a>
				</div>
			</div>
		</div>

		<div
			class="mt-8 pt-4 border-t border-white/20 text-center text-sm opacity-50"
		>
			© 2025 Moli-Doki Lab
			<span class="mx-4">|</span>
			<a
				href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33011002018207"
				target="_blank"
				rel="noopener"
				class="hover:text-[#e8447a] transition-colors"
			>
				浙公网安备33011002018207号
			</a>
			<span class="mx-4">|</span>
			<a
				href="https://beian.miit.gov.cn/"
				target="_blank"
				rel="noopener"
				class="hover:text-[#e8447a] transition-colors"
			>
				浙ICP备2025161223号
			</a>
		</div>
		<dialog id="wechat_modal" class="modal">
			<div class="modal-box bg-white">
				<img
					src="../../assets/411745910725_.pic_hd.jpg"
					alt="微信二维码"
					class="w-full rounded-lg"
				/>
			</div>
			<form method="dialog" class="modal-backdrop">
				<button>关闭</button>
			</form>
		</dialog>
	</div>
</template>
<script setup>
import RednoteIcon from "@/components/RednoteIcon.vue";

const handleWechatClick = () => {
	document.getElementById("wechat_modal").showModal();
};
</script>
<style></style>
