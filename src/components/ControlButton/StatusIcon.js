import PowerIcon from "../../assets/icons/status/PowerIcon";
import WifiIcon from "../../assets/icons/status/WifiIcon";
import RefreshIcon from "../../assets/icons/status/RefreshIcon";
import SettingsIcon from "../../assets/icons/status/SettingsIcon";
import TempIcon from "../../assets/icons/status/TempIcon";
import DoorsIcon from "../../assets/icons/status/DoorsIcon";
import TempIconBack from "../../assets/icons/status/TempIconBack";
import SettingsIconBack from "../../assets/icons/status/SettingsIconBack";
import RefreshIconBack from "../../assets/icons/status/RefreshIconBack";
import PowerIconBack from "../../assets/icons/status/PowerIconBack";
import WifiIconBack from "../../assets/icons/status/WifiIconBack";
import DoorsIconBack from "../../assets/icons/status/DoorsIconBack";

const StatusIcon = ({ icon, hoverIcon, color, className }) => {
  const Icon = icon;
  const HoverIcon = hoverIcon;

  return (
    <div className={`status-icon status-icon-${className} flip-card`}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <Icon color={color || undefined} />
        </div>
        <div className="flip-card-back">
          <HoverIcon />
        </div>
      </div>
    </div>
  );
};

export default StatusIcon;

export const TempStatus = ({ color, ...props }) => (
  <StatusIcon
    icon={TempIcon}
    hoverIcon={TempIconBack}
    color={color}
    className="temp"
    {...props}
  />
);

export const SettingsStatus = ({ color, ...props }) => (
  <StatusIcon
    icon={SettingsIcon}
    hoverIcon={SettingsIconBack}
    color={color}
    className="settings"
    {...props}
  />
);

export const RefreshStatus = ({ color, ...props }) => (
  <StatusIcon
    icon={RefreshIcon}
    hoverIcon={RefreshIconBack}
    color={color}
    className="refresh"
    {...props}
  />
);

export const PowerStatus = ({ color, ...props }) => (
  <StatusIcon
    icon={PowerIcon}
    hoverIcon={PowerIconBack}
    color={color}
    className="power"
    {...props}
  />
);

export const ConnectionStatus = ({ color, ...props }) => (
  <StatusIcon
    icon={WifiIcon}
    hoverIcon={WifiIconBack}
    color={color}
    className="wifi"
    {...props}
  />
);

export const DoorsStatus = ({ color, ...props }) => (
  <StatusIcon
    icon={DoorsIcon}
    hoverIcon={DoorsIconBack}
    color={color}
    className="refresh"
    {...props}
  />
);
