<template>
    <div>
        <button @click="showMessage">点击显示消息提示</button>
    </div>
</template>

<script setup lang="tsx">
import { EbMessage } from "everybody-ui";
const showMessage = () => {
    EbMessage({
        jsx: () => <div>这是一个消息提示！</div>,
        position: "top",
        timeClose: 3000
    })
}
</script>
