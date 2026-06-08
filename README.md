# 佰氏健康集团官网

> 静态官网，中英双语，适配PC/平板/手机

## 目录结构

```
baishi-website/
├── index.html          # 中文首页
├── en.html            # 英文首页
├── about.html         # 关于我们
├── products.html      # 产品中心（6大产品线）
├── factory.html       # 工厂实力（广州/江西/广西）
├── partnership.html   # 招商合作（三级合伙人制度）
├── contact.html       # 联系我们（含表单）
├── css/
│   └── style.css     # 主样式（CSS变量、响应式、动画）
├── js/
│   └── main.js       # 交互逻辑（菜单/数字动画/滚动动画）
└── assets/
    └── images/       # 图片资源目录（待补充）
```

## 快速启动

```bash
# 进入目录
cd /home/ubuntu/baishi-website

# 启动本地预览（Python）
python3 -m http.server 8080

# 浏览器访问
# 中文：http://localhost:8080/index.html
# 英文：http://localhost:8080/en.html
```

## 核心页面

| 页面 | 路径 | 说明 |
|------|------|------|
| 中文首页 | `index.html` | 英雄区+核心优势+产品矩阵+工厂实力+招商入口 |
| 英文首页 | `en.html` | 同中文首页，面向B2B海外客户 |
| 关于我们 | `about.html` | 公司简介+企业文化+发展历程 |
| 产品中心 | `products.html` | 6大产品线详情（私密/疼痛/护肤/保健品/个护/男士） |
| 工厂实力 | `factory.html` | 广州/江西/广西基地+净化车间+研发中心 |
| 招商合作 | `partnership.html` | 三级合伙人制度+合作优势+CTA |
| 联系我们 | `contact.html` | 联系方式+在线留言表单+地图占位 |

## 设计规范

- **主色调**：健康绿 `#2E7D32` + 科技蓝 `#1565C0`
- **字体**：Noto Sans SC（Google Fonts 免费）
- **响应式断点**：1024px / 768px / 480px
- **动画**：数字滚动、滚动淡入（IntersectionObserver）

## 待完善

- [ ] 替换 `assets/images/` 中的工厂/产品实拍图
- [ ] 补充微信二维码图片
- [ ] 接入真实地图（百度地图/高德地图 API）
- [ ] 表单接入后端（目前为前端模拟提交）
- [ ] 产品图片替换为真实产品照片
- [ ] 压缩CSS/JS（生产环境建议）

## 技术栈

- HTML5 + CSS3 + Vanilla JavaScript
- 无框架依赖，无需构建工具
- 直接部署到任意静态服务器（Nginx/Apache/GitHub Pages/阿里云OSS）

---

*生成时间：2026年3月 | 主色调：健康绿+科技蓝*
