// frontend-design 技能实现
// 提供前端设计相关的工具和方法

class FrontendDesignSkill {
  constructor() {
    this.name = 'frontend-design'
    this.description = '前端设计技能，提供UI组件、样式设计、交互效果等功能'
  }

  // 生成Tailwind CSS样式的登录页面
  generateLoginPage() {
    return `
<div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
  <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden">
    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 py-8 px-6">
      <div className="flex flex-col items-center">
        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-4">
          <svg className="w-10 h-10 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
          </svg>
        </div>
        <h1 className="text-white text-2xl font-bold">欢迎回来</h1>
        <p className="text-blue-100 mt-2">请登录您的账号</p>
      </div>
    </div>
    
    <form className="p-6 space-y-6">
      <div className="space-y-4">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            手机号码
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </span>
            <input
              type="tel"
              id="phone"
              className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              placeholder="请输入手机号码"
              required
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
            密码
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </span>
            <input
              type="password"
              id="password"
              className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              placeholder="请输入密码"
              required
            />
          </div>
        </div>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            type="checkbox"
            id="remember"
            className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
            记住密码
          </label>
        </div>
        <div className="text-sm">
          <a href="#" className="font-medium text-blue-600 hover:text-blue-500 transition-colors">
            忘记密码？
          </a>
        </div>
      </div>
      
      <div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-3 px-4 rounded-lg hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          登录
        </button>
      </div>
    </form>
  </div>
</div>
    `
  }

  // 生成按钮组件
  generateButton(options = {}) {
    const {
      text = '按钮',
      type = 'primary',
      size = 'md',
      disabled = false
    } = options

    const typeClasses = {
      primary: 'bg-blue-600 hover:bg-blue-700 text-white',
      secondary: 'bg-gray-600 hover:bg-gray-700 text-white',
      success: 'bg-green-600 hover:bg-green-700 text-white',
      danger: 'bg-red-600 hover:bg-red-700 text-white'
    }

    const sizeClasses = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-6 py-3 text-lg'
    }

    const disabledClass = disabled ? 'opacity-50 cursor-not-allowed' : ''

    return `
<button className="${typeClasses[type]} ${sizeClasses[size]} font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 ${disabledClass}">
  ${text}
</button>
    `
  }

  // 生成卡片组件
  generateCard(options = {}) {
    const {
      title = '卡片标题',
      content = '卡片内容',
      shadow = true
    } = options

    const shadowClass = shadow ? 'shadow-lg hover:shadow-xl' : 'shadow-sm'

    return `
<div className="bg-white rounded-xl ${shadowClass} overflow-hidden transition-all duration-200">
  ${title ? `
  <div className="px-6 py-4 border-b border-gray-200">
    <h3 className="text-xl font-semibold text-gray-900">${title}</h3>
  </div>
  ` : ''}
  <div className="px-6 py-4">
    <p className="text-gray-700">${content}</p>
  </div>
</div>
    `
  }

  // 生成表单输入框
  generateInput(options = {}) {
    const {
      label = '输入框',
      type = 'text',
      placeholder = '请输入内容',
      icon = null
    } = options

    const iconHTML = icon ? `
    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
      ${icon}
    </span>
    ` : ''

    const plClass = icon ? 'pl-10' : 'pl-3'

    return `
<div>
  <label htmlFor="${label.toLowerCase().replace(/\s+/g, '-')}" className="block text-sm font-medium text-gray-700 mb-1">
    ${label}
  </label>
  <div className="relative">
    ${iconHTML}
    <input
      type="${type}"
      id="${label.toLowerCase().replace(/\s+/g, '-')}"
      className="w-full ${plClass} pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
      placeholder="${placeholder}"
      required
    />
  </div>
</div>
    `
  }
}

// 导出技能模块
module.exports = FrontendDesignSkill
module.exports.default = FrontendDesignSkill