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
export const getVerticalBarChartData = (themes: ColorThemes) => ({
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  datasets: [
    {
      label: 'USA',
      backgroundColor: themes.primary,
      borderColor: 'transparent',
      data: [50, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11],
    },
    {
      label: 'USSR',
      backgroundColor: themes.info,
      borderColor: 'transparent',
      data: [50, 10, 22, 39, 15, 20, 85, 32, 60, 50, 20, 30],
    },
  ],
})
