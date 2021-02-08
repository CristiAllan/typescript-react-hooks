import React, { forwardRef, useImperativeHandle } from 'react'

interface FormProps {
  initialData?: string
}

export interface FormRef {
  submit(): void
}

const Form: React.RefForwardingComponent<FormRef, FormProps> = (props, ref) => {
  const submit = () => {
    alert('Submit')
  }

  useImperativeHandle(ref, () => ({
    submit,
  }))

  return (
    <div>
      <form action="">
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
      </form>
    </div>
  )
}

export default forwardRef(Form)
