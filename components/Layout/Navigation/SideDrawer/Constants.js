import React from "react";
import { blue } from '@material-ui/core/colors';

//Icons import
import DashboardIcon from '@material-ui/icons/Dashboard';
import GroupIcon from '@material-ui/icons/Group';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import SettingsIcon from '@material-ui/icons/Settings';

// list of icons https://material-ui.com/components/material-icons/


export const itensMenu = [
  {
    id: 1,
    nome: 'Dashboard',
    url: '/',
    iconPrimary: <DashboardIcon/>,
    iconSecondary: <DashboardIcon style={{color: blue[500]}}/>
  },
  {
    id: 2,
    nome: 'Restaurantes',
    url: '/restaurantes',
    iconPrimary: <RestaurantMenuIcon/>,
    iconSecondary: <RestaurantMenuIcon style={{color: blue[500]}}/>
  },
  {
    id: 3,
    nome: 'Usuarios',
    url: '/usuarios',
    iconPrimary: <GroupIcon/>,
    iconSecondary: <GroupIcon style={{color: blue[500]}}/>
  }
];

export const itensSubMenu = [
  {
    id: 11,
    nome: 'Configurações',
    url: '/config',
    iconPrimary: <SettingsIcon/>,
    iconSecondary: <SettingsIcon style={{color: blue[500]}}/>
  },
]