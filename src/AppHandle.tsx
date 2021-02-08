import React, { useRef, useImperativeHandle } from 'react';
import Form, { FormRef } from './Form'

const AppHandle = () => {
  const formRef = useRef<FormRef>(null)

  function handleSubmit() {
    formRef.current?.submit()
  }

  return (
    <div className="App">
      <Form ref={formRef} />
    </div>
  );
}

export default AppHandle;
