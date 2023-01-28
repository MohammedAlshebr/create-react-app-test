import React, {useState} from 'react';

import './App.css';
import ObjectsList from "./ObjectsList/ObjectsList";
import LoginForm from "./LoginForm/LoginForm";

type TAB = {
  id: number
  title: string
}

const tabs: TAB[] = [{id: 1, title: "Seite 1"}, {id: 2, title: "Seite 2"}]

const App = () => {

  const [activeTab, setActiveTab] = useState(tabs[0].id)


  return (
    <div className="App">
      {tabs.map(tab => {
        return <a key={tab.id} href={"#" + tab.title} className={"tab"} onClick={() => {
          setActiveTab(tab.id)
        }}>{tab.title}</a>
      })}

      {activeTab === 1 && <ObjectsList/>}
      {activeTab === 2 && <LoginForm/>}

    </div>
  );
}

export default App;
