import axios from 'axios';
// import Notiflix from 'notiflix';
axios.defaults.baseURL = 'https://pixabay.com/api';

const searchParams = new URLSearchParams({
  key: '33748627-7891d096c823642155aa62d5d',
  image_type: 'photo',
  orientation: 'horizontal',
});
export const resultSearch = async ({ searchQuery, page }) => {
  const response = await axios.get(
    `/?q=${searchQuery}&${searchParams}&page=${page}&per_page=12`
  );
  return response.data;
};
