import './App.css';
import Tabs from './components/Tabs';
function App() {
  const tabsArray = [
    {tabnumber : "Tab 1", displaymessage : "Tab 1 content is showing here"},
    {tabnumber : "Tab 2", displaymessage : "Tab 2 content is showing here"},
    {tabnumber : "Tab 3", displaymessage : "Tab 3 content is showing here"}
  ]
  return (
    <div className="App">
      <Tabs tabsArray={tabsArray}/>
    </div>
  );
}

export default App;
