import classNames from 'classnames'
import './style.scss'

export enum ButtonSize {
    Large = 'lg',
    Small = 'sm'
  }

export enum ButtonType {
Primary = 'primary',
Default = 'default',
Danger = 'danger',
Link = 'link'
}

interface BaseButtonProps {
    className?: string;
    /**设置 Button 的禁用 */
    disabled?: boolean;
    /**设置 Button 的尺寸 */
    size?: ButtonSize;
    /**设置 Button 的类型 */
    btnType?: ButtonType;
    children: React.ReactNode;
    href?: string;
  }

const Button: React.FC<BaseButtonProps> = (props) => {
    const { 
        btnType,
        className,
        disabled,
        size,
        children,
        href,
        ...restProps
      } = props
// classNames 的用法：1. 返回字符串或对象；2. 返回对象的话，key是class的属性值；value是一个表达式，返回布尔值，用来控制是否添加class
      const classes = classNames('btn', className, {
        [`btn-${btnType}`]: btnType,
        [`btn-${size}`]: size,
        'disabled': (btnType === 'link') && disabled
      })

      if (btnType === 'link' && href ) {
        return (
          <a
            className={classes}
            href={href}
            {...restProps}
          >
            {children}
          </a>
        )
      } else {
        return (
          <button
            className={classes}
            disabled={disabled}
            {...restProps}
          >
            {children}
          </button>
        )
      }
  }


  Button.defaultProps = {
    disabled: false,
    btnType: ButtonType.Default
  }

  export default Button
