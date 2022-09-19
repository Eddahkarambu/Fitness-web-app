import './Home.css';
import Navbar from './Navbar.js';


function Home() {
    return (
        <div className="home">
             <Navbar/>
             
             <div className='partone'>
             <div className='intro'>
               <div className='one'>
                <div className='smallgroup'>1-2-1 & SMALL GROUP</div>
                <div className='training'>PERSONAL TRAINING IN NAIROBI KENYA</div>
                <div className='para'>We are Crossfit Collective, the leader in strength and conditioning equipment nationwide. We provide high-quality products at an affordable price, as well as opportunities for people to improve their wellness.</div> 
                </div>           
               </div>
             </div>

             <div className='intro2'>
                <h1>ITS TIME TO ENHANCE YOUR TRAINNING</h1>
                <p>We work with men and women that have let fitness slide down their list of priorities, and want to make a change</p>
                <p>We believe fitness should enhance your life, rather than take away from it- every Armoury Transformation starts with an in-depth look at where you currently are, and creates an achievable path to where you want to be.</p>
                <p>Whether that's ditching the mid-afternoon energy slump so you can be active with your kids after school, banishing the expanding midsection that's making it harder to slide into your work trousers each passing year, or finally having the body confidence to buy clothes that show off your physique, rather than hide it</p>
                <p>In just 42 days we'll take you from feeling frustrated with your current trajectory, to feeling proud of the positive habits you've built</p>
             </div>


             <div className='background'>
             <div className='about'>
               <div className='services'>WHAT WE DO</div>
               <div className='service'>Our coaching options have been designed from the ground up to put you and your goals first. From one-on-one training in your private studio, to our renowned small group personal training and bespoke nutrition packages- everything we offer has been battle-tested over a decade in the field, to ensure the results you achieve are not only impressive in the short term- but also sustainable for life</div>
             </div> 
             </div>
        </div>
      );

}
export default Home;