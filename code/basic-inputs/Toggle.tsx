import * as React from "react";
import * as System from "office-ui-fabric-react";
import { ControlType, PropertyControls, addPropertyControls } from "framer";
import { withHOC } from "../utils/withHOC";

const InnerToggle: React.SFC = props => {
  return <System.Toggle {...props} />;
};

export const Toggle = withHOC(InnerToggle);

Toggle.defaultProps = {
  width: 132,
  height: 28
};

addPropertyControls(Toggle, {
  label: { title: "Label", defaultValue: "Toggle", type: ControlType.String },
  onText: { title: "OnText", defaultValue: "On", type: ControlType.String },
  offText: { title: "OffText", defaultValue: "Off", type: ControlType.String },
  checked: { title: "Checked", defaultValue: false, type: ControlType.Boolean },
  defaultChecked: {
    title: "DefaultChecked",
    defaultValue: false,
    type: ControlType.Boolean
  },
  disabled: {
    title: "Disabled",
    defaultValue: false,
    type: ControlType.Boolean
  },
  inlineLabel: {
    title: "InlineLabel",
    defaultValue: false,
    type: ControlType.Boolean
  }
});
