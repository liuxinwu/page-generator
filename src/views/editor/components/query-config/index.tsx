import classnames from "classnames";
import Style from "./index.module.scss";
import { StateType, ActiveComponentType, UseComponentsType, ActionType, } from "store/type";
import { connect } from 'react-redux'
import { Tabs, Collapse } from 'antd'
import { baseConfig } from 'config/queryConfig'

const { Panel } = Collapse;
const { TabPane } = Tabs;
const mapState = (state: StateType) => ({
  activeComponent: state.activeComponent,
});
const mapDispatch = (dispatch: any) => ({
  changeUseComponents: (val: ActionType<UseComponentsType>) => dispatch(val),
  replaceActiveComponent: (value: ActiveComponentType) => {
    dispatch({
      type: 'REPLACE_ACTIVE_COMPONENTS',
      value
    })
  }
});

export default connect(mapState, mapDispatch)(function QueryConfig({
  activeComponent,
  replaceActiveComponent,
  changeUseComponents
}: {
  activeComponent: ActiveComponentType
  replaceActiveComponent: (val: ActiveComponentType) => void
  changeUseComponents: (val: ActionType<UseComponentsType>) => void;
}) {
  console.log(activeComponent, 'activeComponent.name')

  function handleHidden() {
    replaceActiveComponent({ name: '', dom: undefined })
  }

  function callback(key: string) {
    console.log(key);
  }

  function setConfig(name: string, atter: string  ,value: number | string) {
    if (!activeComponent.name) return
    let cssText = ''
    switch(atter) {
      case 'opacity':
        cssText = `${atter}:${value};`
        break
      case 'rotate':
        cssText = `transform: rotate(${value}deg);`
        break
      case 'border': 
        cssText = value as string
        break
    }
    let newCssText = activeComponent.dom!.style.cssText += cssText
    changeUseComponents({
      type: "EDIT_USE_COMPONENTS",
      value: {
        name,
        css: newCssText,
      },
    });
  }

  return (
    <div
      className={classnames(
        "animate__animated",
        Style.query_config_wrap,
        (activeComponent.name && 'animate__fadeInRightBig') ||
        'animate__fadeOutRightBig'
      )}
      onClick={(e) => e.stopPropagation()}
    >
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="配置" key="1">
        <Collapse
          defaultActiveKey={['1']}
          expandIconPosition={'right'}
          bordered={false}
          accordion
        >
          <Panel header="文本配置" key="1"  >
            <div>1</div>
          </Panel>
          {
            baseConfig.map((config, index) => {
              const Com = config.com
              return <Panel header={config.title} key={index + 2} >
              { Com && <Com {...config.options} comName={activeComponent.name} atter={config.atter} onConfigChange={setConfig}/> }
            </Panel>
            })
          }
        </Collapse>
        </TabPane>
        <TabPane tab="动画" key="2">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="事件" key="3">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>

      <span className={Style.hidden_btn} onClick={handleHidden}>隐藏</span>
    </div>
  )
})