import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography'

export default function NewSongPage() {
  const [value, setValue] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    console.log(value)
    setValue('');
  }
  return (
    <Typography variant="body2" component="div">
      <h1>Add new song</h1>
      <label>Name: </label>
      <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
    </Typography>
  )
}
