# 🧹 text-cleaner

> A fast, lightweight web-based utility tool — paste your text to instantly clean, format, and manipulate it.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://choosealicense.com/licenses/mit/)
[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen?style=flat-square)](https://text-cleaner-six.vercel.app/)

<img width="1919" height="977" alt="Text Cleaner Preview" src="https://via.placeholder.com/1919x977?text=Add+Your+Screenshot+Here" />

---

## ✨ Demo

👉 **[Live Demo](https://text-cleaner-six.vercel.app/)**

Type or paste your text into the editor to see word counts and format changes in real time.

---

## 📦 Installation

Install via npm:

```bash
npm install 3d-book
```

Or with yarn:

```bash
yarn add 3d-book
```

> **Peer dependency:** Make sure you have `three.js` installed in your project.

---

## 🚀 Usage

Simply visit the live demo or run the app locally to start formatting:

1. Paste your raw, unformatted text into the main input area.
2. Click the desired formatting buttons (e.g., *Remove Extra Spaces*, *UPPERCASE*, *Title Case*).
3. Use the one-click copy button to instantly save the cleaned text to your clipboard.

```tsx
import "./index.css";
import { useTextCleaner } from "./hooks/useTextCleaner";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { InputPanel } from "./components/InputPanel";
import { OutputPanel } from "./components/OutputPanel";
import { Toast } from "./components/Toast";

export default function App() {
  const {
    input, setInput,
    output,
    activeOps,
    findText, setFindText,
    replaceText, setReplaceText,
    outputFlash,
    toast,
    inputStats,
    outputStats,
    savedChars,
    toggleOp,
    handleClean,
    handleFindReplace,
    handleClear,
    handleSwap,
    handleCopyOutput,
  } = useTextCleaner();

  return (
    <div className="root">
      <Header />

      <div className="main">
        <InputPanel
          input={input}
          onInputChange={setInput}
          inputStats={inputStats}
          activeOps={activeOps}
          onToggleOp={toggleOp}
          findText={findText}
          onFindChange={setFindText}
          replaceText={replaceText}
          onReplaceChange={setReplaceText}
          onFindReplace={handleFindReplace}
          onClean={handleClean}
          onClear={handleClear}
          onSwap={handleSwap}
        />

        <OutputPanel
          output={output}
          outputStats={outputStats}
          savedChars={savedChars}
          outputFlash={outputFlash}
          onCopy={handleCopyOutput}
        />
      </div>

      <Toast message={toast.msg} visible={toast.visible} />
      <Footer />
    </div>
  );
}
```

---

## 🛠️ Props

| Feature         | Required | Description                                                    |
|-----------------|----------|----------------------------------------------------------------|
| `Space Removal` | No       | Trim trailing/leading spaces and reduce multiple spaces into one |
| `Format Strip`  | No       | Clear out unwanted HTML tags, rich-text formatting, and lines  |
| `Case Convert`  | No       | Instantly change text to UPPERCASE, lowercase, or Title Case   |
| `Analytics`     | No       | Get real-time word, character, and line counts as you type     |

---

## 📁 Project Structure

```
text
text-cleaner/
├── public/             # Static assets and icons
├── src/                # Source code (Components, Pages, Styles)
├── package.json
└── README.md
```

---

## 🧑‍💻 Development

Clone the repository and install dependencies:

```bash
git clone https://github.com/NipunKushwaha-web/Text-Cleaner.git
cd text-cleaner
npm install
```

Run the example app locally:

```bash
cd example
npm install
npm start
```

---

## 🤝 Contributing

Contributions are welcome! If you'd like to propose a major change, please open an issue first to discuss your idea.

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/my-feature`
3. Commit your changes: `git commit -m 'Add my feature'`
4. Push to the branch: `git push origin feature/my-feature`
5. Open a Pull Request

Please make sure to update tests as appropriate.

---

## 🏷️ Topics

`react` · `typescript` · `component` 

---

## 📄 License

[MIT](https://choosealicense.com/licenses/mit/) © [Nipun](https://github.com/NipunKushwaha-web)
