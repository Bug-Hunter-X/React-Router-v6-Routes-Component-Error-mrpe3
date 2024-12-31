```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* ... more routes */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```
This code uses the `BrowserRouter` and `Routes` components from `react-router-dom` v6.  However, if you are trying to use a legacy route configuration like this with a v5 or earlier version, you'll encounter errors.  The `Switch` component used in older versions of `react-router-dom` is not present in v6.