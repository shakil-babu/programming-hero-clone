import React from 'react' ;
import CourseContent from '../../Components/CourseContent/CourseContent';
import Frequently from '../../Components/FrequentlyQuestion/Frequently';
import HeroPage from '../../Components/HeroSlider/HeroPage';
import Instructor from '../../Components/Instructor/Instructor';
import LearnFromCourse from '../../Components/LearnFromCourse/LearnFromCourse';
import Next from '../../Components/NextBatch/Next';
import Project from '../../Components/Project/Project';
import Review from '../../Components/StudentReview/Review';
import Support from '../../Components/Support/Support';
import './Style.css';

const ShowFirstPage = () => {
    return (
        <>
            <HeroPage/>
            <Next/>
            <LearnFromCourse/>
            <Support/>
            <CourseContent/>
            <Frequently/>
            <Project/>
            <Instructor/>
            <Review/>
        </>
    )
}

export default ShowFirstPage ;
