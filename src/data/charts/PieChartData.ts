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
export const getPieChartData = (themes: ColorThemes) => ({
  labels: ['Africa', 'Asia', 'Europe'],
  datasets: [{
    label: 'Population (millions)',
    backgroundColor: [themes.primary, themes.warning, themes.danger],
    data: [2478, 5267, 734],
  }],
})
