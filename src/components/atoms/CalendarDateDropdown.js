import dayjs from "dayjs"
import React, { useMemo, useState } from "react"
import styled from "styled-components"
import { Next, Prev } from "./Icons"
import { getWeekDays } from "../../utils/getWeekDays.js"

// example: https://github.com/diegoalmda/nextjs-ignite-call/blob/main/src/components/Calendar/index.tsx

export const CalendarDateDropdown = ({ setOpenedPopup, setChosenDate, chosenDate }) => {
  const [currentDate, setCurrentDate] = useState(() => {
    return dayjs().set('date', 1)
  })

  function handlePreviousMonth() {
    const previousMonthDate = currentDate.subtract(1, 'month')
    setCurrentDate(previousMonthDate)
  }

  function handleNextMonth() {
    const nextMonthDate = currentDate.add(1, 'month')
    setCurrentDate(nextMonthDate)
  }

  const shortWeekDays = getWeekDays({ short: true })

  const currentMonth = currentDate.format('MMMM')
  const currentYear = currentDate.format('YYYY')

  // const { data: blockedDates } = useQuery(
  //   ['blocked-dates', currentDate.get('year'), currentDate.get('month')],
  //   async () => {
  //     const response = await api.get(`/users/${username}/blocked-dates`, {
  //       params: {
  //         year: currentDate.get('year'),
  //         month: currentDate.get('month') + 1,
  //       },
  //     })

  //     return response.data
  //   },
  // )

  const calendarWeeks = useMemo(() => {
    // if (!blockedDates) {
    //   return []
    // }

    const daysInMonthArray = Array.from({
      length: currentDate.daysInMonth(),
    }).map((_, i) => {
      return currentDate.set('date', i + 1)
    })

    const firstWeekDay = currentDate.get('day')

    const previousMonthFillArray = Array.from({
      length: firstWeekDay,
    })
      .map((_, i) => {
        return currentDate.subtract(i + 1, 'day')
      })
      .reverse()

    const lastDayInCurrentMonth = currentDate.set(
      'date',
      currentDate.daysInMonth(),
    )

    const lastWeekDay = lastDayInCurrentMonth.get('day')

    const nextMonthFillArray = Array.from({
      length: 7 - (lastWeekDay + 1),
    }).map((_, i) => {
      return lastDayInCurrentMonth.add(i + 1, 'day')
    })

    const calendarDays = [
      ...previousMonthFillArray.map((date) => {
        return { date, disabled: true }
      }),
      ...daysInMonthArray.map((date) => {
        return {
          date,
          // disabled:
          //   date.endOf('day').isBefore(new Date()) ||
          //   blockedDates.blockedWeekDays.includes(date.get('day')) ||
          //   blockedDates.blockedDates.includes(date.get('date')),
        }
      }),
      ...nextMonthFillArray.map((date) => {
        return { date, disabled: true }
      }),
    ]

    const calendarWeeks = calendarDays.reduce(
      (weeks, _, i, original) => {
        const isNewWeek = i % 7 === 0

        if (isNewWeek) {
          weeks.push({
            week: i / 7 + 1,
            days: original.slice(i, i + 7),
          })
        }

        return weeks
      },
      [],
    )

    return calendarWeeks
  }, [
    currentDate,
    //  blockedDates
  ])

  return (
    <Wrapper>
      <header>
        <button type='button' onClick={handlePreviousMonth}>
          <Prev />
        </button>
        <h2>
          {currentMonth} {currentYear}
        </h2>
        <button type='button' onClick={handleNextMonth}>
          <Next />
        </button>
      </header>
      <div>
        <ul className="grid">
          {shortWeekDays.map((weekDay) => (
            <li key={weekDay}>{weekDay}</li>
          ))}
        </ul>
        <ul >
          {calendarWeeks.map((week) => (
            <li key={week.week}>
              <ul className="grid">
                {week.days.map((day) => (
                  <li className={chosenDate?.format('DD-MM-YYYY') === day.date.format('DD-MM-YYYY') ? 'active' : ''} key={day.date.format('DD-MM-YYYY')}>
                    <button onClick={() => { setChosenDate(day.date) }} type='button' disabled={day.disabled}>
                      {day.date.format('DD')}
                    </button>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
      <footer>
        <button onClick={() => { setOpenedPopup(false) }} className="anulate">
          Anuluj
        </button>
        <button onClick={() => { setOpenedPopup('time') }} disabled={!chosenDate} className="chose-time">
          Wybierz godzinę
        </button>
      </footer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: fit-content;
  background-color: var(--neutral-900);
  padding: 20px 20px 34px 20px;
  border-radius: 2px;
  position: absolute;
  left: 0;
  bottom: 0;
  transform: translateY(100%);
  z-index: 2;

  header{
    display: flex;
    width: fit-content;
    margin: 0 auto 18px auto;
    align-items: center;
    gap: 2px;

    h2{
      font-size: 1rem;
    }
  }

  footer{
    margin-top: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button{
      font-size: 1rem;
    }

    .anulate{
      color: #EE6470;
    }

    .chose-time{
      transition: color .3s var(--easing);

      &:disabled{
        cursor: not-allowed;
        color: var(--neutral-500);
      }
    } 
  }

  ul{
    width: fit-content;
    li{
      list-style: none;
    }
  }

  .grid{
    display: grid;
    width: fit-content;
    grid-template-columns: repeat(7, 1fr);
    
    li{
      width: 40px;
      height: 38px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      position: relative;
      border: 2px solid transparent;
      transition: border-color .3s var(--easing);

      &.active{
        border: 2px solid var(--primary-400);
      }

      button{
        color: var(--neutral-200);
        &:disabled{
          color: var(--neutral-500);
          cursor: default;
        }
      }
    }

  }
`