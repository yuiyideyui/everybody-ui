<template>
    <div>
        <button @click="showMessage">点击显示消息提示</button>
    </div>
</template>

<script setup lang="tsx">
import { EbMessage } from "@yuiyideyui/everybody-ui";
const showMessage = () => {
    const {close} = EbMessage({
        jsx: () => <div>这是一个消息提示！<button onClick={()=>close()}>关闭</button></div>,
        position: "top",
    })
}
</script>
