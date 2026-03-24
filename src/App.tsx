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
