import "./Home.css";
import Navbar from "./Navbar.js";
import groupphoto from "../Images/groupphoto.jpg";
import mens from "../Images/mens.jpg";
import nutrition from "../Images/nutrition.jpg";
import online from "../Images/online.jpg";
// import hands from "../Images/hands.webp";

function Home() {
  return (
    <div className="home">
      <Navbar />

      <div className="partone">
        <div className="intro">
          <div className="one">
            <div className="smallgroup">1-2-1 & SMALL GROUP</div>
            <div className="training">THE BEST FITNESS CLUB.</div>
            <div className="para">
              We are Crossfit Collective, the leader in strength and
              conditioning equipment nationwide. We provide high-quality
              products at an affordable price, as well as opportunities for
              people to improve their wellness.
            </div>
          </div>
        </div>
      </div>

      <div className="parttwo">
        <div className="intro2">
          <h1>ITS TIME TO ENHANCE YOUR TRAINNING</h1>
          <p>
            We work with men and women that have let fitness slide down their
            list of priorities, and want to make a change
          </p>
          <p>
            We believe fitness should enhance your life, rather than take away
            from it- every Armoury Transformation starts with an in-depth look
            at where you currently are, and creates an achievable path to where
            you want to be.
          </p>
          <p>
            Whether that's ditching the mid-afternoon energy slump so you can be
            active with your kids after school, banishing the expanding
            midsection that's making it harder to slide into your work trousers
            each passing year, or finally having the body confidence to buy
            clothes that show off your physique, rather than hide it
          </p>
          <p>
            In just 42 days we'll take you from feeling frustrated with your
            current trajectory, to feeling proud of the positive habits you've
            built
          </p>
        </div>
      </div>

      <div className="background">
        <div className="about">
          <div className="services">WHAT WE DO</div>
          <div className="service">
            Our coaching options have been designed from the ground up to put
            you and your goals first. From one-on-one training in your private
            studio, to our renowned small group personal training and bespoke
            nutrition packages- everything we offer has been battle-tested over
            a decade in the field, to ensure the results you achieve are not
            only impressive in the short term- but also sustainable for life
          </div>
        </div>
      </div>

      <div className="all">
        <div className="group2">
          <img className="groupphoto" src={groupphoto} alt="groupphoto" />
          <div className="explanation2">
            <div className="photos">GROUP TRAINNING</div>
            <div className="paragraphs">
              Our Small Group Personal Training is unlike anything you'll have
              experienced before. In micro training groups of just 6:1, all your
              workouts are customised, recorded and coached by an experienced
              personal trainer. The balance of the motivational group
              environment and 1-2-1 attention makes it the perfect mix to
              produce fast results, without the bounce back{" "}
            </div>
          </div>
        </div>
        {/* <div className="group">
          <img className="ladies" src={ladies} alt="ladies" />
          <div className="explanation1">
            <h1>GROUP TRAINNING</h1>
            <div className="paragraphs">
              Our Small Group Personal Training is unlike anything you'll have
              experienced before. In micro training groups of just 6:1, all your
              workouts are customised, recorded and coached by an experienced
              personal trainer. The balance of the motivational group
              environment and 1-2-1 attention makes it the perfect mix to
              produce fast results, without the bounce back{" "}
            </div>
          </div>
        </div> */}

        <div className="group2">
          <img className="nutrition" src={nutrition} alt="nutrition" />
          <div className="explanation2">
            <div className="photos">NUTRITION TRAINING</div>
            <div className="paragraphs">
              We'll teach you how to take control of your health and weight,
              without relying on any specific diet or products, with our 1-2-1
              nutrition coaching. You'll working alongside a qualified
              nutritionist to build a sustainable approach together, so you'll
              not only hit your physique goals, but be able to stay there
              without rigid diets or unrealistic restrictions{" "}
            </div>
          </div>
        </div>

        <div className="group3">
          <img className="mens" src={mens} alt="mens" />
          <div className="explanation2">
            <div className="photos">1-2-1 TRAINING</div>
            <div className="paragraphs">
              1-2-1 personal training is the ultimate investment in your health.
              You'll be working directly with your coach in our private studio,
              following a bespoke plan to ensure you hit your goals in record
              time. Whether you want to slim down, add muscle or anything in
              between, our personal training packages will get you there in a
              fun and sustainable way
            </div>
          </div>
        </div>

        <div className="group4">
          <img className="online" src={online} alt="online" />
          <div className="explanation2">
            <div className="photos">ONLINE TRAINING</div>
            <div className="paragraphs">
              The Armoury's Online Coaching Packages have been created to take
              the guesswork out of getting in the best shape of your life.
              You'll be working 1-2-1 with your Personal Trainer through our
              Armoury Coaching app- where you'll get workouts designed
              specifically for you, progress monitored, regular check-ins and
              nutrition support for unrivalled results, anywhere in the world
            </div>
          </div>
        </div>
      </div>

      <div className="secondlast">
        <div className="registration">REGISTER NOW TO GET MORE DETAILS</div>
        <div className="registration1">
          WHERE HEALTH, BEAUTY AND FITNESS MEET
        </div>
        <div className="appbutton1">
          <div className="appbutton">Appontment</div>
        </div>
      </div>

      <div className="finalpart">
        <div className="crossfit">The Best Fitness Gym ever</div>
        <div className="usefullinks">USEFUL LINKS</div>
        <div className="lists">
          <li>Services</li>
          <li>Dashboard</li>
          <li>Profile</li>
          <li>Schedule Consult</li>
        </div>
      </div>
    </div>
  );
}
export default Home;
