import { defineComponent, h, render, type VNode, type CSSProperties } from "vue";

export interface EbMessageOptions {
  jsx: VNode | (() => VNode);
  position: "top" | "bottom" | "left" | "right" | "center";
  timeClose?: number;
  baseStyle?: boolean;
}

// 1. 抽离静态基础样式
const BASE_CONTAINER_STYLE: CSSProperties = {
  backgroundColor: "#fff",
  border: "1px solid #ccc",
  borderRadius: "8px",
  padding: "20px",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
};

const FIXED_POSITION_STYLE: CSSProperties = {
  position: "fixed",
  zIndex: 1000,
};

// 2. 优化位置计算函数 (移出主函数以复用)
const getPositionStyles = (position: EbMessageOptions["position"]): CSSProperties => {
  const map: Record<EbMessageOptions["position"], CSSProperties> = {
    center: {
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    },
    left: {
      left: "20px",
      top: "50%",
      transform: "translateY(-50%)",
    },
    right: {
      right: "20px",
      left: "auto",
      top: "50%",
      transform: "translateY(-50%)",
    },
    top: {
      top: "20px",
      left: "50%",
      transform: "translateX(-50%)",
    },
    bottom: {
      bottom: "20px",
      left: "50%",
      transform: "translateX(-50%)",
    },
  };
  return map[position];
};

export const EbMessage = (options: EbMessageOptions) => {
  const { jsx, position, timeClose, baseStyle = true } = options;

  // 创建挂载容器
  const container = document.createElement("div");
  container.className = "eb-message-container";

  // 销毁逻辑
  const close = () => {
    render(null, container);
    container.remove();
  };

  // 组合最终样式
  const finalStyle: CSSProperties = {
    ...FIXED_POSITION_STYLE,
    ...(baseStyle ? BASE_CONTAINER_STYLE : {}),
    ...getPositionStyles(position),
  };

  // 内部组件定义
  const DialogComponent = defineComponent({
    name: "EbMessageInternal",
    setup() {
      return () => (
        <div class="dialog-message-wrapper" style={finalStyle}>
          {typeof jsx === "function" ? jsx() : jsx}
        </div>
      );
    },
  });

  // 渲染并挂载
  render(h(DialogComponent), container);
  document.body.appendChild(container);

  // 定时关闭
  if (timeClose && timeClose > 0) {
    setTimeout(close, timeClose);
  }

  return { close };
};