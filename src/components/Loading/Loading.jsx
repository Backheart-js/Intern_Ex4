import clsx from 'clsx'
import React from 'react'
import { RotatingLines } from 'react-loader-spinner'
import styles from './Loading.module.scss'

function Loading() {
  return (
    <div className={clsx(styles.loadingBg, 'inset-0')}>
        <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
        />
    </div>
  )
}

export default Loading