import React from 'react';
import { Layout, Menu } from 'antd';
import {
  UnorderedListOutlined,
  BankOutlined,
  UserOutlined,
  CarOutlined,
  ReadOutlined,
  ScheduleOutlined,
  SettingOutlined
} from '@ant-design/icons'
import './Header.css';
// import Tables from './Tables';

const Header = () => {
  return (
    <>
      <div className="header" >
      </div>
      <div className="logo">
        Nadiasina
        <div className="logonico"><UserOutlined /></div>
      </div>
      <div className="menu">
        <h1 className="h1">E-Voyage</h1>
        <div className="menubutton"><UnorderedListOutlined /></div>
        <h2 className="h2">VEHICULE</h2>
        <div className="voiture"><CarOutlined /></div>

        <h3 className="h3">RESERVATION</h3>
        <div className="reservation"><ScheduleOutlined /></div>

        <h4 className="h4">ITINERAIRE</h4>
        <div className="itineraire"><BankOutlined /></div>

        <h5 className="h5">COLIS</h5>
        <div className="colis"><ReadOutlined /></div>
        <h6 className="h6">PARAMETRES</h6>
        <div className="setting"><SettingOutlined /></div>
      </div>
      <div className="nav">
        <h1 className="recherche"></h1>
        <h2 className="rechercher">recherche</h2>
        <input className="input"></input>

        {/* <div className="tables"><Tables /></div> */}


      </div>
    </>
  )
}

export default Header;


