let generatedData: {
  labels: string[];
  datasets: {label: string; backgroundColor: string[]; data: number[]}[];
}
/*
const userID = JSON.stringify(
  jwt_decode(cookie.load("token")).User_id
).split('"')[1];
//  console.log(JSON.stringify(jwt_decode(cookie.load("token"))));

axios
  .get(`${process.env.VUE_APP_API_HOST}/mypage`, {
    headers: {
      Authorization: `Bearer ${cookie.load("token")}`,
    },
  })
  .then((response) => {
    console.log(response);
    setRequests([...response.data]);
  });
  */
export const getDonutChartData = (themes: ColorThemes) => {
  if (generatedData) {
    generatedData.datasets[0].backgroundColor = [themes.danger, themes.info, themes.primary]
  } else {
    generatedData = {
      labels: ['North America', 'South America', 'Australia'],
      datasets: [{
        label: 'Population (millions)',
        backgroundColor: [themes.danger, themes.info, themes.primary],
        data: [2478, 5267, 734],
      }],
    }
  }

  return generatedData
}
