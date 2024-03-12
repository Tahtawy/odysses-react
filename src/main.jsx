import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { registerLicense } from "@syncfusion/ej2-base"

registerLicense("ORg4AjUWIQA/Gnt2UVhhQlVFfVtdWHxLflFyVWtTf1d6cFVWESFaRnZdRl1gSXhTfkRjXXtbdXVV")

const scriptTag = document.getElementById('app-script');
const moduleName = scriptTag?.getAttribute('data-module-name') || 'User';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App moduleName={moduleName} />
  </React.StrictMode>,
)
