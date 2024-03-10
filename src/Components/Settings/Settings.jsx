import React, { useState, useRef, useEffect } from 'react'
import styles from '../styles/Settings.module.css'
import { InputNumber, Slider, ConfigProvider, ColorPicker } from 'antd'
import { RedoOutlined } from '@ant-design/icons'

const Settings = ({winTally, setwinTally, xColor, oColor, setxColor, setoColor, bodyStyles}) => {

    var bodyStyles = document.body.style;
    bodyStyles.setProperty('--x-color', xColor);
    bodyStyles.setProperty('--o-color', oColor);

    const onChange = (value) => {
        if (isNaN(value)) {
          return;
        }
        setwinTally(value);
    };

    const resetSettings = () => {
        setxColor('#4cc0ff')
        setoColor('#af36d4')
        setwinTally(3)
    }

    return (
        <div className={styles.settingsScreen}>
            <ConfigProvider
            theme={{
                token: {
                    Slider: {
                        handleActiveColor: '#ffffff',
                        trackBg: '#ffffff',
                        dotActiveBorderColor: '#ffffff',
                        trackHoverBg: '#ffffff',
                        handleColor: '#ffffff',
                        handleSizeHover: 8,
                        railBg: '#0f0f0f',
                        railHoverBg: '#0f0f0f',
                        railSize: 5,
                    }
                }
            }}
            >
            <div className={styles.settingsContainer}>
                <h1 className={styles.title}>Settings</h1>
                <div className={styles.settingsComponent}>
                    <h2 className={styles.title}>Number of Rounds</h2>
                    <Slider
                        className={styles.slider}
                        min={1}
                        max={7}
                        onChange={onChange}
                        step={2}
                        value={typeof winTally === 'number' ? winTally : 0}
                        />
                    <InputNumber
                        min={1}
                        max={7}
                        step={2}
                        value={winTally}
                        onChange={onChange}
                    />
                </div>
                <div className={styles.settingsComponent}>
                    <h2 className={styles.xtitle}>X</h2>
                    <ColorPicker defaultValue={xColor} size='large' onChange={(c) => setxColor(c.toHexString())}/>
                    <h2 className={styles.otitle}>O</h2>
                    <ColorPicker defaultValue={oColor} size='large' onChange={(c) => setoColor(c.toHexString())}/>
                </div>
                <div className={styles.btnContainer}>
                    <button className={styles.resetBtn} onClick={resetSettings}><RedoOutlined /></button>
                </div>
            </div>   
            </ConfigProvider>        
        </div>
    )
}

export default Settings;