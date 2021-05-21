// Importing functions to create and use a Context component
import React, { useReducer, createContext, useCallback } from 'react';

// Create a Context component
export const CourseContext = createContext();

// Declare actions for this component
const UPDATE_COURSE = "UPDATE_COURSE";

// Declare an initial state for the Context component (i.e, the global state)
const initialState = {
    tutorName: localStorage.getItem('tutorName') || undefined,
    // jsonwebtoken: localStorage.getItem('jsonwebtoken') || undefined,
    // loggedIn: localStorage.getItem('firstName') || false,
    courseName: localStorage.getItem('courseName') || undefined,
    courseCode: localStorage.getItem('courseCode') || undefined,
    time: localStorage.getItem('time') || undefined

}


// The reducer that will change the (global) state
const reducer = (state=false, action) => {
    if(action.type === UPDATE_COURSE) {
        return {
            ...state,
            ...action.payload
        }
    }
}


// Create the Provider component
export const CourseContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    // Declare function to send payload to reducer
    const updateCourse = useCallback(
        (payload) => {

            // Set the values in the user's computer
            localStorage.setItem('tutorName', payload.tutorName);
            localStorage.setItem('courseName', payload.courseName);
            localStorage.setItem('time', payload.time);
            localStorage.setItem('courseCode', payload.courseCode);
            // localStorage.setItem('jsonwebtoken', payload.jsonwebtoken);


            dispatch(
                {
                    type: UPDATE_COURSE,
                    payload: payload
                }
            )
        }, [dispatch]
    );

    return (
        <CourseContext.Provider 
            value={{
                courseName: state.courseName,
                courseCode: state.courseCode,
                // jsonwebtoken: state.jsonwebtoken,
                // loggedIn: state.loggedIn,
                time: state.time,
                tutorName: state.tutorName,
                updateCourse
            }}
        >{children}
        </CourseContext.Provider>

    )
};