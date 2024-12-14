import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
const Home = lazy(() => import('../screen/Home'))
const About = lazy(() => import('../screen/About'))
const Blogs = lazy(() => import('../screen/Blogs'))
const Project = lazy(() => import('../screen/Project'))
const Services = lazy(() => import('../screen/Services'))
const Contact = lazy(() => import('../screen/Contact'))



const AppNavigator = () => {
    return (
        <Suspense fallback={null}>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/blogs' element={<Blogs />} />
                <Route path='/services' element={<Services />} />
                <Route path='/projects' element={<Project />} />
                <Route path='/contact' element={<Contact />} />

            </Routes>
        </Suspense>
    )
}

export default AppNavigator