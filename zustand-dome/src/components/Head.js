import React from 'react'
import useUserStore from '../store'

export default function Head() {
    const userInfo = useUserStore((state) =>  state.userInfo )
  return (
    <div>{Object.keys(userInfo)}</div>
  )
}
