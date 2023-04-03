import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api';

const searchParams = new URLSearchParams({
  key: '33748627-7891d096c823642155aa62d5d',
  image_type: 'photo',
  orientation: 'horizontal',
  // safesearch: true,
});
export const resultSearch = async (search, page, per_page) => {
  const response = await axios.get(
    `/?q=${search}&${searchParams}&page=${page}&per_page=${per_page}`
  );
  return response.data;
};
