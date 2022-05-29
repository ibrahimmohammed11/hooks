import React, { Component, Fragment } from "react";
// import UseStateHook from "./Components/UseStateHook/index";
import "./App.css";
import Dashboard from "./Components/Expand";
import DashboardV2 from "./Components/ExpandV2";
// import BestFetch from "./Components/CustomHooks/bestUseFetch";
// import AdvancedFetch from "./Components/CustomHooks/advanceduseFetch";
// import Jokes from "./Components/CustomHooks/Jokes";
// import BgColor from "./Components/CustomHooks/useColor";
// import FetchData from "./Components/CustomHooks/smipleuseFetch";
// import BooleanToggle from "./Components/CustomHooks/useBoolean";
// import ArrToObj from "./Components/ArrToObj/ArrToObj";
// import ObjectToArray from "./Components/ArrToObj/ObjectToArray";
// import ObjToArr from "./Components/ArrToObj/ObjToArr";
// import CompleteUseEffect from "./Components/CompleteUseEffect";
// import ContextApi from "./Components/ContextApi/class";
// import CompA from "./Components/ContextApi/class/components/CompA";
// import ContextHooks from "./Components/ContextApi/hooks";
// import UseEffectHook from "./Components/UseEffectHook";
// import UseEffectHook2 from "./Components/UseEffectHook2";
// import UseRef from "./Components/UseRef";
// import PrevStateUseRef from "./Components/UseRef/PrevStateUseRef";
// import CounterContextProvider from "./Context/CounterContext";
// import NameContextProvider from "./Context/NameContext";

export default class App extends Component {
  // initialCount = 0;
  render() {
    return (
      <Fragment>
        {/* <UseStateHook initialCount={this.initialCount} /> */}
        {/* <UseEffectHook /> */}
        {/* <UseEffectHook2 /> */}
        {/* <CompleteUseEffect /> */}
        {/* <CounterContextProvider>
          <ContextApi />
          <NameContextProvider>
            <ContextHooks />
            <CompA />
          </NameContextProvider>
        </CounterContextProvider> */}
        {/* <ArrToObj /> */}
        {/* <ObjToArr /> */}
        {/* <ObjectToArray /> */}
        {/* <UseRef /> */}
        {/* <PrevStateUseRef /> */}
        {/* <BooleanToggle /> */}
        {/* <FetchData /> */}
        {/* <Jokes /> */}
        {/* <BgColor /> */}
        {/* <AdvancedFetch /> */}
        {/* <BestFetch /> */}
        <Dashboard />
        <DashboardV2 />
      </Fragment>
    );
  }
}
