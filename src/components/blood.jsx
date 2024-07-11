import React,{useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaUser,FaArrowRight} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail, MdAccessTimeFilled,MdOutlineCloudUpload,MdCall} from "react-icons/md";
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './design/view.css'
const Blood = ()=>{
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Form submitted successfully!");
  };
    return(
        <>
        <div className="font">
        <section id="home">
        <div className="nav">
          <nav>
            <ul>
              <li><MdEmail/> abc123@gmail.com</li>
              <li><MdAccessTimeFilled/> Service Time : 24HRS</li>
              <li><MdOutlineCloudUpload/> Upload File</li>
              <li><FaUser/> Login</li>
            </ul>
          </nav>
        </div>
        <div className="container">
        <header className="header">
            <h1>Blood<span> Doners</span></h1>
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#gallery"> Gallery</a></li>
                    <li><a href="#process">Process</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            </header>
            </div>
            <div className="slider">
            <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img src="./slide-02.webp" alt="" />
        <Carousel.Caption>
          <h3>Donate Blood & Save a Life</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br/>
            Temporibus dolorem veritatis sapiente rem voluptates eum,<br/>
            quod aut sit deleniti natus repudiandae esse amet dolor<br/>
            laudantium qui debitis facilis, numquam ratione!<br/><br/>
            <a href="#s">Donate Now</a>
            <a style={{marginLeft:'30px'}}href="#s">Contact Us</a>
            </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="./slide-03.webp" alt="" />
        <Carousel.Caption>
        <h3>Donate Blood & Save a Life</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br/>
            Temporibus dolorem veritatis sapiente rem voluptates eum,<br/>
            quod aut sit deleniti natus repudiandae esse amet dolor<br/>
            laudantium qui debitis facilis, numquam ratione!<br/><br/>
            <a href="#s">Donate Now</a>
            <a style={{marginLeft:'30px'}}href="#s">Contact Us</a>
            </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="3.jpg" alt="" />
        <Carousel.Caption>
        <h3>Donate Blood & Save a Life</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br/>
            Temporibus dolorem veritatis sapiente rem voluptates eum,<br/>
            quod aut sit deleniti natus repudiandae esse amet dolor<br/>
            laudantium qui debitis facilis, numquam ratione!<br/><br/>
            <a href="#s">Donate Now</a>
            <a style={{marginLeft:'30px'}}href="#s">Contact Us</a>
            </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
      </section>
      <section id="about">
        <div className="about">
          <h1>About Us</h1>
          <p style={{marginLeft:'800px'}}>Donate Blood & Save a Life</p>
          <div className="container">
          <div className="row">
            <div className="col-6">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque, quibusdam rerum nihil sed, voluptas excepturi maiores sequi neque aliquam hic consequuntur, perferendis et unde? Tempora laborum praesentium asperiores voluptatem modi!
              Alias reprehenderit, quae non inventore ullam error neque quod et. Dicta est ut blanditiis architecto perspiciatis tenetur saepe fuga ullam similique? Ipsum provident dolorem sit. Sapiente magni animi laudantium iure?
              Fuga laborum velit quaerat laboriosam obcaecati, rem dolore expedita libero, ex nesciunt, quo autem nulla distinctio exercitationem consectetur et? Obcaecati ratione tempora quidem, laudantium nam culpa maiores sequi architecto esse.
              Sunt tempore nam eveniet esse laudantium? Cum quos quae laudantium eaque deleniti architecto facilis beatae perferendis non veniam adipisci fuga officiis, ipsum dolor accusamus ratione? Expedita, est distinctio? Repellendus, totam.
              Iusto neque maiores ut iure illum ea, id eum distinctio quo adipisci assumenda sint vero quam eveniet excepturi, fugit optio saepe quaerat! Rerum, animi cupiditate architecto accusamus quisquam voluptatibus praesentium.</p>
            </div>
            <div className="col-6">
              <img src="./blood.png" alt="" />
            </div>
          </div>
        </div>
        </div>
      </section>
      <section id="gallery">
        <div className="gallery"><br/>
        <h1>Our <span>Gallery</span></h1><br/>
          <div className="row">
            <div className="col-4">
              <img src="./g1.webp" alt="" />
            </div>
            <div className="col-4">
            <img src="./g2.webp" alt="" />
            </div>
            <div className="col-4">
            <img src="./g3.webp" alt="" />
            </div>
            <div className="col-4 mt-5">
            <img src="./g4.webp" alt="" />
            </div>
            <div className="col-4 mt-5">
            <img src="./g5.webp" alt="" />
            </div>
            <div className="col-4 mt-5">
            <img src="./g6.webp" alt="" />
            </div>
            <div className="col-4 mt-5">
            <img src="./g7.webp" alt="" />
            </div>
            <div className="col-4 mt-5">
            <img src="./g8.webp" alt="" />
            </div>
            <div className="col-4 mt-5">
            <img src="./g9.webp" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section id="process">
        <div className="process mt-5">
          <h1>Donation <span>Process</span></h1>
          <div className="container mt3">
          <div className="row">
            <div className="col-3">
            <Card style={{ width: '20rem',borderRadius:'10px',backgroundColor:'rgb(227, 242, 242)',border:'none' }}>
              <img src="../g1.webp" alt="" />
              <Card.Body>
                <Card.Title style={{fontWeight:'600'}}>1 - Registration</Card.Title>
                <Card.Text className="text">
                Ut wisi enim ad minim veniam, quis laore nostrud exerci tation ulm hedi corper turet suscipit lobortis
                </Card.Text>
                <Button className="btn">Read More <FaArrowRight/></Button>
                </Card.Body>
                </Card>
            </div>
            <div className="col-3">
            <Card style={{ width: '20rem',borderRadius:'10px',backgroundColor:'rgb(227, 242, 242)',border:'none' }}>
              <img src="../g2.webp" alt="" />
              <Card.Body>
                <Card.Title style={{fontWeight:'600'}}>2 - Seeing</Card.Title>
                <Card.Text className="text">
                Ut wisi enim ad minim veniam, quis laore nostrud exerci tation ulm hedi corper turet suscipit lobortis
                </Card.Text>
                <Button className="btn">Read More <FaArrowRight/></Button>
                </Card.Body>
                </Card>
            </div>
            <div className="col-3">
            <Card style={{ width: '20rem',borderRadius:'10px',backgroundColor:'rgb(227, 242, 242)',border:'none'}}>
              <img src="../g3.webp" alt="" />
              <Card.Body>
                <Card.Title style={{fontWeight:'600'}}>3 - Donation</Card.Title>
                <Card.Text className="text">
                Ut wisi enim ad minim veniam, quis laore nostrud exerci tation ulm hedi corper turet suscipit lobortis
                </Card.Text>
                <Button className="btn">Read More <FaArrowRight/></Button>
                </Card.Body>
                </Card>
            </div>
            <div className="col-3">
            <Card style={{ width: '20rem',borderRadius:'10px',backgroundColor:'rgb(227, 242, 242)',border:'none'}}>
              <img src="../g4.webp" alt="" />
              <Card.Body>
                <Card.Title style={{fontWeight:'600'}}>4 - Save Life</Card.Title>
                <Card.Text className="text">
                Ut wisi enim ad minim veniam, quis laore nostrud exerci tation ulm hedi corper turet suscipit lobortis
                </Card.Text>
                <Button className="btn">Read More <FaArrowRight/></Button>
                </Card.Body>
                </Card>
            </div>
          </div>
        </div>
        </div>
      </section>
      <section id="contact">
        <div className="contact">
        <div className="row mt-5">
        <h1>Contact <span>Us</span></h1>
        <div className="col-4 mt-5">
          <h2>Contact Informatins</h2><br />
          <ul>
            <li> <FaLocationDot/> 46-29 Indra Street, Southernbank,<br /> Tigaione, Toranto, 3006 Canada</li>
            <li> <MdEmail/>sales@smarteyeapps.com <br />support@smarteyeapps.com</li>
            <li> <MdCall/>+91 9751791203 <br />+91 9159669599</li>
          </ul>
        </div>
        <div className="col-4 mt-5">
          <h2 style={{marginRight:'130px'}}>Quick Links</h2><br />
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Gallery</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className="col-4">
        <div className="contact-form-container">
                    <form onSubmit={handleSubmit} className="contact-form">
                        <div className="form-group">
                            <label>Name:</label>
                            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label>Email:</label>
                            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label>Message:</label>
                            <textarea name="message" value={formData.message} onChange={handleChange} required />
                        </div>
                        <button type="submit" className="submit-button">Submit</button>
                    </form>
                    <ToastContainer/>
                </div>
        </div>
        </div>
        <hr style={{color:'azure',fontWeight:'500'}}/>
      <footer>
        <h2>Developed By Aroedisanalwac</h2><br />
      </footer>
        </div>
      </section>
      </div>
        </>
    )
}
export default Blood