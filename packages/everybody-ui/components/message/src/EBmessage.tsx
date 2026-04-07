import { defineComponent, h, render, type VNode } from "vue";

export const EbMessage: (options: {
  jsx: VNode | (() => VNode);
  position: "top" | "bottom" | "left" | "right" | "center";
  timeClose?: number;
}) => {
  close: () => void;
} = (options) => {
    // 1. 创建容器
    const container = document.createElement("div");

    // 2. 销毁函数
    const close = () => {
      render(null, container);
      container.remove();
    };

    // 3. 样式计算逻辑
    const getStyle = (): Record<string, string | number> => {
      const baseStyle: Record<string, any> = {
        position: "fixed",
        zIndex: 1000,
        backgroundColor: "#fff",
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "20px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
      };

      if (options.position === "center") {
        return {
          ...baseStyle,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        };
      }

      const posStyle: Record<string, string> = {
        left: "50%",
        transform: "translateX(-50%)",
      };

      if (options.position === "left") {
        posStyle.left = "20px";
        posStyle.top = "50%";
        posStyle.transform = "translateY(-50%)";
      } else if (options.position === "right") {
        posStyle.left = "auto";
        posStyle.right = "20px";
        posStyle.top = "50%";
        posStyle.transform = "translateY(-50%)";
      } else {
        posStyle[options.position] = "20px";
      }

      return { ...baseStyle, ...posStyle };
    };

    // 1. 创建一个内部组件来承载响应式逻辑
    const DialogComponent = defineComponent({
      setup() {
        // 返回一个渲染函数，这样内部引用的任何 ref 变化时，Vue 都会自动重新运行这个函数
        return () => (
          <div class="dialog-message-wrapper" style={getStyle()}>
            {typeof options.jsx === "function" ? options.jsx() : options.jsx}
          </div>
        );
      },
    });

    // 2. 渲染这个组件而不是原始的 VNode
    const vnode = h(DialogComponent);

    render(vnode, container);
    document.body.appendChild(container);

    // 5. 自动关闭
    if (options.timeClose) {
      setTimeout(close, options.timeClose);
    }

    // 返回关闭方法，允许外部手动控制关闭
    return { close };
  };
