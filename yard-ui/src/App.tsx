import { useState } from 'react'
import './App.css'
import { Button, ConfigProvider, Space, Input, ColorPicker, Divider } from 'antd';


function App() {
  const [primary, setPrimary] = useState('#1677ff');

  return (
    <>
      <ColorPicker showText value={primary} onChange={(color) => setPrimary(color.toHexString())} />
      <Divider />
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: primary,
          },
        }}
      >
        <Space>
          <Input placeholder="Please Input" />
          <Button type="primary">Submit</Button>
        </Space>
      </ConfigProvider>
    </>
  )
}

export default App
