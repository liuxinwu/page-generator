import React from 'react'
import classnames from "classnames";
import Style from "./index.module.scss";
import {
  StateType,
  ActiveComponentType,
  UseComponentsType,
  ActionType,
} from "store/type";
import { connect } from "react-redux";
import { Tabs, Collapse } from "antd";
import { baseConfig } from "config/queryConfig";

const CONFIG_COM = {
  text: React.lazy(() => import("components/business/text-config/index"))
}

const { Panel } = Collapse;
const { TabPane } = Tabs;
const mapState = (state: StateType) => ({
  activeComponent: state.activeComponent,
});
const mapDispatch = (dispatch: any) => ({
  changeUseComponents: (val: ActionType<UseComponentsType>) => dispatch(val),
  replaceActiveComponent: (value: ActiveComponentType) => {
    dispatch({
      type: "REPLACE_ACTIVE_COMPONENTS",
      value,
    });
  },
});

export default connect(
  mapState,
  mapDispatch
)(function QueryConfig({
  activeComponent,
  replaceActiveComponent,
  changeUseComponents,
}: {
  activeComponent: ActiveComponentType;
  replaceActiveComponent: (val: ActiveComponentType) => void;
  changeUseComponents: (val: ActionType<UseComponentsType>) => void;
}) {

  function handleHidden() {
    replaceActiveComponent({ name: "", dom: undefined });
  }

  function callback(key: string) {
    console.log(key);
  }

  function getDefaultValue(atter: string) {
    if (!activeComponent.dom) return 0;
    const dom = activeComponent.dom;
    const { style } = dom;

    switch (atter) {
      case "opacity":
        return +style[atter] || 1;
      case "rotate":
        const transform = style.transform;
        let rotate = transform.match(/rotate\((\d+)deg\)/);
        return parseInt((rotate && rotate[1]) || `0`);
      case "border":
        return {
          style: style["border-style"],
          width: parseInt(style["border-width"]),
          radius: parseInt(style["border-radius"]),
          color: style["border-color"],
        };
      case "box-shadow":
        const boxShadow = style[atter]
        if (!boxShadow) return {}
        const [,rgb = '',other = ''] = boxShadow.match(/(rgb\([\d, ]+\))?(.+)/)
        const [
          hShadow = 0,
          vShadow = 0,
          blur = 0,
          spread = 0,
          type = '',
        ] = other.trim().split(' ')
        console.log({
          hShadow: parseInt(hShadow) || 0,
          vShadow: parseInt(vShadow),
          blur: parseInt(blur),
          spread: parseInt(spread),
          color: rgb,
          type
        }, 'de')
        return {
          hShadow: parseInt(hShadow) || 0,
          vShadow: parseInt(vShadow),
          blur: parseInt(blur),
          spread: parseInt(spread),
          color: rgb,
          type
        };
      case "position-size":
        const { top, right, bottom, left } = style;
        return {
          width: dom.offsetWidth,
          height: dom.offsetHeight,
          top: parseInt(top),
          right: parseInt(right),
          bottom: parseInt(bottom),
          left: parseInt(left),
        };
    }
    return 0;
  }

  function setConfig(name: string, atter: string, value: number | string) {
    if (!activeComponent.name) return;
    let cssText = "";
    switch (atter) {
      case "opacity":
        cssText = `${atter}:${value};`;
        break;
      case "rotate":
        cssText = `transform: rotate(${value}deg);`;
        break;
      case "border":
        cssText = value as string;
        break;
      case "box-shadow":
        cssText = value as string;
        break;
      case "position-size":
        cssText = value as string;
        break;
    }
    let newCssText = (activeComponent.dom!.style.cssText += cssText);
    changeUseComponents({
      type: "EDIT_USE_COMPONENTS",
      value: {
        name,
        css: newCssText,
      },
    });
  }

  function getCurrentConfigCom() {
    const type = activeComponent.name.split('_')[0]
    const Com = CONFIG_COM[type]
    return (Com && <Com />) || null
  }

  return (
    <div
      className={classnames(
        "animate__animated",
        Style.query_config_wrap,
        (activeComponent.name && "animate__fadeInRightBig") ||
          "animate__fadeOutRightBig"
      )}
      onClick={(e) => e.stopPropagation()}
    >
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="配置" key="1">
          <Collapse
            defaultActiveKey={["1"]}
            expandIconPosition={"right"}
            bordered={false}
            accordion
          >
            <Panel header="文本配置" key="1">
              { getCurrentConfigCom() }
            </Panel>
            {baseConfig.map((config, index) => {
              const Com = config.com;
              return (
                <Panel header={config.title} key={index + 2}>
                  {Com && (
                    <Com
                      {...config.options}
                      comName={activeComponent.name}
                      atter={config.atter}
                      onConfigChange={setConfig}
                      defaultValue={getDefaultValue(config.atter) as any}
                    />
                  )}
                </Panel>
              );
            })}
          </Collapse>
        </TabPane>
        <TabPane tab="动画" key="2">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="事件" key="3">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>

      <span className={Style.hidden_btn} onClick={handleHidden}>
        隐藏
      </span>
    </div>
  );
});
