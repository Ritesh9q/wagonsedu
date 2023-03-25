// import './App.css';

import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./components/home";
import Login from "./components/login";
import SignUp from "./components/signup";
import CourseDetails from "./components/coursedetails";
import OpenProgram from "./components/open-programs";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Blogs from "./components/blogs";
import BlogDetails from "./components/blog-details";
import CorporateTrainingSolutions from "./components/corporate-training-solution";
import SubPage from "./components/subpage";
import ContactUs from "./components/contact-us";
import UpcomingPrograms from "./components/upcoming-programs";
import ShoppingCart from "./components/shopping-cart";
import MyCourses from "./components/my-courses";
import Lesson from "./components/lesson"; 
import BecomeInstructor from "./components/become-instructor";
import Dashboard from "./components/dashboard";
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
   
    <div className="App"> 
      <Provider store={store}>
       <BrowserRouter>
       <Header/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/signup" element={<SignUp/>}></Route>
          <Route path="/course-details/:id" element={<CourseDetails/>}></Route>
          <Route path="/open-program" element={<OpenProgram/>}></Route>
          <Route path="/blogs" element={<Blogs/>}></Route>
          <Route path="/blog-details" element={<BlogDetails/>}></Route>
          <Route path="/corporate-training-solutions" element={<CorporateTrainingSolutions/>}></Route>
          <Route path="/sub-page" element={<SubPage/>}></Route>
          <Route path="/contact-us" element={<ContactUs/>}></Route>
          <Route path="/upcoming-programs" element={<UpcomingPrograms/>}></Route>
          <Route path ="/shopping-cart" element={<ShoppingCart/>}></Route>
          <Route path ="/my-courses" element={<MyCourses/>}></Route>
          <Route path ="/lesson" element={<Lesson/>}></Route>
          <Route path="/mytabs/:tabIndex" element={<MyCourses/>} />
          <Route path ="/become-instructor" element={<BecomeInstructor/>}></Route>
          <Route path ="/instructor-dashboard" element={<Dashboard/>}></Route>


        </Routes>
        <Footer/>
       </BrowserRouter>
       </Provider>
    
    </div>
  );
}

export default App;
