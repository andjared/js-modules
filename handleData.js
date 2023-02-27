const getData = async () => {
  const response = await fetch("data.json");
  const data = await response.json();
  return data;
};

export const handleData = async ({ searchQuery }) => {
  const data = await getData();

  if (searchQuery) {
    const filtered = data.filter((item) =>
      item.title.toLowerCase().includes(searchQuery)
    );

    return filtered;
  }

  return data;
};
