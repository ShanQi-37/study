# frontend-design 技能包

提供前端设计相关的工具和方法，帮助快速构建现代化的UI界面。

## 功能特性

### 🎨 UI组件生成
- **登录页面**：一键生成美观的登录页面模板
- **按钮组件**：多种样式和尺寸的按钮
- **卡片组件**：带阴影和动画效果的卡片
- **输入框组件**：带图标和验证的输入框

### 🎯 设计规范
- 基于Tailwind CSS的现代化设计
- 响应式布局，支持移动端
- 流畅的交互动画和过渡效果
- 符合WCAG无障碍标准

## 安装使用

```bash
# 进入skill目录
cd skill

# 安装依赖（如果有）
npm install
```

## API文档

### FrontendDesignSkill 类

#### constructor()
创建技能实例

```javascript
const designSkill = new FrontendDesignSkill()
```

#### generateLoginPage()
生成登录页面组件

```javascript
const loginPage = designSkill.generateLoginPage()
```

#### generateButton(options)
生成按钮组件

**参数：**
- `text`: 按钮文本，默认'按钮'
- `type`: 按钮类型，可选'primary'/'secondary'/'success'/'danger'，默认'primary'
- `size`: 按钮尺寸，可选'sm'/'md'/'lg'，默认'md'
- `disabled`: 是否禁用，默认false

```javascript
const button = designSkill.generateButton({
  text: '提交',
  type: 'success',
  size: 'lg'
})
```

#### generateCard(options)
生成卡片组件

**参数：**
- `title`: 卡片标题，可选
- `content`: 卡片内容
- `shadow`: 是否显示阴影，默认true

```javascript
const card = designSkill.generateCard({
  title: '用户信息',
  content: '这是卡片的详细内容',
  shadow: true
})
```

#### generateInput(options)
生成输入框组件

**参数：**
- `label`: 输入框标签
- `type`: 输入类型，默认'text'
- `placeholder`: 占位文本
- `icon`: 左侧图标（SVG代码）

```javascript
const input = designSkill.generateInput({
  label: '用户名',
  type: 'text',
  placeholder: '请输入用户名',
  icon: '<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>'
})
```

## 技术栈

- JavaScript ES6+
- Tailwind CSS
- React 组件语法

## 示例

查看项目根目录的 `src/App.jsx` 文件，了解如何使用本技能包生成的UI组件。

## 许可证

MIT License