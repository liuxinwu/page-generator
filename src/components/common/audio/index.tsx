
import classnames from 'classnames'
import Style from './index.module.css'

export function Audio({ children, ...props }: {
  children?: React.FC
}) {
  return <>
    <audio
      src="http://st.chaoyindj.com//zwdqdj/Mp3_%E5%BC%A0%E6%9D%B0%20%20%E5%90%AC(Mcyy%20ElectroHouse%20Rmx%202016).mp4"
      className={classnames(Style['hl-audio'])} 
      controls
      {...props}
    >
    </audio>
    { children }
  </>
}