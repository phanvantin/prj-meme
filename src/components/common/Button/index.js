import './button.css'
import cls from 'classnames'
import Loading from '../IconLoading'

function Button({ 
  children, 
  variant, 
  isSizeLarge, 
  isLoading, 
  className, 
  as = 'button',
  iconPos = 'left',
  ...restProps
}) {
  
  const finalClass = cls(className, 'btn', {
   "btn-default": variant === 'default',
   "btn-category": variant === 'category',
   "btn-primary": variant === 'primary',
   "btn-size-large": isSizeLarge // Ép kiểu về boolean
  })

  const jsxContent = (
    <>
      { isLoading && iconPos === 'left' && <Loading /> }
      {children}
      { isLoading && iconPos === 'right' && <Loading /> }
    </>
  )

  if (as === 'a') {
    return (
      <a {...restProps} className={finalClass}>{ jsxContent }</a>
    )
  }

  return (
    <button {...restProps} className={finalClass}>{ jsxContent }</button>
  )
}

// const test = 20 && 30

// btn btn-default -> variant === 'default'
// btn btn-category -> variant === 'category'
// btn btn-primary -> variant === 'primary'

// btn-size-large


// Falsy: '', 0, false, null, undefined, NaN
// Truthy: Ngoài các giá trị Falsy

export default Button