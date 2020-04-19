import React from 'react'
import Typography from '@material-ui/core/Typography'
import PageContainer from './PageContainer'
import db from '../db/db.json'

export default function ProjectPage() {
  return (
    <Typography variant="body1" component="div">
      <PageContainer db={db} />
    </Typography>
  )
}
