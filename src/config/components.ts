/**
 * 导出所有的组建模块
 */

function _import(name: string) {
  return () => import(`components/common/${name}`)
}

const COMPONENTS_TYPE = ["Block", "H", "P", "Ul", "Button", "Img", "Form", "ChartWarp", "Video", "Audio"]
const components = {}
COMPONENTS_TYPE.forEach(component => {
  if (component === 'ChartWarp') {
    components[component] = _import('chart')
    return
  }
  components[component] = _import(component.toLocaleLowerCase())
})

export default components