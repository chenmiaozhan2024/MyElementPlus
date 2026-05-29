import MyLinkProps from './type'
import classNames from 'classnames'
import  MyIcon  from '@my-element/components/component/MyIcon/MyIcon'
import './style.css'

const MyLink = (props: MyLinkProps) => {
  const { type='primary', underline='hover', disabled=false, href, target='_self', icon, children } = props

  const classes = classNames('my-link', {
    'is-disabled': disabled,
    [`my-link--${underline}`]: underline,
    [`my-link--${type}`]: type,
  })

  return (
    <>
      {icon && <MyIcon icon={icon} />} 
      
      <a
        className={classes}
        href={disabled ? undefined : href} // 禁用时清空 href 更安全
        target={target}
        // target="_blank" 时自动加安全属性
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    </>
  )
}

export default MyLink