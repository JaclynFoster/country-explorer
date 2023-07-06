import React from 'react'
import { Space, Spin } from 'antd'
import '../App.css'

const Modal = () => {
  return (
    <div className="loading">
      <Space
        direction="vertical"
        style={{
          width: '100%'
        }}
      >
        <Spin tip="Loading" size="large">
          <div className="content" />
        </Spin>
      </Space>
    </div>
  )
}

export default Modal
