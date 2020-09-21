import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import logo from './logo.svg';
import './App.css';

import Home from "./components/Home";
import HelloWorld from "./components/HelloWorld";
import JSX from "./components/JSX"
import ReactComponentClass from "./components/ReactComponentClass";
import CommentComponent from "./components/CommentComponent";
import StateAndLifecycleComponent from "./components/StateAndLifecycleComponent";
import EventComponent from "./components/EventComponent";
import ConditionalRenderingComponent from "./components/ConditionalRenderingComponent";
import ListAndKeyComponent from "./components/ListAndKeyComponent";
import FormComponent from "./components/FormComponent";
import LiftingStateComponent from "./components/LiftingStateComponent";
import CompositionVsInheritanceComponent from "./components/CompositionVsInheritanceComponent";

interface IMenu {
  path: string
  name: string
  component: React.ComponentType
}

function App() {
  const menus: Array<IMenu> = [
    {path: '/', name: 'Home', component: Home},
    {path: '/hello-world', name: 'Hello World', component: HelloWorld},
    {path: '/jsx', name: 'JSX 소개', component: JSX},
    {path: '/react-component-class', name: 'Component와 Props', component: ReactComponentClass},
    {path: '/comment', name: 'Comment 분리하기', component: CommentComponent},
    {path: '/state-and-lifecycle', name: 'State와 생명주기', component: StateAndLifecycleComponent},
    {path: '/event', name: '이벤트 처리하기', component: EventComponent},
    {path: '/conditional-rendering', name: '조건부 렌더링', component: ConditionalRenderingComponent},
    {path: '/list-and-key', name: '라스트와 key', component: ListAndKeyComponent},
    {path: '/form', name: '폼', component: FormComponent},
    {path: '/lifting-state', name: 'State 끌어올리기', component: LiftingStateComponent},
    {path: '/composition-vs-inheritance', name: '합성 vs 상속', component: CompositionVsInheritanceComponent},
  ]

  return (
    <Router>
      <div>
        <nav className="App-header">
          <img src={logo} alt="logo" className="App-logo"/>
          <ul>
            {
              menus.map(menu => (
                <li key={menu.name}>
                  <Link to={menu.path} className="Ap p-link">{menu.name}</Link>
                </li>
              ))
            }
          </ul>
        </nav>

        <Switch>
          {
            menus.map(menu => (
              <Route exact path={menu.path} component={menu.component} key={menu.name}/>
            ))
          }
        </Switch>
      </div>
    </Router>
  );
}

export default App;
