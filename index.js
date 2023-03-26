const getSleepHours = day => {
  day = day.toLowerCase();
  switch (day) {
    case 'monday':
      return 7;
      break;
    case 'tuesday':
      return 6;
      break;
    case 'wednesday':
      return 7;
      break;
    case 'thursday':
      return 6;
      break;
    case 'friday':
      return 6;
      break;
    case 'saturday':
      return 7;
      break;
    case 'sunday':
      return 7;
      break;
    default:
      return 'invalid day';
      break;
  }
};

const getActualSleepHours = () =>
  getSleepHours('monday') +
  getSleepHours('tuesday') +
  getSleepHours('wednesday') +
  getSleepHours('thursday') +
  getSleepHours('friday') +
  getSleepHours('saturday') +
  getSleepHours('sunday')
  
const getIdealSleepHours = () => {
  let idealHours = 7; //hours a day
  return idealHours * 7; //hours a week
};

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
    console.log(`You actually sleep for ${actualSleepHours} hours a week. As your ideal is also ${idealSleepHours} hours a week, great! You got the perfect amount of sleep!`);
  } else if (actualSleepHours > idealSleepHours) {
    console.log(`You actually sleep for ${actualSleepHours} hours a week. As your ideal is ${idealSleepHours} hours a week, you're getting about ${actualSleepHours-idealSleepHours} more hours of sleep than needed!`);
  } else {
    console.log(`You actually sleep for ${actualSleepHours} hours a week. As your ideal is ${idealSleepHours} hours a week, you should get some extra rest for about ${idealSleepHours-actualSleepHours} hours per week!`);
  }
};

calculateSleepDebt();
