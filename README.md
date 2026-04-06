# Kaiyo Dev Site

這是一個使用 React 製作的個人作品集網站，目的是放自我介紹、專案作品、想法筆記，以及後續想持續整理的技術內容。

如果你還沒寫過 React，可以先把這個專案理解成：

- `index.html`：網站最外層的 HTML 殼
- `src/main.jsx`：React 進入點，負責把整個網站掛到畫面上
- `src/App.jsx`：網站主架構，負責放導覽列、頁尾、路由切換
- `src/pages/`：每一頁的內容
- `src/components/`：可以重複使用的小零件
- `src/data/`：頁面會用到的文字資料、專案資料

## 技術組成

- React：用元件方式組網站
- Vite：開發與打包工具
- React Router：處理頁面切換
- Tailwind CSS：快速寫樣式
- Framer Motion：做簡單動畫效果

## 專案架構

### 1. 入口檔案

- `src/main.jsx`
  作用：把 React App 掛到 `#root`
  這裡用的是 `HashRouter`，比較適合部署到 GitHub Pages

### 2. 主架構

- `src/App.jsx`
  作用：網站主框架
  內容包含：
  - `Navbar`
  - `Footer`
  - 各頁路由設定

目前路由如下：

- `/`：首頁
- `/about`：關於我
- `/projects`：作品集
- `/notes`：筆記與想法
- `/milestones`：目前方向與里程碑
- `/contact`：聯絡方式

### 3. 頁面資料夾

- `src/pages/Home.jsx`
  首頁，放網站主標題、個人定位、精選內容

- `src/pages/About.jsx`
  關於我，放工作風格、優勢、技能方向

- `src/pages/Projects.jsx`
  作品頁，會把 `src/data/projects.js` 的內容渲染成卡片

- `src/pages/Articles.jsx`
  筆記頁，會讀 `src/data/articles.js`

- `src/pages/Certifications.jsx`
  目前是「里程碑」頁，不是傳統證照頁，會讀 `src/data/certifications.js`

- `src/pages/Contact.jsx`
  聯絡頁，會讀 `src/data/contact.js`

### 4. 共用元件

- `src/components/Navbar.jsx`
  上方導覽列

- `src/components/Footer.jsx`
  下方頁尾

- `src/components/ProjectCard.jsx`
  專案卡片

- `src/components/SectionContainer.jsx`
  每個區塊共用的標題樣式容器

### 5. 資料層

這個專案把很多文字獨立放在 `src/data/`，這樣你之後改內容時，不一定要動頁面結構：

- `src/data/contact.js`
  個人資訊、定位、簡介

- `src/data/projects.js`
  專案標題、描述、技術、GitHub 連結

- `src/data/articles.js`
  筆記與想法卡片內容

- `src/data/certifications.js`
  里程碑與成長方向內容

## 如果你想改內容，最常改哪裡？

- 要改自我介紹：改 `src/data/contact.js`
- 要加專案：改 `src/data/projects.js`
- 要改首頁文案：改 `src/pages/Home.jsx`
- 要改導覽列文字：改 `src/components/Navbar.jsx`
- 要改整體樣式：改 `src/index.css`

## 本地開發指令

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

這個專案已經包含 GitHub Pages workflow：

- `.github/workflows/deploy-pages.yml`

啟用方式：

1. 到 GitHub repo 的 `Settings`
2. 打開 `Pages`
3. 把 `Source` 設成 `GitHub Actions`
4. push 到 `main`

之後每次 push 到 `main`，GitHub Actions 都會自動重新部署。

## 下一步建議

- 把目前的占位自介改成更像你自己的經歷
- 幫每個專案補上截圖與成果說明
- 如果你有履歷、Email、LinkedIn，也可以補進聯絡頁
- 後續可以再加「專案細節頁」或「部落格頁」
