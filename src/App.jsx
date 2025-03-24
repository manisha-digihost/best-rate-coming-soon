import { useState, useEffect } from 'react'
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md'
import './App.css'

function App() {
  const [timeLeft, setTimeLeft] = useState({
    days: 60,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  const launchDate = new Date()
  launchDate.setDate(launchDate.getDate() + 60)

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date()
      const difference = launchDate.getTime() - now.getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="coming-soon">
      <div className="background-overlay"></div>
      <div className="content">
        <img 
          src="https://img.freepik.com/premium-vector/colorful-bird-gradient-illustration-logo-concept_1253202-5347.jpg?w=740" 
          alt="Company Logo" 
          className="logo"
        />
        <h1>Coming Soon!</h1>
        <p className="description">
          We're working hard to bring you something amazing. Stay tuned for our exciting launch!
        </p>
        <div className="countdown">
          {['Days', 'Hours', 'Minutes', 'Seconds'].map((label, index) => (
            <div className="countdown-box" key={index}>
              <h2>{Object.values(timeLeft)[index]}</h2>
              <p>{label}</p>
            </div>
          ))}
        </div>
        <div className="contact-info">
          <div className="contact-item">
            <MdEmail size={24} />
            <span>contact@company.com</span>
          </div>
          <div className="contact-item">
            <MdPhone size={24} />
            <span>+1 (555) 123-4567</span>
          </div>
          <div className="contact-item">
            <MdLocationOn size={24} />
            <span>123 Business Street, City, Country</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
