import React, { useEffect } from 'react'
import api from 'api'

export default function Nba(){
  async function getList() {
    const res = await api.loginModule.loginIn()
    console.log(res, 'res')
  }

  useEffect(() => {
    getList()
  }, [])

  return <h1>''</h1>
}