const getData = async () => {
  const response = await fetch("data.json");
  const data = await response.json();
  return data;
};

export const handleData = async (e) => {
  const data = await getData();

  if (e.target.id === "place") {
    const filtered = data.filter((item) =>
      item.title.toLowerCase().includes(e.target.value.toLowerCase().trim())
    );

    return filtered;
  }

  return data;
};
