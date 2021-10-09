import { Drag } from 'components/common/drag'
import Text, { textConfig } from 'components/common/text'

export default function TextNav() {
  return (
    <>
      {Object.keys(textConfig).map((item, index) => {
        return <Drag
          key={index}
          componentName="text"
          options={{
            type: index + 1
          }}
        >
          <Text type={index + 1} />
        </Drag>
      })}
    </>
  )
}
