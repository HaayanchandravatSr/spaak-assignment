type RandomNameResponse = {
  results: {
    name: {
      first: string;
      last: string;
    }
  }[]
}

export const getRandomName = async () => {
  const res = await fetch('https://randomuser.me/api');

  const json: RandomNameResponse = await res.json();
  const { first, last } = json.results[0].name

  return `${first} ${last}`;
}