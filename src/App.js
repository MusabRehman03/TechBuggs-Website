import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import OurServices from './components/OurServices';
import './App.css';
import Testimonials from './components/Testimonials';
// import CaseStudies from './components/CaseStudies'
import TrustUs from './components/TrustUs';
// import Timeline from './components/TimeLine'
function App() {
    return (_jsxs("div", { className: '', children: [_jsx(NavBar, {}), _jsx(HeroSection, {}), _jsx(OurServices, {}), _jsx(TrustUs, {}), _jsx(Testimonials, {})] }));
}
export default App;
