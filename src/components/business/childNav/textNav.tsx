import Text, { textConfig } from 'components/common/text'

export default function TextNav() {
  return (
    <>
      {Object.keys(textConfig).map((item, index) => {
        return <Text key={index} type={index + 1} />
      })}
    </>
  )
}
