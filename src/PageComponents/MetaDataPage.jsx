import React from 'react';
import useStyles from '../styles/pageComponents/pageComponents'

export default function MetaDataPage() {
  const classes = useStyles()
  return (
    <div className={classes.metaDataPageContainer}>
      <ul className={classes.metaDataPageListContainer}>
        <li>Artists: One or more artists</li>
        <li>BPM: 25</li>
        <li>Key: C</li>
        <li>Publishers: One or more publishers</li>
        <li>ISWC: 45</li>
        <li>ISRC: 145</li>
        <li>Label: TONEFISH</li>
        <li>Duration: 03:22</li>
        <li>Genre: POP</li>
        <li>Content: audio</li>
      </ul>
      <div className={classes.metaDataPageDataContainer}>
        <div className={classes.metaDataPageData}>
        <ul className={classes.metaDataPageListContainer}>
          <li style={{fontWeight: 'bold', fontSize: 'large'}}>Writers</li>
          <li>Anton</li>
          <li>Pelle</li>
          <li>Bosse</li>
        </ul>
        <ul className={classes.metaDataPageListContainer}>
          <li style={{fontWeight: 'bold', fontSize: 'large'}}>IPI</li>
          <li>123</li>
          <li>456</li>
          <li>789</li>
        </ul>
        </div>
        <div className={classes.metaDataPageData}>
        <ul className={classes.metaDataPageListContainer}>
          <li style={{fontWeight: 'bold', fontSize: 'large'}}>Producers</li>
          <li>Anton</li>
          <li>Nicole</li>
        </ul>
        <ul className={classes.metaDataPageListContainer}>
          <li style={{fontWeight: 'bold', fontSize: 'large'}}>Vocal Producer</li>
          <li>Nicole</li>
        </ul>
        <ul className={classes.metaDataPageListContainer}>
          <li style={{fontWeight: 'bold', fontSize: 'large'}}>Recording Engineer</li>
          <li>Doris</li>
          <li>Nisse</li>
        </ul>
        <ul className={classes.metaDataPageListContainer}>
          <li style={{fontWeight: 'bold', fontSize: 'large'}}>Mix Engineer</li>
          <li>Nisse</li>
          <li>Anton</li>
        </ul>
        <ul className={classes.metaDataPageListContainer}>
          <li style={{fontWeight: 'bold', fontSize: 'large'}}>Mastering Engineer</li>
          <li>Doris</li>
        </ul>
        <ul className={classes.metaDataPageListContainer}>
          <li style={{fontWeight: 'bold', fontSize: 'large'}}>Assistant Engineer</li>
          <li>Bosse</li>
          <li>Björn</li>
        </ul>
        </div>
      </div>
    </div>
  )
}
