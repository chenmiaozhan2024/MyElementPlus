import { MyInputProps,InputInstance } from "./type";
import classNames from "classnames";
import { useEffect, useMemo, useRef, useState, forwardRef, useImperativeHandle } from "react";
import MyIcon from '@my-element/components/component/MyIcon/MyIcon'
import './style.css'

const MyInput = forwardRef<InputInstance, MyInputProps>((props, ref) => {
  const {
    type = 'text', size, disabled, clearable, showPassword,
    preped, append, prefix, suffix, modelValue, readonly,
    autocomplete = 'off', placeholder, autofocus, form
  } = props

  const [isFocus, setIsFocus] = useState(false)
  const [innerValue, setInnerValue] = useState<string>(modelValue as string)
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    setInnerValue(modelValue as string)
  }, [modelValue])

  useImperativeHandle(ref, () => ({
    focus: () => {
      const dom = type !== 'textarea' ? inputRef.current : textareaRef.current
      dom?.focus()
    },
    blur: () => {
      const dom = type !== 'textarea' ? inputRef.current : textareaRef.current
      dom?.blur()
    },
    clear: handleClear,
    select: () => {
      const dom = type !== 'textarea' ? inputRef.current : textareaRef.current
      dom?.select()
    },
    get input() { return inputRef.current },
    get textarea() { return textareaRef.current },
  }), [type])

  const showClear = useMemo(() => {
    return clearable && !disabled && !!innerValue && isFocus
  }, [clearable, disabled, innerValue, isFocus])

  const showPasswordArea = useMemo(() => {
    return showPassword && !disabled && !!innerValue
  }, [showPassword, disabled, innerValue])

  const wrapperClasses = classNames('my-input__wrapper', {
    'is-focus': isFocus,
  })

  const containerClasses = classNames('my-input', {
    [`my-input--${size}`]: size,
    'is-disabled': disabled,
    'is-prepend': preped,
    'is-append': append,
    'is-prefix': prefix,
    'is-suffix': suffix,
  })

  const textareaClasses = classNames('my-textarea__inner', {
    'is-disabled': disabled,
  })

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setIsFocus(true)
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setIsFocus(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInnerValue(e.target.value)
    props.onUpdateModelValue?.(e.target.value)
  }

  const handleClear = () => {
    setInnerValue('')
    props.onUpdateModelValue?.('')
  }

  const togglePasswordVisible = () => {
    setPasswordVisible(!passwordVisible)
  }

  if (type !== 'textarea') {
    return (
      <div className={containerClasses}>
        {preped && <div className="my-input__prepend">{preped}</div>}
        <div className={wrapperClasses}>
          {prefix && <span className="my-input__prefix">{prefix}</span>}
          <input
            ref={inputRef}
            type={showPassword ? (passwordVisible ? 'text' : 'password') : type}
            disabled={disabled}
            className="my-input__inner"
            value={innerValue}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            autoComplete={autocomplete}
            placeholder={placeholder}
            autoFocus={autofocus}
            form={form}
            readOnly={readonly}
          />
          {(suffix || showClear || showPasswordArea) && (
            <span className="my-input__suffix">
              {showClear && (
                <span
                  className="my-input__clear"
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={handleClear}
                >
                  <MyIcon icon="circle-close" />
                </span>
              )}
              {showPasswordArea && (
                <span
                  className="my-input__password"
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={togglePasswordVisible}
                >
                  <MyIcon icon={passwordVisible ? 'View' : 'Hide'} />
                </span>
              )}
              {suffix}
            </span>
          )}
        </div>
        {append && <div className="my-input__append">{append}</div>}
      </div>
    )
  } else {
    return (
      <div className={classNames('my-input', 'my-input--textarea', {
        'is-disabled': disabled,
      })}>
        <textarea
          ref={textareaRef}
          disabled={disabled}
          className={textareaClasses}
          value={innerValue}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          autoComplete={autocomplete}
          placeholder={placeholder}
          autoFocus={autofocus}
          form={form}
          readOnly={readonly}
        />
      </div>
    )
  }
})

export default MyInput
