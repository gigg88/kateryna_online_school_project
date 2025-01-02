import React from "react";
import ReactDom from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<layout/>}>

        </Route>
    )
)