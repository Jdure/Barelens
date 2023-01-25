import { format, setHours, setMinutes, getTime, isSameDay } from "date-fns"
import React, { useRef, useState } from "react"
import ReactDatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import sendRequest from "../util/sendUserRequest"

type currSessionProps = {
    currSessions: Date[]
}

export function Form({ currSessions }: currSessionProps) {
    const today = new Date()
    const defaultDate = format(today, "yyyy-MM-dd hh:mm:ss")
    const formRef = useRef<HTMLFormElement>(null)
    const [excludedTimes, setExcludedTimes] = useState<Array<Date>>([])
    const [submitted, setSubmitted] = useState(false)
    const [startDate, setStartDate] = useState(
        setHours(setMinutes(new Date(), 0), 8)
    )
    const [values, setValues] = useState({
        name: "",
        email: "",
        service: "",
        eventDate: defaultDate,
    })

    const isWeekend = (today: Date) => {
        const day = today.getDay()
        return day === 0 || day === 6
    }

    const handleChange = (
        evt: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        evt.persist()
        const value = evt.target.value
        setValues((values) => ({
            ...values,
            [evt.target.name]: value,
        }))
    }

    const handleReset = () => {
        setValues({
            name: "",
            email: "",
            service: "",
            eventDate: defaultDate,
        })
        setStartDate(today)
    }

    const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault()
        setSubmitted(true)

        sendRequest(values)

        if (formRef.current) {
            formRef.current?.reset()
            handleReset()
        }

        setTimeout(() => {
            setSubmitted(false)
        }, 3000)
    }

    const excludedSlots = (date: Date) =>
        currSessions.reduce((acc: Array<Date>, item) => {
            if (isSameDay(date, new Date(item))) {
                const appointments = getTime(new Date(item))
                const convertAppts = setHours(
                    setMinutes(
                        new Date(appointments),
                        new Date(appointments).getMinutes()
                    ),
                    new Date(appointments).getHours()
                )
                acc.push(convertAppts)
            }
            setExcludedTimes(acc)
            return acc
        }, [])

  const filterPassedTime = (time: string | number | Date) => {
      const currentDate = new Date()
      const selectedDate = new Date(time)

      return currentDate.getTime() < selectedDate.getTime()
  }

  return (
      <div id="contact-form" className="container">
          {submitted ? (
              <div className="absolute items-center bg-white leading-none rounded p-2 shadow text-black text-sm">
                  <span className="inline-flex bg-gray-700 text-white rounded-full h-6 px-3 justify-center items-center my-2 sm:my-2">
                      Thanks!
                  </span>
                  <span className="inline-flex px-2 text-gray-700">
                      We will contact you shortly to confirm your session!
                  </span>
              </div>
          ) : null}
          <div className="bg-white rounded-md p-8 flex flex-col items-center justify-center">
              <h2 className="text-xl text-black py-1 sm:text-4xl mb-4">
                  Book A Session
              </h2>
              <p className="leading-relaxed mb-3 text-black text-sm sm:text-xl">
                  Lorem ipsum, dolor sit amet consectetur elit
              </p>
              <form
                  ref={formRef}
                  className="w-full min-h-fit flex flex-col items-center justify-between space-y-4 sm:space-y-6 sm:pt-4"
                  onSubmit={handleSubmit}
              >
                  <input
                      required
                      className="my-2 text-lg appearance-none bg-transparent border-b border-gray-400 w-3/4 text-black leading-none focus:outline-none"
                      type="text"
                      placeholder="Your name"
                      aria-label="Full name"
                      name="name"
                      defaultValue={values.name}
                      onChange={handleChange}
                  />
                  <input
                      pattern="^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"
                      required
                      className="my-2 text-lg appearance-none bg-transparent border-b border-gray-400 w-3/4 text-black leading-none focus:outline-none"
                      type="email"
                      name="email"
                      placeholder="E-mail address"
                      aria-label="E-mail address"
                      defaultValue={values.email}
                      onChange={handleChange}
                  />
                  <label htmlFor="occasionTypes" className="text-lg">
                      Choose service
                  </label>

                  <select
                      name="service"
                      id="serviceTypes"
                      defaultValue={values.service}
                      onChange={handleChange}
                      required
                      className="text-lg text-black relative w-3/4 bg-white border border-gray-300 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                  >
                      <option value="">Select Service</option>
                      <option value="portrait">Portrait</option>
                      <option value="couple">Couple</option>
                      <option value="engagement">Engagement</option>
                      <option value="wedding">Wedding</option>
                      <option value="family">Family</option>
                      <option value="maternity">Maternity</option>
                      <option value="newborn">Newborn</option>
                  </select>

                  <label htmlFor="eventDate" className="text-lg">
                      Select date
                  </label>
                  <ReactDatePicker
                      id="eventDate"
                      name="eventDate"
                      minDate={today}
                      showTimeSelect
                      filterTime={filterPassedTime}
                      timeIntervals={90}
                      minTime={setHours(setMinutes(new Date(), 0), 9)}
                      maxTime={setHours(setMinutes(new Date(), 0), 20)}
                      excludeTimes={[
                          setHours(setMinutes(new Date(), 0), 12),
                          ...excludedTimes,
                      ]}
                      className="text-lg text-center appearance-none bg-transparent border-b border-gray-400 w-3/4 ml-10 sm:ml-16 text-black leading-none focus:outline-none"
                      selected={startDate}
                      filterDate={isWeekend}
                      dateFormat="MMMM d, yyyy h:mm aa"
                      onChange={(date: Date) => {
                          setStartDate(date)
                          const d = format(date, "yyyy-MM-dd hh:mm:ss")
                          values["eventDate"] = d
                      }}
                      onSelect={excludedSlots}
                  />
                  <button
                      type="submit"
                      className="text-white text-sm w-1/2 h-max font-bold sm:w-1/2 sm:text-xl rounded-full bg-gray-400 hover:bg-gray-800"
                  >
                      Submit
                  </button>
              </form>
          </div>
      </div>
  )
}
