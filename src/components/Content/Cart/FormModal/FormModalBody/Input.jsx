import React from 'react'

export default ({ input, meta, ...props }) => <>
    <input {...input} {...props}
        style={(meta.touched && meta.error) ? { border: '1px solid red' } : {}} />
    {(meta.touched && meta.error) && <small style={{ color: 'red' }}>{meta.error}</small>}
</>