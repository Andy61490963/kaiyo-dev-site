# Kaiyo Dev Site

這是一個用 React 製作的個人作品集網站，主軸是自我介紹、專案整理、技術筆記與聯絡方式。

這份 README 會用「沒寫過 React 也看得懂」的方式，幫你快速理解這個專案目前怎麼組成、要改哪裡、部署怎麼運作。

## 這個專案在做什麼

目前網站的定位是：

- 個人形象網站
- 後端工程師作品集
- 可持續更新的履歷型網站

首頁現在不只是放一段自介，而是包含：

- Hero 主視覺區
- 個人定位與照片
- 我擅長解決的問題
- 代表專案
- 一致的卡片式 layout 與互動動畫

## 技術組成

- `React`
  用元件拆網站畫面，方便重複使用與維護

- `Vite`
  開發與打包工具，啟動速度很快

- `React Router`
  處理頁面切換

- `Tailwind CSS`
  用 utility class 方式寫樣式

- `Framer Motion`
  處理進場動畫、hover 動畫、浮動效果

## 如果你沒寫過 React，可以先這樣理解

- `index.html`
  最外層 HTML 殼，React 會掛在這裡

- `src/main.jsx`
  專案入口，負責把整個 React App 掛上頁面

- `src/App.jsx`
  全站主框架，負責放導覽列、頁尾、背景效果、頁面路由

- `src/pages/`
  每一頁的內容

- `src/components/`
  重複使用的 UI 元件

- `src/data/`
  頁面會讀取的文字資料與專案資料

- `src/index.css`
  全站共用樣式，例如背景、卡片、按鈕、字體、區塊風格

## 目前網站路由

- `/`
  首頁

- `/about`
  關於我

- `/projects`
  專案頁

- `/notes`
  筆記頁

- `/contact`
  聯絡頁

注意：

- 目前已經沒有 `milestones` 頁面
- 路由使用 `HashRouter`，這是為了讓 GitHub Pages 比較穩定

## 專案架構

### 1. 入口與主框架

- `src/main.jsx`
  專案入口，掛載 React App

- `src/App.jsx`
  全站骨架，負責：
  - `Navbar`
  - `Footer`
  - 背景光影動畫
  - 各頁路由切換
  - 切頁自動回到最上方

### 2. 頁面層

- `src/pages/Home.jsx`
  首頁主視覺區。包含：
  - Andy 名稱與職能定位
  - 個人照片
  - 重點摘要
  - 能力亮點
  - 精選專案

- `src/pages/About.jsx`
  關於我，整理背景、工作方式、技術能力

- `src/pages/Projects.jsx`
  專案列表頁，會讀取 `src/data/projects.js`

- `src/pages/Articles.jsx`
  筆記頁，會讀取 `src/data/articles.js`

- `src/pages/Contact.jsx`
  聯絡頁，會讀取 `src/data/contact.js`

### 3. 共用元件

- `src/components/Navbar.jsx`
  上方導覽列，包含桌機版與手機版選單

- `src/components/Footer.jsx`
  下方頁尾，放 GitHub 與專案連結

- `src/components/ProjectCard.jsx`
  專案卡片元件

- `src/components/SectionContainer.jsx`
  各頁共用的區塊標題容器

### 4. 資料層

這個專案有一部分內容是資料驅動，也就是頁面會去讀 `src/data/` 裡的資料。

- `src/data/contact.js`
  個人資訊、角色定位、聯絡方式

- `src/data/projects.js`
  專案標題、描述、技術棧、連結

- `src/data/articles.js`
  筆記區塊內容

這樣做的好處是：

- 改資料不一定要改 JSX 結構
- 後續擴充內容比較快
- 比較容易維護

## 如果你要改內容，最常改哪裡

- 改首頁文案：
  `src/pages/Home.jsx`

- 改個人資訊：
  `src/data/contact.js`

- 加新專案：
  `src/data/projects.js`

- 改導覽列文字：
  `src/components/Navbar.jsx`

- 改整體視覺風格：
  `src/index.css`

- 改首頁照片：
  `public/5B609B4A-6DFD-4FE8-8C64-0F5BC0B996F1.jpg`

## 目前的 layout 設計重點

這版網站不是單純把資訊排上去，而是有一套共用視覺語言：

- 淺色高級感背景
- 玻璃感卡片 (`glass-card`)
- 外層主容器 (`shell-panel`)
- 區塊標籤 (`section-kicker`)
- Hero 區塊識別標籤 (`hero-ribbon`)
- 卡片 hover 與進場動畫
- navbar 浮動縮放效果

如果你之後想繼續調整設計，最優先看：

- `src/index.css`
- `src/pages/Home.jsx`
- `src/components/Navbar.jsx`

## 本地開發

先安裝 Node.js，然後在專案資料夾執行：

```bash
npm install
npm run dev
```

打包正式版本：

```bash
npm run build
```

## GitHub Pages 部署

這個專案已經有 GitHub Pages workflow：

- `.github/workflows/deploy-pages.yml`

部署方式：

1. 到 GitHub repo 的 `Settings`
2. 點 `Pages`
3. 把 `Source` 設成 `GitHub Actions`
4. push 到 `main`

之後每次 push 到 `main`，GitHub Actions 都會自動重新部署。

網站網址：

- [https://andy61490963.github.io/kaiyo-dev-site/](https://andy61490963.github.io/kaiyo-dev-site/)

## 後續可以怎麼擴充

- 幫每個專案加截圖與成果說明
- 把專案卡片改成「問題 / 解法 / 成果」格式
- 增加專案細節頁
- 新增更完整的技術文章頁
- 補 LinkedIn、104、履歷下載連結