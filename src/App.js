import "./App.css";
import ControlButton from "./components/ControlButton/ControlButton";
import { CBTN_STATUSES, CBTN_TYPES } from "./constants/controlButton";

function App() {
  return (
    <div className="p-20 flex gap-16">
      <ControlButton
        type={CBTN_TYPES.belt}
        status={CBTN_STATUSES.success}
        label="B"
        sublabel="6"
        settings={[-1, 1, 2, 1, -1]}
      />
      <ControlButton
        type={CBTN_TYPES.car}
        status={CBTN_STATUSES.warning}
        label="B"
        sublabel="6"
        settings={[-1, -1, 2, -1, -1]}
      />
      <ControlButton
        type={CBTN_TYPES.car}
        status={CBTN_STATUSES.alert}
        label="C"
        sublabel="6"
        settings={[-1, 3, 2, 3, -1]}
      />
      <ControlButton
        type={CBTN_TYPES.belt}
        label="B"
        sublabel="6"
        settings={[-1, 0, 0, 0, -1]}
      />
    </div>
  );
}

export default App;
