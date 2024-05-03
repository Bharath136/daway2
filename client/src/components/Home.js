import studentImage from '../assets/student-image2.png'
import logo from '../assets/logo2.png'
import './styles.css'
import { FaFacebook, FaInstagram, FaLinkedin, FaQuoteLeft } from "react-icons/fa";
import Header from './Header';

const Home = () => {

    const features = [{ id: 1, heading: 'Top Quality Quetions', description: 'All questions and solutions, designed by top exam experts, based on latest patterns and actual exam level', icon: '' },
    { id: 2, heading: 'Detailed Analysis', description: 'Know your weaknesses, strengths and everything else that you need to know to improve your score and rank.', icon: '' },
    { id: 3, heading: 'Live Quizzes', description: 'Get your All-India Rank and feel the thrill of a real-exam. Groom your pressure handling and time management skills.', icon: "" },
    { id: 4, heading: 'Learning Videos', description: 'Become lifelong learners with best teachers, engaging video lessons and personalised learning journeys', icon: '' }
    ]

    const learings = [
        { id: 1, heading: 'Questions Practiced', value: '9,55,878' },
        { id: 1, heading: 'Tests Taken', value: '1,13,540' },
        { id: 1, heading: 'Videos Viewed', value: '1,78,658' }
    ]

    const categories = [
        { id: 1, heading: "Abstract Reasoning", value: 'Aptitude' },
        { id: 2, heading: "Critical Thinking", value: 'Aptitude' },
        { id: 3, heading: "Data Interpretation", value: 'Aptitude' },
        { id: 4, heading: "Language Skills", value: 'Language Skills' },
        { id: 5, heading: "Logical Reasoning", value: 'Aptitude' },
        { id: 6, heading: "Numerical Reasoning", value: 'Aptitude' },
        { id: 7, heading: "Problem Solving", value: 'Aptitude' },
        { id: 8, heading: "Quantitative Aptitude", value: 'Aptitude' },
    ]

    const testimonials = [
        { id: 1, firstName: 'Sarah', lastName: 'Meyer', profession: 'GMAT Aspirant', description: 'Mock tests on QwikTest helped me develop my exam strategy. I was able to focus on my shortcomings and improve them!' },
        { id: 2, firstName: 'Vijay', lastName: 'Shah', profession: 'Class 12 Student', description: 'QwikTest helped me get AIR 1 in KCET and AIR 105 in NEET. Thank you QwikTest!' }
    ]
    return (
        <div className="main-container">
        <Header />
            <div className="home-container">
                <div className="banner-section-container section">
                    <div className="banner-details-container">
                        <h2 className="banner-heading">Learn & Upgrade Your Skills on Your Schedule</h2>
                        <p className="banner-description">Anywhere, anytime. Everything You Need For Your Exam Preparation</p>
                        <button className="banner-button">Get Started</button>
                    </div>
                    <img src={studentImage} alt="student" className="banner-image" />
                </div>

                <div className="features-section-container">
                    <h2 className="section-heading">FEATURES</h2>
                    <h2 className="heading">Better Learing. Better Results.</h2>
                    <p className="section-description">One platform for all your learing needs</p>
                    <ul className="features-list-container">
                        {features.map((feature) => (
                            <li className='feature-item'>
                                <div className="feature-details-container">
                                    <h2 className="feature-item-heading">{feature.heading}</h2>
                                    <p className="feature-item-description">{feature.description}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="categories-section-container section">
                    <h2 className="section-heading">CATEGORIES</h2>
                    <h2 className="heading">Comprehensive learning programs for all students</h2>
                    <p className="section-description">Become lifelong learners with the best teachers, engaging video lessons and personalised learning journeys</p>
                    <ul className="categories-list-container">
                        {categories.map((category) => (
                            <li className='category-item'>
                                <div className="category-details-container">
                                    <h2 className="category-item-heading">{category.heading}</h2>
                                    <p className="category-item-value">{category.value}</p>
                                </div>
                                <button className="category-button">Explore</button>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="students-love-section section">
                    <h2 className="students-love-heading">Student love using Daway</h2>
                    <p className="students-love-description">25,000+ Happy students</p>
                    <ul className="students-learning-list-container">
                        {learings.map((learing) => (
                            <li className="student-learning-item">
                                <h2 className="students-learning-item-heading">{learing.value}+</h2>
                                <p className='students-learning-item-value'>{learing.heading}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="testimonials-section-container section">
                    <h2 className="section-heading">TESTIMONIALS</h2>
                    <h2 className="heading">Our students and parents love us</h2>
                    <p className="section-description">Hear it directly from our students</p>
                    <ul className="testimonials-list-container">
                        {testimonials.map((testimonial) => (
                            <li className='testimonial-item'>
                                <div className="testimonial-details-container">
                                    <FaQuoteLeft size={25} className='testimonial-icon'/>
                                    <p className="testimonial-item-value">{testimonial.description}</p>
                                </div>
                                <div className="person-details-container">
                                    <div className="person-profile">
                                        <p className='profile'>{testimonial.firstName[0]}{testimonial.lastName[0]}</p>
                                    </div>
                                    <div className="person-details">
                                        <h2 className="person-name">{testimonial.firstName} {testimonial.lastName}</h2>
                                        <p className="person-profession">{testimonial.profession}</p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="payment-section">
                    <div className="payment-details">
                        <h2 className="payment-heading">Unlock all Online Test Series</h2>
                        <h2 className="payment-value-heading">Starts $49/Month</h2>
                    </div>
                    <button className="banner-button">Buy Now</button>
                </div>

                <div className="footer-section">
                    <img src={logo} alt="logo" className="logo-image" />
                    <p className='footer-description'>Everything You Need For Your Exam Preparation.</p>
                    <div className="social-container">
                        <FaFacebook className='social-icon' size={30} />
                        <FaInstagram className='social-icon' size={30} />
                        <FaLinkedin className='social-icon' size={30} />
                    </div>
                    <ul className='nav-links-container'>
                        <li className='link-item'>About</li>
                        <li className='link-item'>Features</li>
                        <li className='link-item'>Pricing</li>
                        <li className='link-item'>Help</li>
                        <li className='link-item'>Desclaimer</li>
                        <li className='link-item'>Privecy Policy</li>
                    </ul>
                    <div className="footer-bottom">
                        &copy; {new Date().getFullYear()} Daway | All Rights Reserved
                    </div>
                </div>
            </div>

            
        </div>
    )
}

export default Home