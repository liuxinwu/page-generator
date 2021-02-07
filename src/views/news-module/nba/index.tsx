import React, { useEffect } from 'react'
import api from 'api'
import Cache from 'cache'
const cache = new Cache()

export default function Nba(){
  async function getList() {
    const res = await api.loginModule.loginIn()
    // 存缓存
    res.config && cache.set(res.config.url!, res.data)
    console.log(res, 'nba')
  }

  useEffect(() => {
    getList()
  }, [])

  return <h1>nba</h1>
}