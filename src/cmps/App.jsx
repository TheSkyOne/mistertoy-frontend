import { Provider } from "react-redux"
import { Routes, Route, HashRouter } from "react-router-dom"

import store from "../store/store.js"
import { ToyIndex } from "../pages/ToyIndex.jsx"
import { ToyDetails } from "../pages/ToyDetails.jsx"


function App() {
    return (
        <Provider store={store}>
            <HashRouter>
                <main>
                    <Routes>
                        <Route path="/" element={<ToyIndex />} />
                        <Route path="/toys" element={<ToyIndex />} />
                        <Route path="/toys/:toyId" element={<ToyDetails />} />
                    </Routes>
                </main>
            </HashRouter>
        </Provider>
    )
}

export default App
