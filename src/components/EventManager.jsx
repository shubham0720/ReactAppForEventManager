import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import HeaderComponent from './commonelements/HeaderComponent'
import LoginComponent from './loginpage/LoginComponent'
import LogoutComponent from './logoutpage/LogoutComponent'
import WelcomeComponent from './welcomepage/WelcomeComponent'
import EventsComponent from './eventspage/EventsComponent'
import AuthProvider, { useAuth } from './security/AuthContext'
import ErrorComponent from './commonelements/ErrorComponent'
import ProfileComponent from './profilepage/ProfileComponent'
import UpdateEventComponent from './editeventpage/UpdateEventComponent'
import RegistrationComponent from './registerpage/RegistrationComponent'
import ViewRegistrationsComponent from './registerpage/ViewRegistrationsComponent'
import ViewEventComponent from './eventspage/ViewEventComponent'
import SuccessfulCreatedEvent from './createeventpage/SuccessfulCreatedEvent'

function AuthenticatedRoute({children}){
    const authContext = useAuth()
    if(authContext.isAuthenticated)
        return children

    return <Navigate to="/login" />
}

export default function EventManager(){
    return (
        <div className="EventManager">
            <AuthProvider>
            <BrowserRouter>
            <HeaderComponent/>
                <Routes>
                    <Route path="/" element={<WelcomeComponent/>}/>
                    <Route path='/events' element={
                        <AuthenticatedRoute>
                    <EventsComponent/>
                    </AuthenticatedRoute>}/>
                    <Route path='/events/status/:status' element={
                        <AuthenticatedRoute>
                    <SuccessfulCreatedEvent/>
                    </AuthenticatedRoute>}/>
                    <Route path='/events/:eventId' element={
                        <AuthenticatedRoute>
                    <UpdateEventComponent/>
                    </AuthenticatedRoute>}/>
                    <Route path='/registration/:eventId' element={
                        <AuthenticatedRoute>
                    <RegistrationComponent/>
                    </AuthenticatedRoute>}/>
                    <Route path='/viewregistrations/:eventId' element={
                        <AuthenticatedRoute>
                    <ViewRegistrationsComponent/>
                    </AuthenticatedRoute>}/>
                    <Route path='/vieweventdetails/:eventId' element={
                        <AuthenticatedRoute>
                    <ViewEventComponent/>
                    </AuthenticatedRoute>}/>
                    <Route path='/profile' element={<ProfileComponent/>}/>
                    <Route path='/login' element={<LoginComponent/>}/>
                    <Route path='/logout' element={<LogoutComponent/>}/>
                    <Route path='*' element={<ErrorComponent/>}/>
                </Routes>
            </BrowserRouter>
            </AuthProvider>
        </div>
    )
}