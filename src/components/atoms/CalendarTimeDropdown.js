import React from "react"
import styled from "styled-components"
// import dayjs from "dayjs"

const availability = [
  {
    time: '10:00',
    available: false,
  },
  {
    time: '10:30',
    available: false,
  },
  {
    time: '11:00',
    available: false,
  },
  {
    time: '11:30',
    available: true,
  },
  {
    time: '12:00',
    available: true,
  },
  {
    time: '12:30',
    available: true,
  },
  {
    time: '13:00',
    available: true,
  },
  {
    time: '13:30',
    available: true,
  },
  {
    time: '14:00',
    available: true,
  },
  {
    time: '14:30',
    available: true,
  },
  {
    time: '15:00',
    available: true,
  },
  {
    time: '15:30',
    available: true,
  },
  {
    time: '16:00',
    available: true,
  },
  {
    time: '16:30',
    available: true,
  },
  {
    time: '17:00',
    available: true,
  },
]

export const CalendarTimeDropdown = ({ setOpenedPopup, setChosenTime, chosenTime, chosenDate }) => {

  // const selectedDateWithoutTime = chosenDate
  //   ? dayjs(chosenDate).format('YYYY-MM-DD')
  //   : null

  // const { data: availability } = useQuery(
  //   ['availability', selectedDateWithoutTime],
  //   async () => {
  //     const response = await api.get(`/users/${username}/availability`, {
  //       params: {
  //         date: selectedDateWithoutTime,
  //       },
  //     })

  //     return response.data
  //   },
  //   {
  //     enabled: !!chosenDate,
  //   },
  // )

  function handleSelectTime(hour) {
    setChosenTime(hour)
    // const dateWithTime = dayjs(chosenDate)
    //   .set('hour', hour)
    //   .startOf('hour')
    //   .toDate()

    // setChosenTime(dateWithTime)
  }

  return (
    <Wrapper>
      <header>
        <button onClick={() => { setOpenedPopup('date') }}>
          Cofnij
        </button>
        <div>

        </div>
        <div />
      </header>
      <div>
        <ul>
          {availability.map(({ time, available }) => (
            <li key={time} className={chosenTime === time ? 'active' : ''}>
              <button
                type='button'
                onClick={() => handleSelectTime(time)}
                disabled={!available}
              >
                {time}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <footer>
        <button onClick={() => { setOpenedPopup(false) }} className="anulate">
          Anuluj
        </button>
        <button onClick={() => { setOpenedPopup(false) }} disabled={!chosenTime} className="chose-time">
          Gotowe
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

  ul{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 16px 24px;

    li{
      list-style: none;
      width: 80px;
      height: 32px;
      
      border-radius: 35px;
      border: 2px solid transparent;
      transition: border-color .3s var(--easing);

      &.active{
        border: 2px solid var(--primary-400);
      }

      button{
        width: 100%;
        height: 100%;
        border-radius: 35px;

        &:disabled{
          cursor: not-allowed;
          color: var(--neutral-500);
        }
      }
    }
  }

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
`