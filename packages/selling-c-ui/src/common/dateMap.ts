function getYears (minDate, maxDate) {
  const min = new Date(minDate.replace(/-/g, '/')).getFullYear()
  const max = new Date(maxDate.replace(/-/g, '/')).getFullYear()
  let years = []
  for (let i: number = min; i <= max; i++) {
    // @ts-ignore
    years.push(i)
  }
  return years
}

function getMonths (year, minDate, maxDate) {
  const min = new Date(minDate.replace(/-/g, '/'))
  const max = new Date(maxDate.replace(/-/g, '/'))
  const minYear = min.getFullYear()
  const minMonth = min.getMonth() + 1
  const maxYear = max.getFullYear()
  const maxMonth = max.getMonth() + 1
  if (year > minYear && year < maxYear) {
    return Array.from({ length: 12 }, (_, i) => {
      return i + 1
    })
  } else if (year === minYear) {
    let months: number[] = []
    for (let i: number = 1; i <= 12; i++) {
      if (i >= minMonth) months.push(i)
    }
    return months
  } else if (year === maxYear) {
    let months: number[] = []
    for (let i: number = 1; i <= maxMonth; i++) {
      months.push(i)
    }
    return months
  }
}

function getDays (
  y: number,
  m: number,
  minDate, maxDate
) {
  const min = new Date(minDate.replace(/-/g, '/'))
  const max = new Date(maxDate.replace(/-/g, '/'))
  let dateColumnRage: number[] = []
  switch (m) {
    case 2:
      if (y % 4 != 0) {
        dateColumnRage = filterDays (min, max, y, m, 28) 
      } else {
        dateColumnRage = filterDays (min, max, y, m, 29) 
      }
      break
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      dateColumnRage = filterDays (min, max, y, m, 31) 
      break
    default:
      dateColumnRage = filterDays (min, max, y, m, 30)
      break
  }
  return dateColumnRage
}

function getHours (
  y: number,
  m: number,
  d: number,
  minDate, maxDate
) {
  const min = new Date(minDate.replace(/-/g, '/'))
  const max = new Date(maxDate.replace(/-/g, '/'))
  const minYear = min.getFullYear()
  const minMonth = min.getMonth() + 1
  const minDay = min.getDate()
  const minHour = min.getHours()
  const maxYear = max.getFullYear()
  const maxMonth = max.getMonth() + 1
  const maxDay = max.getDate()
  const maxHour = max.getHours()
  let arr: number[] = []
  if (minYear === y && minMonth === m && minDay === d) {
    for (let i: number = 0; i <= 23; i++) {
      if (i >= minHour) arr.push(i)
    }
  } else if (maxYear === y && maxMonth === m && maxDay === d) {
    for (let i: number = 0; i <= maxHour; i++) {
      arr.push(i)
    }
  } else {
    arr = getMapDate(23)
  }
  return arr
}

function getMinutes (
  y: number,
  m: number,
  d: number,
  h: number,
  minDate, maxDate
) {
  const min = new Date(minDate.replace(/-/g, '/'))
  const max = new Date(maxDate.replace(/-/g, '/'))
  const minYear = min.getFullYear()
  const minMonth = min.getMonth() + 1
  const minDay = min.getDate()
  const minHour = min.getHours()
  const minMinute = min.getMinutes()
  const maxYear = max.getFullYear()
  const maxMonth = max.getMonth() + 1
  const maxDay = max.getDate()
  const maxHour = max.getHours()
  const maxMinute = max.getMinutes()
  let arr: number[] = []
  if (minYear === y && minMonth === m && minDay === d && minHour === h) {
    for (let i: number = 0; i <= 59; i++) {
      if (i >= minMinute) arr.push(i)
    }
  } else if (maxYear === y && maxMonth === m && maxDay === d && maxHour === h) {
    for (let i: number = 0; i <= maxMinute; i++) {
      arr.push(i)
    }
  } else {
    arr = getMapDate(59)
  }
  return arr
}

function filterDays (min, max, y, m, num) {
  const minYear = min.getFullYear()
  const minMonth = min.getMonth() + 1
  const minDay = min.getDate()
  const maxYear = max.getFullYear()
  const maxMonth = max.getMonth() + 1
  const maxDay = max.getDate()
  let arr: number[] = []
  if (minYear === y && minMonth === m) {
    for (let i: number = 1; i <= num; i++) {
      if (i >= minDay) arr.push(i)
    }
  } else if (maxYear === y && maxMonth === m) {
    for (let i: number = 1; i <= maxDay; i++) {
      arr.push(i)
    }
  } else {
    arr = getMapDate(num, true)
  }
  return arr
}

function getMapDate (arrTime, isFirst = false) {
  return Array.from({ length: arrTime }, (_, i) => {
    return isFirst ? i + 1 : i
  })
}

export {
  getYears,
  getMonths,
  getDays,
  getHours,
  getMinutes,
  getMapDate
}
