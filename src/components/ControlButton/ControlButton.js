import { useState } from "react";
import BeltIcon from "../../assets/icons/BeltIcon";
import CarIcon from "../../assets/icons/CarIcon";
import RemoveIcon from "../../assets/icons/RemoveIcon";
import LikeIcon from "../../assets/icons/LikeIcon";
import WarningIcon from "../../assets/icons/WarningIcon";
import { CBTN_STATUSES, CBTN_STATUSES_ARRAY, CBTN_TYPES } from "../../constants/controlButton";
import BtnPanel from "../../assets/icons/BtnPanel";
import {
  DoorsStatus,
  PowerStatus,
  RefreshStatus,
  SettingsStatus,
  TempStatus,
  ConnectionStatus,
} from "./StatusIcon";
import DatahoistIcon from "../../assets/icons/DatahoistIcon";
import "./controlButton.css";

const ControlButton = ({
  type = CBTN_TYPES.belt,
  status = CBTN_STATUSES.default,
  label,
  sublabel,
  settings = []
}) => {
  const [hovered, setHovered] = useState();

  const handleLink = () => {
    window.open("https://www.datahoist.com/", "_blank");
  };

  const getColor = (id) => {
    return id >= 0 ? CBTN_STATUSES[CBTN_STATUSES_ARRAY[id]]?.hover : undefined
  }

  return (
    <div
      className={`w-[204px] h-[204px] control-button control-button-${status.color} hover:z-40
            rounded-full bg-${status.color}-main text-white hover:scale-150 transform transition duration-500
            flex justify-center items-center relative`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={`control-button-internal w-[92px] h-[92px] rounded-full bg-white flex justify-center items-center`}
      >
        {type === CBTN_TYPES.belt ? (
          <BeltIcon color={status.hex} />
        ) : (
          <CarIcon color={status.hex} />
        )}
        <div className="action-icon">
          {status === CBTN_STATUSES.default && (
            <RemoveIcon color={status.hex} />
          )}
          {status === CBTN_STATUSES.success && <LikeIcon />}
          {status === CBTN_STATUSES.warning && <WarningIcon />}
          {status === CBTN_STATUSES.alert && <RemoveIcon />}
        </div>
      </div>
      {label && (
        <div className="label">
          {type.toUpperCase()} {label}
        </div>
      )}
      {sublabel && (
        <div className={`sublabel sublabel-${status.color}`}>
          SOTL {sublabel}
        </div>
      )}
      {hovered && (
        <div className="datahoist cursor-pointer" onClick={handleLink}>
          <DatahoistIcon />
        </div>
      )}
      <div className="status-bar">
        <BtnPanel />
        <TempStatus color={getColor(settings[0])} />
        <SettingsStatus color={getColor(settings[1])} />
        <PowerStatus color={getColor(settings[2])} />
        {type === CBTN_TYPES.belt ? (
          <RefreshStatus color={getColor(settings[3])} />
        ) : (
          <DoorsStatus color={getColor(settings[3])} />
        )}
        <ConnectionStatus color={getColor(settings[4])} />
      </div>
    </div>
  );
};

export default ControlButton;
