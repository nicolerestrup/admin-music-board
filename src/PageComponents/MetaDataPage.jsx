import React from 'react';
import useStyles from '../styles/pageComponents/pageComponents'
import db from '../db/metadata.json'

export default function MetaDataPage() {
  const classes = useStyles()

  return (
    <div className={classes.metaDataPageContainer}>
      <ul className={classes.metaDataPageListContainer}>
        <li>Artists: {db.artists.join(', ')}</li>
        <li>BPM: {db.bpm}</li>
        <li>Key: {db.key}</li>
        <li>Publishers: {db.publishers.join(', ')}</li>
        <li>ISWC: {db.iswc}</li>
        <li>ISRC: {db.isrc}</li>
        <li>Lable: {db.lable}</li>
        <li>Duration: {db.duration}</li>
        <li>Genre: {db.genre}</li>
        <li>Content: {db.content}</li>
      </ul>
      <div className={classes.metaDataPageDataContainer}>
        <div className={classes.metaDataPageData}>
        <ul className={classes.metaDataPageListContainer}>
          <li style={{fontWeight: 'bold', fontSize: 'large'}}>Writers</li>
          {db.writers.map(writer => <li>{ writer }</li>)}
        </ul>
        <ul className={classes.metaDataPageListContainer}>
          <li style={{fontWeight: 'bold', fontSize: 'large'}}>IPI</li>
          {db.ipi.map(oneIpi => <li>{ oneIpi }</li>)}
        </ul>
        </div>
        <div className={classes.metaDataPageData}>
        <ul className={classes.metaDataPageListContainer}>
          <li style={{fontWeight: 'bold', fontSize: 'large'}}>Producers</li>
          {db.producers.map(producer => <li>{ producer }</li>)}
        </ul>
        <ul className={classes.metaDataPageListContainer}>
          <li style={{fontWeight: 'bold', fontSize: 'large'}}>Vocal Producers</li>
          {db.vocalProducers.map(vocalProducer => <li>{ vocalProducer }</li>)}
        </ul>
        <ul className={classes.metaDataPageListContainer}>
          <li style={{fontWeight: 'bold', fontSize: 'large'}}>Recording Engineers</li>
          {db.recordingEngineers.map(recordingEngineer => <li>{ recordingEngineer }</li>)}
        </ul>
        <ul className={classes.metaDataPageListContainer}>
          <li style={{fontWeight: 'bold', fontSize: 'large'}}>Mix Engineers</li>
          {db.mixEngineers.map(mixEngineer => <li>{ mixEngineer }</li>)}
        </ul>
        <ul className={classes.metaDataPageListContainer}>
          <li style={{fontWeight: 'bold', fontSize: 'large'}}>Mastering Engineers</li>
          {db.masteringEngineers.map(masteringEngineer => <li>{ masteringEngineer }</li>)}
        </ul>
        <ul className={classes.metaDataPageListContainer}>
          <li style={{fontWeight: 'bold', fontSize: 'large'}}>Assistant Engineers</li>
          {db.assistantEngineers.map(assistantEngineer => <li>{ assistantEngineer }</li>)}
        </ul>
        </div>
      </div>
    </div>
  )
}
