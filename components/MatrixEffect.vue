<template>
  <canvas ref="canvas"></canvas>
</template>

<script setup>
import { onMounted, ref } from "vue";

const canvas = ref(null);

onMounted(() => {
  const ctx = canvas.value.getContext("2d");
  const resize = () => {
    canvas.value.width = canvas.value.offsetWidth;
    canvas.value.height = canvas.value.offsetHeight;
  };

  resize();
  window.addEventListener("resize", resize);

  const letters = "01アカサタナハマヤラワガザダバパ";
  const fontSize = 14;
  const columns = Math.floor(canvas.value.width / fontSize);
  const drops = Array(columns).fill(1);

  const draw = () => {
    ctx.fillStyle = "rgba(11, 17, 32, 0.15)";
    ctx.fillRect(0, 0, canvas.value.width, canvas.value.height);

    ctx.fillStyle = "#37f5a0";
    ctx.font = `${fontSize}px monospace`;

    drops.forEach((y, index) => {
      const text = letters[Math.floor(Math.random() * letters.length)];
      ctx.fillText(text, index * fontSize, y * fontSize);

      if (y * fontSize > canvas.value.height && Math.random() > 0.975) {
        drops[index] = 0;
      }
      drops[index]++;
    });
  };

  setInterval(draw, 40);
});
</script>